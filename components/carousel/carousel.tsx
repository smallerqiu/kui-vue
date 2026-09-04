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

const carouselProps = {
  modelValue: { type: Number, default: 0 },
  loop: { type: Boolean as BooleanType, default: true },
  autoplay: Boolean as BooleanType,
  delay: { type: Number, default: 3000 },
  height: { type: Number, default: 256 },
  vertical: Boolean,
  dots: { type: Boolean as BooleanType, default: true },
};

export type CarouselProps = ExtractPropTypes<typeof carouselProps>;

const Carousel = defineComponent({
  name: "Carousel",
  directives: { resize: resizeDir },
  props: carouselProps,
  emits: ["update:modelValue", "change"],
  setup(props, { slots, emit, expose, attrs }) {
    const currentIndex = ref(props.modelValue);
    const posIndex = ref(props.loop ? props.modelValue + 1 : props.modelValue);
    const autoTimer = ref<ReturnType<typeof setInterval> | null>(null);
    const transitionTimer = ref<ReturnType<typeof setTimeout> | null>(null);
    const width = ref(0);
    const animate = ref(false);
    const playing = ref(false);
    const carouselRef = ref<HTMLElement | null>(null);

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
      () => props.modelValue,
      (val) => {
        const len = itemCount.value;
        if (!len) return;
        const next = props.loop ? ((val % len) + len) % len : Math.max(0, Math.min(len - 1, val));
        currentIndex.value = next;
        posIndex.value = props.loop ? next + 1 : next;
        animate.value = false;
        nextTick(() => (animate.value = true));
      },
    );

    const autoToPlay = () => {
      if (autoTimer.value) clearInterval(autoTimer.value);
      autoTimer.value = null;
      if (!props.autoplay || itemCount.value < 2) return;
      autoTimer.value = setInterval(() => {
        toSwitch("right");
      }, props.delay);
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
        transitionTimer.value = setTimeout(() => {
          playing.value = false;
        }, 501);
        autoToPlay();
        return;
      }

      const total = len + 2;
      let index = posIndex.value;
      let nextCurrent = currentIndex.value;

      if (type === "right") {
        index = (index + 1) % total;
        nextCurrent = (nextCurrent + 1) % len;
      } else {
        index = (index - 1 + total) % total;
        nextCurrent = (nextCurrent - 1 + len) % len;
      }

      posIndex.value = index;
      currentIndex.value = nextCurrent;
      emit("update:modelValue", currentIndex.value);
      emit("change", currentIndex.value);

      if (transitionTimer.value) clearTimeout(transitionTimer.value);
      transitionTimer.value = setTimeout(() => {
        playing.value = false;
        if (posIndex.value === total - 1) {
          animate.value = false;
          posIndex.value = 1;
        }
        if (posIndex.value === 0) {
          animate.value = false;
          posIndex.value = total - 2;
        }
      }, 501);
      autoToPlay();
    };

    const toSwitch = (type: "left" | "right") => {
      if (autoTimer.value) clearInterval(autoTimer.value);
      if (playing.value) return;
      playing.value = true;
      change(type);
    };

    const goTo = (index: number) => {
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
      nextTick(() => (animate.value = true));
    };

    watch([() => props.autoplay, () => props.delay, itemCount], autoToPlay);

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
        style: {
          transform: `translate3d(-${offsetX}px, -${offsetY}px, 0)`,
          width: !vertical ? `${newChildren.length * width.value}px` : undefined,
          height: vertical ? `${newChildren.length * props.height}px` : undefined,
          transitionDuration: !animate.value ? "0s" : undefined,
        } as CSSProperties,
      };

      const rootProps = mergeProps(attrs, {
        style: {
          height: props.height + "px",
        } as CSSProperties,
        ref: carouselRef,
        class: ["k-carousel", { "k-carousel-vertical": vertical }],
        onMouseEnter: () => autoTimer.value && clearInterval(autoTimer.value),
        onMouseLeave: () => autoplay && autoToPlay(),
      });

      return (
        <div {...rootProps} v-resize={resize}>
          <div {...wrapperProps}>{newChildren}</div>
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
