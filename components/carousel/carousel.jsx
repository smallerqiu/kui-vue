import Icon from "../icon";
import resize from "../directives/resize";
import { ChevronUp } from "kui-icons";
import { defineComponent, provide, ref, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
export default defineComponent({
  name: "Carousel",
  directives: { resize },
  props: {
    value: { type: Number, default: 0 },
    loop: Boolean,
    autoplay: Boolean,
    delay: { type: Number, default: 3000 },
    vertical: Boolean,
    dots: { type: Boolean, default: true },
  },
  setup(ps, { slots, emit, expose }) {
    const currentIndex = ref(ps.value);
    const posIndex = ref(ps.value);
    const autotimer = ref(null);
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
      change("right");
    };
    const prev = () => {
      change("left");
    };
    expose({ next, prev });
    const autoToPlay = () => {
      clearInterval(autotimer.value);
      autotimer.value = setInterval(() => {
        change("right");
      }, parseInt(ps.delay));
    };
    let childs = slots.default?.();
    const toSwitch = (type) => {
      clearInterval(autotimer.value);
      if (playing.value) return;
      playing.value = true;

      setTimeout(() => {
        playing.value = false;
      }, 501);
    };
    const toIndex = (index) => {
      animate.value = true;
      currentIndex.value = index;
      console.log(index)
      // posIndex.value = index;
    };
    const change = (type) => {
      animate.value = true;
      let index = currentIndex.value;
      if (type === "right") {
        let length = childs?.length || 0;
        if (ps.loop) {
          if (index === length - 1) {
            animate.value = false;
            index = 0;
            // Set transform instantly (without transition) for seamless jump
            nextTick(() => {
              animate.value = true;
            });
          } else {
            index += 1;
          }
        } else {
          index = Math.min(length - 1, index + 1);
        }
      } else if (type === "left") {
        let length = childs?.length || 0;
        if (ps.loop) {
          if (index === 0) {
            animate.value = false;
            index = length - 1;
            nextTick(() => {
              animate.value = true;
            });
          } else {
            index -= 1;
          }
        } else {
          index = Math.max(0, index - 1);
        }
      } else {
        index = type;
      }
      currentIndex.value = index;

      emit("update:value", index);
    };
    const resize = () => {
      animate.value = false;
      width.value = carouselRef.value.offsetWidth;
      height.value = carouselRef.value.offsetHeight;
    };

    onMounted(() => {
      nextTick(() => {
        resize();
        if (ps.autoplay) {
          autoToPlay();
        }
      });
    });

    onBeforeUnmount(() => {
      clearInterval(autotimer.value);
    });

    return () => {
      let { vertical } = ps;
      // let childs = slots.default?.();
      const first = childs?.[0];
      const last = childs?.[childs.length - 1];
      const newChilds = [last, ...childs, first];
      let value = Math.min(childs?.length - 1, currentIndex.value);
      value = Math.max(0, value);
      currentIndex.value = value;
      const classes = [
        "k-carousel",
        {
          "k-carousel-vertical": vertical,
        },
      ];
      const dotsNode = (
        <ul class="k-carousel-dots">
          {childs?.map((x, i) => (
            <li class={{ "k-carousel-dots-active": currentIndex.value == i }} onClick={() => toIndex(i)}>
              {i}
            </li>
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
      const warpperCls = {
        class: "k-carousel-warpper",
        style: {
          transform: `translate3d(-${offsetX}px,-${offsetY}px,0)`,
          width: !vertical ? newChilds?.length * width.value + "px" : "",
          height: vertical ? newChilds?.length * height.value + "px" : "",
          transitionDuration: !animate.value ? "0s" : "",
        },
      };
      const arrowLeft = (
        <span class="k-carousel-arrow-left" onClick={() => toSwitch("left")}>
          <Icon type={ChevronUp} />
        </span>
      );
      const arrowRight = (
        <span class="k-carousel-arrow-right" onClick={() => toSwitch("right")}>
          <Icon type={ChevronUp} />
        </span>
      );
      const props = {
        class: classes,
        ref: carouselRef,
        onMouseEnter: () => clearInterval(autotimer.value),
        onMouseLeave: () => {
          ps.autoplay && autoToPlay();
        },
      };
      return (
        <div v-resize={resize} {...props}>
          <div {...warpperCls}>{newChilds}</div>
          {!vertical ? [arrowLeft, arrowRight] : null}
          {ps.dots ? dotsNode : null}
        </div>
      );
    };
  },
});
