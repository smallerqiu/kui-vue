import Tooltip from "../tooltip";
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    vertical: Boolean,
    disabled: Boolean,
    range: Boolean,
    reverse: Boolean,
    max: Number,
    min: Number,
    size: String,
    step: Number,
    value: [Number, Array],
    tipFormatter: [Function, Object],
    type: String,
    tooltipVisible: Boolean,
  },
  // inject: {
  //   bar: { default: null },
  // },
  // data() {
  //   return {
  //     index: 1,
  //     showTip: false,
  //     touch: false,
  //   };
  // },
  // mounted() {
  //   let touch = !!("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch));
  //   this.touch = touch;
  // },
  setup(ps, { slots, emit }) {
    const isMouseDown = ref(false);
    const index = ref(1);
    const showTip = ref(false);
    const touch = !!("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch));
    const mouseMove = (e) => {
      if (isMouseDown.value) {
        e.preventDefault();
        emit("mousemove", e)
      }
    };
    const mouseUp = (e) => {
      isMouseDown.value = false;
      index.value = 1;
      if (ps.tooltipVisible === true) {
        showTip.value = true;
      } else {
        showTip.value = false;
      }
      let [e1, e2] = touch ? ["touchmove", "touchend"] : ["mousemove", "mouseup"];
      document.removeEventListener(e1, mouseMove);
      document.removeEventListener(e2, mouseUp);
    };
    const onMouseDown = (e) => {
      if (ps.disabled) return;
      isMouseDown.value = true;
      showTip.value = true;
      index.value = 2;
      // this.mouseMove(e)
      let [e1, e2] = touch ? ["touchmove", "touchend"] : ["mousemove", "mouseup"];
      document.addEventListener(e1, mouseMove);
      document.addEventListener(e2, mouseUp);
    };

    return () => {
      let { vertical, value, disabled, max, min, size, tipFormatter, range, type, reverse, tooltipVisible } = ps;
      const props = {
        class: ["k-slider-thumb", { "k-slider-thumb-sm": size == "small" }],
        style: {
          // left: `${percent}%`,
          zIndex: index.value,
        },
        onMousedown: onMouseDown,
        touchstart: onMouseDown,
        onMouseenter: () => {
          if (!disabled) showTip.value = true;
        },
        onMouseleave: (e) => {
          if (ps.tooltipVisible == true) {
            showTip.value = true;
            return;
          }
          if (!isMouseDown.value) {
            showTip.value = false;
          }
        },
      };
      let percent,
        diff = max - min;
      if (type == "right") {
        percent = (((range ? value[1] : value) - min) / diff) * 100;
      } else {
        percent = ((value[0] - min) / diff) * 100;
      }
      let sty = {};
      if (vertical) {
        sty = reverse ? { bottom: `${percent}%`, transform: "translateY(50%)" } : { top: `${percent}%` };
      } else {
        sty = reverse ? { right: `${percent}%`, transform: "translateX(50%) translateY(-50%)" } : { left: `${percent}%` };
      }
      props.style = Object.assign(props.style, sty);

      if (tipFormatter === null || tooltipVisible === null) return <div {...props}></div>;

      let tip = "";
      if (type == "right") {
        tip = ps.range ? value[1] : value;
      } else {
        tip = value[0];
      }
      tip = tip?.toString();

      if (tipFormatter !== undefined) {
        tip = tipFormatter(tip);
      }
      const tipProps = {
        props: {
          title: tip,
          // value: showTip.value,
          show: tooltipVisible,
          // trigger: "nromal",
        },
        // on: {
        //   input: (value) => (showTip.value = value),
        // },
      };
      return (
        <Tooltip {...tipProps}>
          <div {...props}></div>
        </Tooltip>
      );
    };
  },
});
