import Tooltip from "../tooltip";
import { defineComponent, ref } from "vue";
export default defineComponent({
  props: {
    vertical: Boolean,
    disabled: Boolean,
    reverse: Boolean,
    max: Number,
    min: Number,
    size: String,
    step: Number,
    value: [Number, String],
    tipFormatter: [Function, Object],
    type: String,
    tooltipVisible: Boolean,
  },
  emits: ["thumbMove", "keydown-update"],
  setup(ps, { slots, emit }) {
    const isMousePressed = ref(false);
    const refThumb = ref();
    const index = ref(1);
    const showTip = ref(ps.tooltipVisible);
    const touch = !!(
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)
    );
    const mouseMove = (e) => {
      if (isMousePressed.value) {
        e.preventDefault();
        emit("thumbMove", e, ps.type);
      }
    };

    const onKeydown = (e) => {
      if (ps.disabled) return;
      if (e.key.includes("Arrow")) {
        emit("keydown-update", e, ps.type);
        e.preventDefault();
      }
    };

    const mouseUp = (e) => {
      isMousePressed.value = false;
      index.value = 1;
      if (ps.tooltipVisible === true) {
        showTip.value = true;
      } else {
        if (e.target.contains(refThumb.value?.$el)) {
          showTip.value = false;
        }
      }
      let [e1, e2] = touch
        ? ["touchmove", "touchend"]
        : ["mousemove", "mouseup"];
      document.removeEventListener(e1, mouseMove);
      document.removeEventListener(e2, mouseUp);
    };
    const onMouseDown = (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log(123);
      // emit("updatePos", 123123123);
      if (ps.disabled) return;
      isMousePressed.value = true;
      showTip.value = true;
      index.value = 2;
      let [e1, e2] = touch
        ? ["touchmove", "touchend"]
        : ["mousemove", "mouseup"];
      document.addEventListener(e1, mouseMove);
      document.addEventListener(e2, mouseUp);
    };

    return () => {
      let {
        vertical,
        value,
        disabled,
        max,
        min,
        size,
        tipFormatter,
        reverse,
        tooltipVisible,
      } = ps;
      const props = {
        tabindex: "0",
        class: ["k-slider-thumb", { "k-slider-thumb-sm": size == "small" }],
        style: {
          // left: `${percent}%`,
          zIndex: index.value,
        },
        onKeydown: onKeydown,
        onMousedown: onMouseDown,
        onTouchstart: onMouseDown,
        onMouseenter: () => {
          if (!disabled) showTip.value = true;
        },
        onMouseleave: (e) => {
          if (ps.tooltipVisible == true) {
            showTip.value = true;
            return;
          }
          if (!isMousePressed.value) {
            showTip.value = false;
          }
        },
      };
      let percent,
        diff = max - min;

      percent = ((value - min) / diff) * 100;
      let sty = {};
      if (vertical) {
        sty = reverse
          ? { bottom: `${percent}%`, transform: "translateY(50%)" }
          : { top: `${percent}%` };
      } else {
        sty = reverse
          ? {
              right: `${percent}%`,
              transform: "translateX(50%) translateY(-50%)",
            }
          : { left: `${percent}%` };
      }
      props.style = Object.assign(props.style, sty);

      if (tipFormatter === null || tooltipVisible === null)
        return <div {...props}></div>;

      let tip = value?.toString();

      if (tipFormatter !== undefined) {
        tip = tipFormatter(tip);
      }
      const tipProps = {
        ref: refThumb,
        title: tip,
        show: showTip.value,
      };
      return (
        <Tooltip {...tipProps}>
          <div {...props}></div>
        </Tooltip>
      );
    };
  },
});
