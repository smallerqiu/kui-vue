import { defineComponent, ref, computed } from "vue";
import Tooltip from "../tooltip";

export default defineComponent({
  props: {
    value: Number,
    min: Number,
    max: Number,
    vertical: Boolean,
    size: [String, Number],
    reverse: Boolean,
    disabled: Boolean,
    tooltipVisible: { type: Boolean, default: null },
    tipFormatter: Function,
    dragging: Boolean, // 接收父组件传入的拖拽状态
  },
  emits: ["dragStart", "keydownUpdate"],
  setup(props, { emit, expose }) {
    const isHover = ref(false);
    const elRef = ref(null);

    expose({
      focus: () => {
        elRef.value?.focus();
      },
    });

    // 计算位置百分比
    const percent = computed(() => {
      const diff = props.max - props.min;
      if (diff === 0) return 0;
      return Math.max(0, Math.min(100, ((props.value - props.min) / diff) * 100));
    });

    const thumbStyle = computed(() => {
      const p = percent.value / 100;
      const size = props.size === "small" ? 14 : 24;

      // Thumb 始终遵循标准的 Active Range 映射，确保不溢出容器
      // 不需要做分段处理，分段是留给 Track 的
      const position = `calc(${p * 100}% + ${(0.5 - p) * size}px)`;

      return props.vertical
        ? { [props.reverse ? "top" : "bottom"]: position, transform: "translate(-50%, 50%)" }
        : { [props.reverse ? "right" : "left"]: position, transform: "translate(-50%, -50%)" };
    });

    const handleDown = (e) => {
      if (props.disabled) return;
      e.preventDefault(); // 防止选中文本
      e.stopPropagation();
      emit("dragStart", e);
    };

    return () => {
      const displayValue = props.tipFormatter
        ? props.tipFormatter(props.value)
        : String(props.value);
      const showTooltip = props.tooltipVisible === true ? true : props.dragging || isHover.value;
      return (
        <Tooltip
          title={displayValue}
          disabled={props.disabled || props.tooltipVisible === false}
          show={showTooltip && !props.disabled}
          placement={props.vertical ? "right" : "top"}
        >
          <div
            class={[
              "k-slider-thumb",
              {
                "is-dragging": props.dragging,
                "k-slider-thumb-sm": props.size === "small",
              },
            ]}
            style={thumbStyle.value}
            ref={elRef}
            tabindex={props.disabled ? null : 0}
            onMousedown={handleDown}
            onTouchstart={handleDown}
            onKeydown={(e) => emit("keydownUpdate", e)}
            onMouseenter={() => (isHover.value = true)}
            onMouseleave={() => (isHover.value = false)}
          />
        </Tooltip>
      );
    };
  },
});
