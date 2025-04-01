import Icon from "../icon";
import resize from "../_tool/resize";
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
  setup(ps, { slots }) {
    const currentIndex = ref(ps.value);
    const autotimer = ref(null);
    const width = ref(0);
    const height = ref(0);
    const animate = ref(ps.value > 0 ? false : true);
    const playing = ref(false);
    const carouselRef = ref(null);

    provide("width", width);
    provide("height", height);

    watch("value", (nv, ov) => {
      currentIndex.value = nv;
    });
    const next = () => {
      change("right");
    };
    const prev = () => {
      change("left");
    };
    const autoToPlay = () => {
      clearInterval(autotimer.value);
      autotimer.value = setInterval(() => {
        change("right");
      }, parseInt(ps.delay));
    };
    const change = (type) => {
      if (playing.value) return;
      let childs = slots.default?.();
      animate.value = true;
      let index = currentIndex.value;
      if (type == "left") {
        index -= 1;
        index = Math.max(0, index);
      } else if (type == "right") {
        let length = childs?.length || 0;
        if (!ps.loop) {
          if (index == length - 1) {
            index = 0;
          } else index += 1;
          index = Math.min(length - 1, index);
        }
      } else {
        index = type;
      }
      currentIndex.value = index;
      playing.value = true;
      setTimeout(() => {
        playing.value = false;
      }, 600);
    };
    const resize = () => {
      animate.value = false;
      width.value = carouselRef.value.offsetWidth;
      height.value = carouselRef.value.offsetHeight;
      console.log(height.value);
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
      clearInterval(autotimer);
    });

    return () => {
      let { vertical } = ps;
      let childs = slots.default?.();
      currentIndex.value = Math.min(childs?.length - 1, currentIndex.value);
      currentIndex.value = Math.max(0, currentIndex.value);
      const classes = [
        "k-carousel",
        {
          "k-carousel-vertical": vertical,
        },
      ];

      const dotsNode = (
        <ul class="k-carousel-dots">
          {childs?.map((e, i) => (
            <li class={{ "k-carousel-dots-active": currentIndex.value == i }} onClick={() => change(i)}></li>
          ))}
        </ul>
      );

      let offsetX = 0,
        offsetY = 0;
      if (!vertical) {
        offsetX = currentIndex.value * width.value;
      } else {
        offsetY = currentIndex.value * height.value;
      }
      const warpperCls = {
        class: "k-carousel-warpper",
        style: {
          transform: `translateX(-${offsetX}px) translateY(-${offsetY}px)`,
          width: !vertical ? childs?.length * width.value + "px" : "",
          height: vertical ? childs?.length * height.value + "px" : "",
          transitionDuration: !animate.value ? "0s" : "",
        },
      };
      const arrowLeft = (
        <span class="k-carousel-arrow-left" onClick={() => change("left")}>
          <Icon type={ChevronUp} />
        </span>
      );
      const arrowRight = (
        <span class="k-carousel-arrow-right" onClick={() => change("right")}>
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
          <div {...warpperCls}>{childs}</div>
          {!vertical ? [arrowLeft, arrowRight] : null}
          {ps.dots ? dotsNode : null}
        </div>
      );
    };
  },
});
