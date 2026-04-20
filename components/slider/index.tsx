import {
  defineComponent,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import Thumb from "./thumb";

import Big from "big.js";
import type { BooleanType } from "../const/types";
import { getPosition } from "../utils/mouse";
import { getClosestStep } from "../utils/number";

export const sliderProps = {
  modelValue: { type: [Array, Number] as PropType<number[] | number>, default: 0 },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
  step: { type: Number as PropType<number | null>, default: 1 },
  disabled: Boolean as BooleanType,
  vertical: Boolean as BooleanType,
  reverse: Boolean as BooleanType,
  range: Boolean as BooleanType,
  marks: Object as PropType<Record<number, string>>,
  size: [String, Number] as PropType<"small" | number>,
  included: { type: Boolean as BooleanType, default: true },
  tipFormatter: Function as PropType<(value: number) => string | number>,
  tooltipVisible: { type: Boolean as BooleanType, default: null },
};

export type SliderProps = ExtractPropTypes<typeof sliderProps>;

const Slider = defineComponent({
  name: "Slider",
  props: sliderProps,
  emits: ["update:modelValue", "change"],

  setup(props, { emit }) {
    const size = inject("size", undefined);
    const railWidth = ref(0);
    const thumbRefs = ref<HTMLElement[]>([]);
    const setThumbRef = (el: any, index: number) => {
      if (el) thumbRefs.value[index] = el;
    };

    const railRef = ref();
    // 记录当前正在拖拽的是哪一个滑块 (0 或 1，-1表示未拖拽)
    const draggingIndex = ref(-1);

    // 内部值始终保持排序状态
    const internalValue = ref<number | number[]>(props.range ? [props.min, props.min] : props.min);

    const sortValue = (val: number | number[]) => {
      if (Array.isArray(val)) {
        return [...val].sort((a, b) => a - b);
      }
      return val;
    };

    const formatValue = (val: number | number[]): number | number[] => {
      if (props.range) {
        const arr = Array.isArray(val) ? [...val] : [props.min, props.min];
        return sortValue(arr.map((v) => getClosestStep(v, props)));
      }
      return getClosestStep(val as number, props);
    };

    const updateSize = () => {
      if (railRef.value) {
        railWidth.value = props.vertical ? railRef.value.offsetHeight : railRef.value.offsetWidth;
      }
    };

    onMounted(() => {
      updateSize();
      window.addEventListener("resize", updateSize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateSize);
    });

    watch(
      () => props.modelValue,
      (nv) => {
        // 只有当不在拖拽状态时，才响应外部变化，防止拖拽时的抖动
        if (draggingIndex.value === -1) {
          internalValue.value = formatValue(nv);
        }
      },
      { immediate: true }
    );

    const getPercent = (val: number) => {
      const diff = props.max - props.min;
      return diff === 0 ? 0 : Math.max(0, Math.min(100, ((val - props.min) / diff) * 100));
    };

    // 计算鼠标位置对应的数值
    const getValueFromEvent = (e: MouseEvent | TouchEvent) => {
      const rect = railRef.value.getBoundingClientRect();
      const W = props.vertical ? rect.height : rect.width;
      const size = props.size === "small" ? 18 : 24;
      const R = size / 2;

      // 获取点击位置距离【物理起点】（Left/Bottom）的距离
      let [x, y] = getPosition(e);
      let distFromPhysicalStart = props.vertical ? rect.bottom - y : x - rect.left;

      // 如果是反向，转换成距离【逻辑起点】（Right/Top）的距离
      const distFromLogicalStart = props.reverse
        ? W - distFromPhysicalStart
        : distFromPhysicalStart;

      // 计算比例并映射回数值
      const percent = Math.max(0, Math.min(1, (distFromLogicalStart - R) / (W - size)));
      const rawValue = new Big(props.max - props.min).times(percent).plus(props.min);
      return getClosestStep(Number(rawValue), props);
    };

    // 处理滑块拖动
    const handleThumbMove = (e: MouseEvent | TouchEvent) => {
      if (props.disabled || draggingIndex.value === -1) return;

      const newValue = getValueFromEvent(e);
      let nextInternal = null;

      if (props.range) {
        const oldValues = [...(internalValue.value as number[])];
        // 暂时更新当前拖动的那个值，不去排序
        oldValues[draggingIndex.value] = newValue;

        // 检查是否发生交错 (Crossover)
        // 如果拖动的是 index 0 (左滑块)，但它现在比 index 1 (右滑块) 大
        // 那么它们需要交换值，并且我也要交换 draggingIndex，这样鼠标就依然抓着那个数值
        if (oldValues[0] > oldValues[1]) {
          // 交换值
          nextInternal = [oldValues[1], oldValues[0]];
          // 交换控制权
          draggingIndex.value = draggingIndex.value === 0 ? 1 : 0;
        } else {
          nextInternal = oldValues;
        }
      } else {
        nextInternal = newValue;
      }

      if (JSON.stringify(nextInternal) !== JSON.stringify(internalValue.value)) {
        internalValue.value = nextInternal;
        emit("update:modelValue", nextInternal);
        emit("change", nextInternal);
      }
    };

    // 处理轨道点击
    const handleRailClick = (e: MouseEvent) => {
      if (props.disabled) return;
      const newValue = getValueFromEvent(e);

      if (props.range) {
        const [v1, v2] = internalValue.value as number[];
        // 移动离点击点最近的那个滑块
        const dist1 = Math.abs(newValue - v1);
        const dist2 = Math.abs(newValue - v2);
        const targetIndex = dist1 <= dist2 ? 0 : 1;

        const nextValues = [...(internalValue.value as number[])];
        nextValues[targetIndex] = newValue;

        // 点击导致跳变时，也要保证顺序
        internalValue.value = sortValue(nextValues);
      } else {
        internalValue.value = newValue;
      }
      emit("update:modelValue", internalValue.value);
      emit("change", internalValue.value);
    };

    const handleThumbDown = (index: number) => {
      if (props.disabled) return;
      draggingIndex.value = index;

      const onMove = (e: MouseEvent | TouchEvent) => handleThumbMove(e);
      const onUp = () => {
        draggingIndex.value = -1;
        document.removeEventListener("mousemove", onMove);
        document.removeEventListener("mouseup", onUp);
        document.removeEventListener("touchmove", onMove);
        document.removeEventListener("touchend", onUp);
      };

      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      document.addEventListener("touchmove", onMove, { passive: false });
      document.addEventListener("touchend", onUp);
    };

    const handleKeydown = (e: KeyboardEvent, index: number) => {
      if (props.disabled) return;
      const isPlus = ["ArrowRight", "ArrowUp"].includes(e.key);
      const isMinus = ["ArrowLeft", "ArrowDown"].includes(e.key);
      if (!isPlus && !isMinus) return;
      e.preventDefault();

      let nextValue = 0;
      const currentValues = props.range
        ? [...(internalValue.value as number[])]
        : [internalValue.value];
      const targetValue = currentValues[index] as number;

      if (typeof props.step !== "number") {
        if (props.marks) {
          const mKeys = Object.keys(props.marks)
            .map(Number)
            .sort((a, b) => a - b);
          const currIdx = mKeys.indexOf(getClosestStep(targetValue, props));
          let nextIdx = isPlus ? currIdx + 1 : currIdx - 1;
          nextIdx = Math.max(0, Math.min(mKeys.length - 1, nextIdx));
          nextValue = mKeys[nextIdx];
        }
      } else {
        nextValue = Number(new Big(targetValue).plus(isPlus ? props.step : -props.step));
      }

      // 理键盘交错逻辑 ---
      if (props.range) {
        const otherIndex = index === 0 ? 1 : 0;
        const otherValue = currentValues[otherIndex] as number;

        // 检查是否发生越界交换
        const isCrossForward = index === 0 && nextValue > otherValue;
        const isCrossBackward = index === 1 && nextValue < otherValue;

        if (isCrossForward || isCrossBackward) {
          //  交换数据
          const nextInternal = [];
          nextInternal[index] = otherValue;
          nextInternal[otherIndex] = getClosestStep(nextValue, props);
          internalValue.value = nextInternal.sort((a, b) => a - b);

          // 转移焦点
          nextTick(() => {
            // 找到另一个 Thumb 的原生 DOM 并聚焦
            const targetThumb = thumbRefs.value[otherIndex];
            if (targetThumb) {
              targetThumb.focus();
            }
          });
        } else {
          // 正常非交错移动
          currentValues[index] = nextValue;
          internalValue.value = formatValue(currentValues as number[]);
        }
      } else {
        internalValue.value = formatValue(nextValue);
      }

      emit("update:modelValue", internalValue.value);
      emit("change", internalValue.value);
    };

    const getCoord = (val: number) => {
      const p = getPercent(val) / 100; // 0 - 1
      const size = props.size === "small" ? 18 : 24;
      const R = size / 2;

      const W = railWidth.value;
      if (W === 0) return 0;

      // 临界点控制
      const D = 18;

      // 计算 Thumb 中心位置
      const thumbPos = p * (W - size) + R;

      if (thumbPos < D) {
        // [左端追赶区] 从 0 到 D
        return ((thumbPos - R) / (D - R)) * D;
      } else if (thumbPos > W - D) {
        // [右端追赶区] 从 W-D 到 W
        return W - D + ((thumbPos - (W - D)) / (D - R)) * D;
      } else {
        // [中间对齐区]
        return thumbPos;
      }
    };

    return () => {
      const { vertical, reverse, min, max, disabled, marks, included } = props;

      const renderTrack = () => {
        if (!included && marks) return null;

        const [v1, v2] = props.range
          ? (internalValue.value as number[])
          : [props.min, internalValue.value as number];

        // 获取两个端点的计算位置
        const pos1 = getCoord(Math.min(v1, v2));
        const pos2 = getCoord(Math.max(v1, v2));

        // 如果不是 range 模式，起始点强制为 0
        const start = props.range ? `${pos1}px` : "0px";
        const length = props.range ? `${pos2 - pos1}px` : `${pos2}px`;

        let style = {};
        if (props.vertical) {
          style = props.reverse
            ? { top: start, height: length }
            : { bottom: start, height: length };
        } else {
          style = props.reverse ? { right: start, width: length } : { left: start, width: length };
        }
        const trackProps = {
          class: "k-slider-track",
          style,
        };
        return <div {...trackProps}></div>;
      };

      const renderMarks = () => {
        if (!marks) return null;
        const mKeys = Object.keys(marks).map(Number);

        return (
          <div class="k-slider-marks">
            {mKeys.map((val) => {
              const coord = getCoord(val);
              // 判断激活状态：值是否在当前选中范围内
              let isActive = false;
              if (props.range && Array.isArray(internalValue.value)) {
                isActive = val >= internalValue.value[0] && val <= internalValue.value[1];
              } else {
                isActive = val <= (internalValue.value as number);
              }

              let style: CSSProperties = {};
              if (vertical) {
                // 垂直模式：根据方向使用 bottom 或 top
                style = reverse
                  ? { top: `${coord}px`, transform: "translateY(-50%)" }
                  : { bottom: `${coord}px`, transform: "translateY(50%)" };

                if (val == props.max) {
                  style.marginTop = "-4px";
                }
                if (val == props.min) {
                  style.marginTop = "4px";
                }
              } else {
                // 水平模式：根据方向使用 left 或 right
                style = reverse
                  ? { right: `${coord}px`, transform: "translateX(50%)" }
                  : { left: `${coord}px`, transform: "translateX(-50%)" };

                if (val == props.max) {
                  style.marginLeft = "-4px";
                }
                if (val == props.min) {
                  style.marginLeft = "4px";
                }
              }
              const markProps = {
                class: "k-slider-mark-item",
                style,
              };
              return (
                <div key={val} {...markProps}>
                  <span class={["k-slider-mark-dot", { "is-active": isActive }]}></span>
                  <div class={["k-slider-mark-text", { "is-active": isActive }]}>{marks[val]}</div>
                </div>
              );
            })}
          </div>
        );
      };

      const thumbs = (props.range ? [0, 1] : [0]).map((idx) => {
        // 单滑块模式下，index 为 0，值取 internalValue
        const val = props.range ? (internalValue.value as number[])[idx] : internalValue.value;
        return (
          <Thumb
            key={idx}
            ref={(el) => setThumbRef(el, idx)}
            value={val as number}
            min={min}
            max={max}
            size={props.size || size}
            vertical={vertical}
            reverse={reverse}
            disabled={disabled}
            tooltipVisible={props.tooltipVisible}
            tipFormatter={props.tipFormatter}
            dragging={draggingIndex.value === idx} // 告诉子组件是否被激活
            onDragStart={() => handleThumbDown(idx)}
            onKeydownUpdate={(e) => handleKeydown(e, idx)}
          />
        );
      });
      const sliderProps = {
        type: vertical ? "vertical" : "horizontal",
        class: [
          "k-slider",
          {
            "k-slider-disabled": disabled,
            "k-slider-vertical": vertical,
            "k-slider-reverse": reverse,
          },
        ],
      };
      return (
        <div {...sliderProps}>
          <div class="k-slider-bar">
            <div class="k-slider-rail" ref={railRef} onClick={handleRailClick}></div>
            {renderTrack()}
            {renderMarks()}
            {thumbs}
          </div>
        </div>
      );
    };
  },
});

export default Slider;
