import { useInitialValue } from "../utils/model-value";
import { ArrowLeft, ArrowRight } from "kui-icons";
import {
  Fragment,
  cloneVNode,
  computed,
  defineComponent,
  mergeProps,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type VNode,
} from "vue";
import type { BooleanType } from "../const/types";
import resizeDir from "../directives/resize";
import Icon from "../icon";
import { bindCarouselDrag, readCarouselOffset, retargetCarousel } from "./drag";

const carouselProps = {
  modelValue: { type: Number, default: undefined },
  value: { type: Number, default: 0 },
  loop: { type: Boolean as BooleanType, default: true },
  autoplay: Boolean as BooleanType,
  delay: { type: Number, default: 3000 },
  height: { type: Number, default: 256 },
  vertical: Boolean,
  dots: { type: Boolean as BooleanType, default: true },
  swipeable: { type: Boolean as BooleanType, default: true },
  draggable: { type: Boolean as BooleanType, default: true },
};

export type CarouselProps = ExtractPropTypes<typeof carouselProps>;

const Carousel = defineComponent({
  name: "Carousel",
  directives: { resize: resizeDir },
  props: carouselProps,
  emits: {
    "update:modelValue": (value: number) => Number.isFinite(value),
    change: (value: number) => Number.isFinite(value),
  },
  setup(props, { slots, emit, expose, attrs }) {
    const initialModel = useInitialValue(props);
    const currentIndex = ref(initialModel.value);
    const posIndex = ref(props.loop ? initialModel.value + 1 : initialModel.value);
    const autoTimer = ref<ReturnType<typeof setInterval> | null>(null);
    const transitionTimer = ref<ReturnType<typeof setTimeout> | null>(null);
    const width = ref(0);
    const animate = ref(false);
    const playing = ref(false);
    const carouselRef = ref<HTMLElement | null>(null);
    const dragOffset = ref(0);
    const dragging = ref(false);
    const settleDuration = ref<number | null>(null);
    let hovered = false;

    provide("width", width);
    provide(
      "height",
      computed(() => props.height),
    );

    const flatten = (nodes: VNode[]): VNode[] => {
      const result: VNode[] = [];
      nodes.forEach((vnode) => {
        if (vnode.type === Fragment && Array.isArray(vnode.children)) {
          result.push(...flatten(vnode.children as VNode[]));
        } else {
          result.push(vnode);
        }
      });
      return result;
    };

    const itemCount = ref(0);

    watch(
      () => initialModel.value,
      (val) => {
        const len = itemCount.value;
        if (!len) return;
        const next = props.loop ? ((val % len) + len) % len : Math.max(0, Math.min(len - 1, val));
        // A parent echoing our model update must not interrupt the settling animation.
        if (next === currentIndex.value) return;
        currentIndex.value = next;
        posIndex.value = props.loop ? next + 1 : next;
        animate.value = false;
        nextTick(() => (animate.value = true));
      },
    );

    const autoToPlay = () => {
      if (autoTimer.value) clearInterval(autoTimer.value);
      autoTimer.value = null;
      if (!props.autoplay || itemCount.value < 2 || dragging.value || hovered) return;
      autoTimer.value = setInterval(() => {
        toSwitch("right");
      }, props.delay);
    };

    const finishTransition = () => {
      if (transitionTimer.value) clearTimeout(transitionTimer.value);
      transitionTimer.value = null;
      playing.value = false;
      settleDuration.value = null;
      if (props.loop && posIndex.value !== currentIndex.value + 1) {
        animate.value = false;
        posIndex.value = currentIndex.value + 1;
      }
    };

    const change = (type: "left" | "right") => {
      animate.value = true;
      const len = itemCount.value;
      if (len < 2) {
        playing.value = false;
        return;
      }

      if (!props.loop) {
        const next = Math.max(
          0,
          Math.min(len - 1, currentIndex.value + (type === "right" ? 1 : -1)),
        );
        if (next === currentIndex.value) {
          playing.value = false;
          return;
        }
        posIndex.value = next;
        currentIndex.value = next;
        emit("update:modelValue", next);
        emit("change", next);
        if (transitionTimer.value) clearTimeout(transitionTimer.value);
        transitionTimer.value = setTimeout(finishTransition, 501);
        autoToPlay();
        return;
      }

      let index = posIndex.value;
      let nextCurrent = currentIndex.value;

      if (type === "right") {
        index += 1;
        nextCurrent = (nextCurrent + 1) % len;
      } else {
        index -= 1;
        nextCurrent = (nextCurrent - 1 + len) % len;
      }

      posIndex.value = index;
      currentIndex.value = nextCurrent;
      emit("update:modelValue", currentIndex.value);
      emit("change", currentIndex.value);

      if (transitionTimer.value) clearTimeout(transitionTimer.value);
      transitionTimer.value = setTimeout(finishTransition, 501);
      autoToPlay();
    };

    const toSwitch = (type: "left" | "right") => {
      if (autoTimer.value) clearInterval(autoTimer.value);
      if (dragging.value) return;
      const step = type === "right" ? 1 : -1;
      const len = itemCount.value;
      if (playing.value && props.loop && len > 1 && carouselRef.value) {
        const next = (currentIndex.value + step + len) % len;
        // change() adds step below; start it from the rebased physical target.
        posIndex.value =
          retargetCarousel(
            carouselRef.value,
            props.vertical,
            props.vertical ? props.height : width.value,
            len,
            next,
            step,
          ) - step;
      }
      if (playing.value) settleDuration.value = 280;
      playing.value = true;
      change(type);
    };

    const goTo = (index: number) => {
      settleDuration.value = null;
      const len = itemCount.value;
      if (!len) return;
      if (autoTimer.value) clearInterval(autoTimer.value);
      if (transitionTimer.value) clearTimeout(transitionTimer.value);
      playing.value = false;
      const next = props.loop ? ((index % len) + len) % len : Math.max(0, Math.min(len - 1, index));
      animate.value = true;
      currentIndex.value = next;
      posIndex.value = props.loop ? next + 1 : next;
      emit("update:modelValue", next);
      emit("change", next);
      autoToPlay();
    };

    const resize = () => {
      if (!carouselRef.value) return;
      animate.value = false;
      width.value = carouselRef.value.offsetWidth;
      nextTick(() => {
        if (!carouselRef.value) return;
        // Flush the measured position before re-enabling CSS transitions.
        carouselRef.value.querySelector(".k-carousel-wrapper")?.getBoundingClientRect();
        animate.value = true;
      });
    };

    watch([() => props.autoplay, () => props.delay, itemCount], autoToPlay);

    watch(
      carouselRef,
      (root, _, onCleanup) => {
        if (!root) return;
        const dispose = bindCarouselDrag(root, {
          options: () => ({
            swipeable: props.swipeable,
            draggable: props.draggable,
            vertical: props.vertical,
            size: props.vertical ? props.height : width.value,
            count: itemCount.value,
            index: currentIndex.value,
            loop: props.loop,
          }),
          start: () => {
            const offset = readCarouselOffset(
              root,
              props.vertical,
              posIndex.value,
              props.vertical ? props.height : width.value,
            );
            if (transitionTimer.value) clearTimeout(transitionTimer.value);
            transitionTimer.value = null;
            playing.value = false;
            posIndex.value = props.loop ? currentIndex.value + 1 : currentIndex.value;
            settleDuration.value = null;
            dragging.value = true;
            if (autoTimer.value) clearInterval(autoTimer.value);
            return offset;
          },
          offset: (offset) => {
            dragOffset.value = offset;
          },
          finish: (step) => {
            dragging.value = false;
            animate.value = true;
            if (step) toSwitch(step === 1 ? "right" : "left");
            autoToPlay();
          },
          settle: (duration) => {
            settleDuration.value = duration;
          },
        });
        onCleanup(() => {
          dispose();
          dragging.value = false;
        });
      },
      { flush: "post" },
    );

    expose({ next: () => toSwitch("right"), prev: () => toSwitch("left"), goTo });

    onMounted(() => {
      nextTick(() => {
        resize();
        autoToPlay();
      });
    });

    onBeforeUnmount(() => {
      if (autoTimer.value) clearInterval(autoTimer.value);
      if (transitionTimer.value) clearTimeout(transitionTimer.value);
    });

    return () => {
      const items = flatten(slots.default?.() || []);
      const len = items.length;
      if (itemCount.value !== len) {
        itemCount.value = len;
        if (len) {
          const next = props.loop
            ? ((currentIndex.value % len) + len) % len
            : Math.max(0, Math.min(len - 1, currentIndex.value));
          currentIndex.value = next;
          posIndex.value = props.loop ? next + 1 : next;
        }
      }
      if (len === 0) return null;

      const { vertical, dots, autoplay } = props;
      const newChildren = props.loop
        ? [cloneVNode(items[len - 1]), ...items, cloneVNode(items[0])]
        : items;
      const activeIndex = Math.max(0, Math.min(len - 1, currentIndex.value));

      const offsetX = !vertical ? posIndex.value * width.value : 0;
      const offsetY = vertical ? posIndex.value * props.height : 0;

      const wrapperProps = {
        class: "k-carousel-wrapper",
        onTransitionend: (event: TransitionEvent) => {
          if (dragging.value) return;
          if (event.target === event.currentTarget && event.propertyName === "transform")
            finishTransition();
        },
        style: {
          position: "relative",
          transform: `translate3d(${-offsetX + (!vertical ? dragOffset.value : 0)}px, ${-offsetY + (vertical ? dragOffset.value : 0)}px, 0)`,
          width: !vertical ? `${newChildren.length * width.value}px` : undefined,
          height: vertical ? `${newChildren.length * props.height}px` : undefined,
          transitionDuration:
            !animate.value || dragging.value
              ? "0s"
              : settleDuration.value === null
                ? undefined
                : `${settleDuration.value}ms`,
          transitionTimingFunction:
            settleDuration.value === null ? undefined : "cubic-bezier(0.22, 1, 0.36, 1)",
          touchAction: props.swipeable && len > 1 ? (vertical ? "pan-x" : "pan-y") : undefined,
          userSelect: dragging.value ? "none" : undefined,
        } as CSSProperties,
      };

      const rootProps = mergeProps(attrs, {
        style: {
          height: props.height + "px",
        } as CSSProperties,
        ref: carouselRef,
        class: ["k-carousel", { "k-carousel-vertical": vertical }],
        onPointerenter: (event: PointerEvent) => {
          if (event.pointerType === "mouse") {
            hovered = true;
            if (autoTimer.value) clearInterval(autoTimer.value);
          }
        },
        onPointerleave: (event: PointerEvent) => {
          if (event.pointerType === "mouse") {
            hovered = false;
            if (autoplay) autoToPlay();
          }
        },
      });

      return (
        <div {...rootProps} v-resize={resize}>
          <div {...wrapperProps}>
            {newChildren}
            {props.loop &&
              len > 1 &&
              [-1, 1].map((side) => (
                <div
                  key={side}
                  aria-hidden="true"
                  inert
                  style={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: vertical ? "column" : "row",
                    left: vertical ? 0 : `${(side < 0 ? -len : len + 2) * width.value}px`,
                    top: vertical ? `${(side < 0 ? -len : len + 2) * props.height}px` : 0,
                    width: vertical ? "100%" : `${len * width.value}px`,
                    pointerEvents: "none",
                  }}
                >
                  {items.map((_, i) => cloneVNode(items[(i + (side < 0 ? len - 1 : 1)) % len]))}
                </div>
              ))}
          </div>
          {!vertical && len > 1 && (
            <>
              <button
                type="button"
                class="k-carousel-arrow-left"
                aria-label="Previous slide"
                disabled={!props.loop && currentIndex.value === 0}
                onClick={() => toSwitch("left")}
              >
                <Icon type={ArrowLeft} />
              </button>
              <button
                type="button"
                class="k-carousel-arrow-right"
                aria-label="Next slide"
                disabled={!props.loop && currentIndex.value === len - 1}
                onClick={() => toSwitch("right")}
              >
                <Icon type={ArrowRight} />
              </button>
            </>
          )}
          {dots && len > 1 && (
            <div class="k-carousel-dots" role="tablist" aria-label="Slides">
              {items.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  class={{ "k-carousel-dots-active": activeIndex === i }}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-selected={activeIndex === i}
                  role="tab"
                  onClick={() => goTo(i)}
                />
              ))}
            </div>
          )}
        </div>
      );
    };
  },
});
export default Carousel;
