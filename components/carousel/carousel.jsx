import Icon from "../icon";
import resize from "../directives/resize";
import { ArrowBack, ArrowForward } from "kui-icons/dist/icons";
import { defineComponent, provide, ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import { withInstall } from "../utils/vue";
const Carousel = defineComponent({
  name: "Carousel",
  directives: { resize },
  props: {
    value: { type: Number, default: 0 },
    loop: { type: Boolean, default: true },
    autoplay: Boolean,
    delay: { type: Number, default: 3000 },
    vertical: Boolean,
    dots: { type: Boolean, default: true },
  },
  setup(ps, { slots, emit, expose }) {
    const currentIndex = ref(ps.value);
    const posIndex = ref(ps.loop ? ps.value + 1 : ps.value);
    const autoTimer = ref(null);
    const width = ref(0);
    const height = ref(0);
    const animate = ref(ps.value > 0 ? false : true);
    const playing = ref(false);
    const carouselRef = ref(null);

    provide("width", width);
    provide("height", height);

    watch(
      () => ps.value,
      (nv, ov) => {
        currentIndex.value = nv;
      }
    );
    const next = () => {
      toSwitch("right");
    };
    const prev = () => {
      toSwitch("left");
    };
    const goTo = (index) => {
      clearInterval(autoTimer.value);
      animate.value = true;
      currentIndex.value = index;
      posIndex.value = ps.loop ? index + 1 : index;
      emit("update:value", index);
      autoToPlay();
    };
    expose({ next, prev, goTo });
    const autoToPlay = () => {
      if (!ps.autoplay) return;
      clearInterval(autoTimer.value);
      autoTimer.value = setInterval(() => {
        change("right");
      }, parseInt(ps.delay));
    };
    let children = slots.default?.();
    const toSwitch = (type) => {
      clearInterval(autoTimer.value);
      if (playing.value) return;
      playing.value = true;
      change(type);
    };

    const change = (type) => {
      animate.value = true;

      const total = ps.loop ? children?.length + 2 : children?.length;
      let index = posIndex.value;
      let nextCurrent = currentIndex.value;

      if (type === "right") {
        index = (index + 1) % total;

        if (ps.loop) {
          nextCurrent = (nextCurrent + 1) % children?.length;
        } else {
          nextCurrent = index;
        }
      } else if (type === "left") {
        index = (index - 1 + total) % total;

        if (ps.loop) {
          nextCurrent = (nextCurrent - 1 + children?.length) % children?.length;
        } else {
          nextCurrent = index;
        }
      }

      posIndex.value = index;
      currentIndex.value = nextCurrent;
      emit("update:value", currentIndex.value);

      setTimeout(() => {
        playing.value = false;
        if (ps.loop) {
          let count = ps.loop ? children?.length + 2 : children?.length;
          if (posIndex.value === count - 1) {
            animate.value = false;
            posIndex.value = 1;
          }
          if (posIndex.value === 0) {
            animate.value = false;
            posIndex.value = count - 2;
          }
        }
      }, 501);
      autoToPlay();
    };
    const resize = () => {
      animate.value = false;
      width.value = carouselRef.value.offsetWidth;
      height.value = carouselRef.value.offsetHeight;
    };

    onMounted(() => {
      nextTick(() => {
        resize();
        autoToPlay();
      });
    });

    onBeforeUnmount(() => {
      clearInterval(autoTimer.value);
    });

    return () => {
      let { vertical } = ps;
      const first = children?.[0];
      const last = children?.[children.length - 1];
      const newChildren = ps.loop ? [last, ...children, first] : children;
      let index = Math.min(children?.length - 1, currentIndex.value);
      index = Math.max(0, index);
      const classes = [
        "k-carousel",
        {
          "k-carousel-vertical": vertical,
        },
      ];
      const dotsNode = (
        <ul class="k-carousel-dots">
          {children?.map((x, i) => (
            <li class={{ "k-carousel-dots-active": index == i }} onClick={() => goTo(i)}></li>
          ))}
        </ul>
      );

      let offsetX = 0,
        offsetY = 0;
      if (!vertical) {
        offsetX = posIndex.value * width.value;
      } else {
        offsetY = posIndex.value * height.value;
      }
      const wrapperCls = {
        class: "k-carousel-wrapper",
        style: {
          transform: `translate3d(-${offsetX}px,-${offsetY}px,0)`,
          width: !vertical ? newChildren?.length * width.value + "px" : "",
          height: vertical ? newChildren?.length * height.value + "px" : "",
          transitionDuration: !animate.value ? "0s" : "",
        },
      };
      const arrowLeft = (
        <span class="k-carousel-arrow-left" onClick={() => toSwitch("left")}>
          <Icon type={ArrowBack} />
        </span>
      );
      const arrowRight = (
        <span class="k-carousel-arrow-right" onClick={() => toSwitch("right")}>
          <Icon type={ArrowForward} />
        </span>
      );
      const props = {
        class: classes,
        ref: carouselRef,
        onMouseEnter: () => clearInterval(autoTimer.value),
        onMouseLeave: () => {
          ps.autoplay && autoToPlay();
        },
      };
      return (
        <div v-resize={resize} {...props}>
          <div {...wrapperCls}>{newChildren}</div>
          {!vertical ? [arrowLeft, arrowRight] : null}
          {ps.dots ? dotsNode : null}
        </div>
      );
    };
  },
});
export default withInstall(Carousel);
