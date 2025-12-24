import { defineComponent, ref, computed } from "vue";
import Tooltip from "../tooltip";

export default defineComponent({
  props: {
    value: Number,
    min: Number,
    max: Number,
    vertical: Boolean,
    reverse: Boolean,
    disabled: Boolean,
    tooltipVisible: Boolean,
    tipFormatter: Function,
  },
  emits: ["thumbMove", "keydownUpdate"],
  setup(props, { emit }) {
    const isDragging = ref(false);
    const isHover = ref(false);

    const percent = computed(() => {
      const diff = props.max - props.min;
      return diff === 0 ? 0 : ((props.value - props.min) / diff) * 100;
    });

    const thumbStyle = computed(() => {
      const p = percent.value;
      if (props.vertical) {
        // 垂直模式：标准 bottom 定位，反向 top 定位
        return props.reverse 
          ? { top: `${p}%`, transform: 'translateY(-50%)' } 
          : { bottom: `${p}%`, transform: 'translateY(50%)' };
      }
      // 水平模式：标准 left 定位，反向 right 定位
      return props.reverse 
        ? { right: `${p}%`, transform: 'translateX(50%)' } 
        : { left: `${p}%`, transform: 'translateX(-50%)' };
    });

    const handleMove = (e) => {
      if (isDragging.value) emit("thumbMove", e);
    };

    const stopDrag = () => {
      isDragging.value = false;
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchmove", handleMove);
      document.removeEventListener("touchend", stopDrag);
    };

    const startDrag = (e) => {
      if (props.disabled) return;
      e.preventDefault();
      e.stopPropagation();
      isDragging.value = true;
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("mouseup", stopDrag);
      document.addEventListener("touchmove", handleMove, { passive: false });
      document.addEventListener("touchend", stopDrag);
    };

    return () => {
      const displayValue = props.tipFormatter ? props.tipFormatter(props.value) : props.value;
      const showTooltip = props.tooltipVisible || isDragging.value || isHover.value;

      return (
        <Tooltip title={displayValue} show={showTooltip && !props.disabled}>
          <div
            class="k-slider-thumb"
            style={thumbStyle.value}
            tabindex={props.disabled ? -1 : 0}
            onMousedown={startDrag}
            onTouchstart={startDrag}
            onKeydown={(e) => emit("keydownUpdate", e)}
            onMouseenter={() => isHover.value = true}
            onMouseleave={() => isHover.value = false}
          />
        </Tooltip>
      );
    };
  },
});