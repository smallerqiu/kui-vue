import { ArrowBack, ArrowForward } from "kui-icons";
import {
  Fragment,
  computed,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
  type CSSProperties,
  type DefineComponent,
  type ExtractPropTypes,
  type VNode,
} from "vue";
import resizeDir from "../directives/resize";
import Icon from "../icon";

const carouselProps = {
  value: { type: Number, default: 0 },
  loop: { type: Boolean, default: true },
  autoplay: Boolean,
  delay: { type: Number, default: 3000 },
  vertical: Boolean,
  dots: { type: Boolean, default: true },
};

export type CarouselProps = ExtractPropTypes<typeof carouselProps>;

export default defineComponent({
  name: "Carousel",
  directives: { resize: resizeDir },
  props: carouselProps,
  emits: ["update:value", "change"],
  setup(props, { slots, emit, expose, attrs }) {
    const currentIndex = ref(props.value);
    const posIndex = ref(props.loop ? props.value + 1 : props.value);
    const autoTimer = ref<ReturnType<typeof setInterval> | null>(null);
    const width = ref(0);
    const height = ref(0);
    const animate = ref(props.value <= 0);
    const playing = ref(false);
    const carouselRef = ref<HTMLElement | null>(null);

    provide("width", width);
    provide("height", height);

    const flatten = (nodes: VNode[]): VNode[] => {
      let result: VNode[] = [];
      nodes.forEach((vnode) => {
        if (vnode.type === Fragment && Array.isArray(vnode.children)) {
          result.push(...flatten(vnode.children as VNode[]));
        } else {
          result.push(vnode);
        }
      });
      return result;
    };

    const children = computed(() => {
      const raw = slots.default?.() || [];
      return flatten(raw);
    });

    watch(() => props.value, (val) => {
      currentIndex.value = val;
    });

    watch(() => children.value.length, (newLen, oldLen) => {
      if (newLen !== oldLen) {
        currentIndex.value = 0;
        posIndex.value = props.loop ? 1 : 0;
      }
    });

    const autoToPlay = () => {
      if (!props.autoplay) return;
      if (autoTimer.value) clearInterval(autoTimer.value);
      autoTimer.value = setInterval(() => {
        change("right");
      }, props.delay);
    };

    const change = (type: "left" | "right") => {
      animate.value = true;
      const len = children.value.length;
      if (len === 0) return;

      const total = props.loop ? len + 2 : len;
      let index = posIndex.value;
      let nextCurrent = currentIndex.value;

      if (type === "right") {
        index = (index + 1) % total;
        nextCurrent = props.loop ? (nextCurrent + 1) % len : index;
      } else {
        index = (index - 1 + total) % total;
        nextCurrent = props.loop ? (nextCurrent - 1 + len) % len : index;
      }

      posIndex.value = index;
      currentIndex.value = nextCurrent;
      emit("update:value", currentIndex.value);

      setTimeout(() => {
        playing.value = false;
        if (props.loop) {
          if (posIndex.value === total - 1) {
            animate.value = false;
            posIndex.value = 1;
          }
          if (posIndex.value === 0) {
            animate.value = false;
            posIndex.value = total - 2;
          }
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
      if (autoTimer.value) clearInterval(autoTimer.value);
      animate.value = true;
      currentIndex.value = index;
      posIndex.value = props.loop ? index + 1 : index;
      emit("update:value", index);
      autoToPlay();
    };

    const resize = () => {
      if (!carouselRef.value) return;
      animate.value = false;
      width.value = carouselRef.value.offsetWidth;
      height.value = carouselRef.value.offsetHeight;
    };

    expose({ next: () => toSwitch("right"), prev: () => toSwitch("left"), goTo });

    onMounted(() => {
      nextTick(() => {
        resize();
        autoToPlay();
      });
    });

    onBeforeUnmount(() => {
      if (autoTimer.value) clearInterval(autoTimer.value);
    });

    return () => {
      const items = children.value;
      const len = items.length;
      if (len === 0) return null;

      const { vertical, dots, autoplay } = props;
      const newChildren = props.loop ? [items[len - 1], ...items, items[0]] : items;
      const activeIndex = Math.max(0, Math.min(len - 1, currentIndex.value));

      const offsetX = !vertical ? posIndex.value * width.value : 0;
      const offsetY = vertical ? posIndex.value * height.value : 0;

      const wrapperProps = {
        class: "k-carousel-wrapper",
        style: {
          transform: `translate3d(-${offsetX}px, -${offsetY}px, 0)`,
          width: !vertical ? `${newChildren.length * width.value}px` : undefined,
          height: vertical ? `${newChildren.length * height.value}px` : undefined,
          transitionDuration: !animate.value ? "0s" : undefined,
        } as CSSProperties,
      };

      const rootProps = {
        ...attrs,
        ref: carouselRef,
        class: ["k-carousel", { "k-carousel-vertical": vertical }],
        onMouseEnter: () => autoTimer.value && clearInterval(autoTimer.value),
        onMouseLeave: () => autoplay && autoToPlay(),
      };

      return (
        <div {...rootProps} v-resize={resize}>
          <div {...wrapperProps}>{newChildren}</div>
          {!vertical && (
            <>
              <span class="k-carousel-arrow-left" onClick={() => toSwitch("left")}>
                <Icon type={ArrowBack} />
              </span>
              <span class="k-carousel-arrow-right" onClick={() => toSwitch("right")}>
                <Icon type={ArrowForward} />
              </span>
            </>
          )}
          {dots && (
            <ul class="k-carousel-dots">
              {items.map((_, i) => (
                <li
                  key={i}
                  class={{ "k-carousel-dots-active": activeIndex === i }}
                  onClick={() => goTo(i)}
                />
              ))}
            </ul>
          )}
        </div>
      );
    };
  },
}) as DefineComponent<CarouselProps>;