import { computed, defineComponent, ref } from "vue";
import type { BooleanType } from "../const/types";
import Tooltip from "../tooltip";

export default defineComponent({
  props: {
    value: { type: Number, required: true },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    vertical: Boolean as BooleanType,
    size: [String, Number],
    reverse: Boolean as BooleanType,
    disabled: Boolean as BooleanType,
    tooltipVisible: { type: Boolean as BooleanType, default: null },
    tipFormatter: Function,
    dragging: Boolean as BooleanType, // 接收父组件传入的拖拽状态
  },
  emits: ["dragStart", "keydownUpdate"],
  setup(props, { emit, expose }) {
    const isHover = ref(false);
    const elRef = ref<HTMLElement>();

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
      const p = percent.value;
      const size = props.size === "small" ? 18 : 24;

      // 基于逻辑起点的偏移计算
      const position = `calc(${p}% + ${(0.5 - p / 100) * size}px)`;

      if (props.vertical) {
        return props.reverse
          ? { top: position, transform: "translate(-50%, -50%)" } // 注意：vertical 时 translate(-50%[X], -50%[Y])
          : { bottom: position, transform: "translate(-50%, 50%)" };
      }
      return props.reverse
        ? { right: position, transform: "translate(50%, -50%)" } // 反向：translateX(50%)
        : { left: position, transform: "translate(-50%, -50%)" }; // 正向：translateX(-50%)
    });

    const handleDown = (e: MouseEvent | TouchEvent) => {
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
      const thumpProps = {
        class: [
          "k-slider-thumb",
          {
            "is-dragging": props.dragging,
            "k-slider-thumb-sm": props.size === "small",
          },
        ],
        style: thumbStyle.value,
        ref: elRef,
        tabindex: props.disabled ? undefined : 0,
        onMousedown: handleDown,
        onTouchstart: handleDown,
        onKeydown: (e: KeyboardEvent) => emit("keydownUpdate", e),
        onMouseenter: () => (isHover.value = true),
        onMouseleave: () => (isHover.value = false),
      };
      return (
        <Tooltip
          title={displayValue}
          disabled={props.disabled || props.tooltipVisible === false}
          show={showTooltip && !props.disabled}
          placement={props.vertical ? "right" : "top"}
        >
          <div {...thumpProps} />
        </Tooltip>
      );
    };
  },
});
