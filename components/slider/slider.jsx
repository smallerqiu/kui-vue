import { defineComponent, ref, watch, nextTick, inject } from "vue";
import Thumb from "./thumb";
import { withInstall } from "../utils/vue";
import Big from "big.js";
import { getClosestStep } from "../utils/number";

const Slider = defineComponent({
  name: "Slider",
  props: {
    value: { type: [Array, Number], default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: [Number, Object], default: 1 },
    disabled: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    range: Boolean,
    marks: Object,
    size: [String, Number],
    included: { type: Boolean, default: true },
    tipFormatter: Function,
    tooltipVisible: Boolean,
  },
  emits: ["input", "change"],

  setup(props, { emit }) {
    const size = inject("size", null);
    const thumbRefs = ref([]);
    const setThumbRef = (el, index) => {
      if (el) thumbRefs.value[index] = el;
    };

    const railRef = ref();
    // 记录当前正在拖拽的是哪一个滑块 (0 或 1，-1表示未拖拽)
    const draggingIndex = ref(-1);

    // 内部值始终保持排序状态
    const internalValue = ref(props.range ? [props.min, props.min] : props.min);

    const sortValue = (val) => {
      if (Array.isArray(val)) {
        return [...val].sort((a, b) => a - b);
      }
      return val;
    };

    const formatValue = (val) => {
      if (props.range) {
        const arr = Array.isArray(val) ? [...val] : [props.min, props.min];
        return sortValue(arr.map((v) => getClosestStep(v, props)));
      }
      return getClosestStep(val, props);
    };

    watch(
      () => props.value,
      (nv) => {
        // 只有当不在拖拽状态时，才响应外部变化，防止拖拽时的抖动
        if (draggingIndex.value === -1) {
          internalValue.value = formatValue(nv);
        }
      },
      { immediate: true }
    );

    const getPercent = (val) => {
      const diff = props.max - props.min;
      return diff === 0
        ? 0
        : Math.max(0, Math.min(100, ((val - props.min) / diff) * 100));
    };

    // 计算鼠标位置对应的数值
    const getValueFromEvent = (e) => {
      const rect = railRef.value.getBoundingClientRect();
      const touch = e.touches?.[0] || e.changedTouches?.[0];
      const clientX = touch ? touch.clientX : e.clientX;
      const clientY = touch ? touch.clientY : e.clientY;

      let percent;
      if (props.vertical) {
        // 垂直模式：CSS bottom 是 0%，top 是 100%
        // clientY 越小（越靠上），percent 越大
        percent = (rect.bottom - clientY) / rect.height;
        if (props.reverse) percent = 1 - percent;
      } else {
        // 水平模式：CSS left 是 0%，right 是 100%
        percent = (clientX - rect.left) / rect.width;
        if (props.reverse) percent = 1 - percent;
      }

      const rawValue = new Big(props.max - props.min)
        .times(Math.max(0, Math.min(1, percent)))
        .plus(props.min);
      return getClosestStep(Number(rawValue), props);
    };

    // 处理滑块拖动
    const handleThumbMove = (e) => {
      if (e.cancelable) {
        e.preventDefault();
      }

      if (props.disabled || draggingIndex.value === -1) return;

      const newValue = getValueFromEvent(e);
      let nextInternal = null;

      if (props.range) {
        const oldValues = [...internalValue.value];
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

      if (
        JSON.stringify(nextInternal) !== JSON.stringify(internalValue.value)
      ) {
        internalValue.value = nextInternal;
        emit("input", nextInternal);
        emit("change", nextInternal);
      }
    };

    // 处理轨道点击
    const handleRailClick = (e) => {
      if (props.disabled) return;
      const newValue = getValueFromEvent(e);

      if (props.range) {
        const [v1, v2] = internalValue.value;
        // 移动离点击点最近的那个滑块
        const dist1 = Math.abs(newValue - v1);
        const dist2 = Math.abs(newValue - v2);
        const targetIndex = dist1 <= dist2 ? 0 : 1;

        const nextValues = [...internalValue.value];
        nextValues[targetIndex] = newValue;

        // 点击导致跳变时，也要保证顺序
        internalValue.value = sortValue(nextValues);
      } else {
        internalValue.value = newValue;
      }
      emit("input", internalValue.value);
      emit("change", internalValue.value);
    };
    const touch = !!(
      "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof window.DocumentTouch)
    );
    const handleThumbDown = (index) => {
      if (props.disabled) return;
      draggingIndex.value = index;

      let [e1, e2] = touch
        ? ["touchmove", "touchend"]
        : ["mousemove", "mouseup"];
      console.log(e1,e2,222);
      const onMove = (e) => handleThumbMove(e);
      const onUp = () => {
        draggingIndex.value = -1;
        document.removeEventListener(e1, onMove);
        document.removeEventListener(e2, onUp);
        // document.removeEventListener("touchmove", onMove);
        // document.removeEventListener("touchend", onUp);
      };

      document.addEventListener(e1, onMove);
      document.addEventListener(e2, onUp);
      // document.addEventListener("touchmove", onMove, { passive: false });
      // document.addEventListener("touchend", onUp);
    };

    const handleKeydown = (e, index) => {
      if (props.disabled) return;
      const isPlus = ["ArrowRight", "ArrowUp"].includes(e.key);
      const isMinus = ["ArrowLeft", "ArrowDown"].includes(e.key);
      if (!isPlus && !isMinus) return;
      e.preventDefault();

      let nextValue;
      const currentValues = props.range
        ? [...internalValue.value]
        : [internalValue.value];
      const targetValue = currentValues[index];

      if (props.step === null || props.step === undefined) {
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
        nextValue = Number(
          new Big(targetValue).plus(isPlus ? props.step : -props.step)
        );
      }

      if (props.range) {
        const otherIndex = index === 0 ? 1 : 0;
        const otherValue = currentValues[otherIndex];

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
          internalValue.value = formatValue(currentValues);
        }
      } else {
        internalValue.value = formatValue(nextValue);
      }

      emit("input", internalValue.value);
      emit("change", internalValue.value);
    };

    return () => {
      const { vertical, reverse, min, max, disabled, marks, included } = props;

      const renderTrack = () => {
        if (!included && marks) return null;

        // 确保 v1 是小的，v2 是大的
        const [rawV1, rawV2] = props.range
          ? internalValue.value
          : [min, internalValue.value];
        const v1 = Math.min(rawV1, rawV2);
        const v2 = Math.max(rawV1, rawV2);

        const p1 = getPercent(v1);
        const p2 = getPercent(v2);
        const length = p2 - p1;

        let style = {};
        if (vertical) {
          // 垂直模式
          // reverse=false: bottom=p1, height=len
          // reverse=true:  top=p1, height=len
          style = reverse
            ? { top: `${p1}%`, height: `${length}%` }
            : { bottom: `${p1}%`, height: `${length}%` };
        } else {
          // 水平模式
          // reverse=false: left=p1, width=len
          // reverse=true:  right=p1, width=len
          style = reverse
            ? { right: `${p1}%`, width: `${length}%` }
            : { left: `${p1}%`, width: `${length}%` };
        }
        return <div class="k-slider-track" style={style}></div>;
      };

      const renderMarks = () => {
        if (!marks) return null;
        const mKeys = Object.keys(marks).map(Number);

        return (
          <div class="k-slider-marks">
            {mKeys.map((val) => {
              const p = getPercent(val);
              // 判断激活状态：值是否在当前选中范围内
              let isActive = false;
              if (props.range) {
                isActive =
                  val >= internalValue.value[0] &&
                  val <= internalValue.value[1];
              } else {
                isActive = val <= internalValue.value;
              }

              let style = {};
              if (vertical) {
                style = reverse ? { top: `${p}%` } : { bottom: `${p}%` };
              } else {
                style = reverse ? { right: `${p}%` } : { left: `${p}%` };
              }

              return (
                <div key={val} class="k-slider-mark-item" style={style}>
                  <span
                    class={["k-slider-mark-dot", { "is-active": isActive }]}
                  ></span>
                  <div
                    class={["k-slider-mark-text", { "is-active": isActive }]}
                  >
                    {marks[val]}
                  </div>
                </div>
              );
            })}
          </div>
        );
      };

      const thumbs = (props.range ? [0, 1] : [0]).map((idx) => {
        // 单滑块模式下，index 为 0，值取 internalValue
        const val = props.range
          ? internalValue.value[idx]
          : internalValue.value;
        return (
          <Thumb
            key={idx}
            ref={(el) => setThumbRef(el, idx)}
            value={val}
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

      return (
        <div
          class={[
            "k-slider",
            {
              "k-slider-disabled": disabled,
              "k-slider-vertical": vertical,
              "k-slider-reverse": reverse,
            },
          ]}
        >
          <div class="k-slider-bar">
            <div
              class="k-slider-rail"
              ref={railRef}
              onTouchstart={handleRailClick}
              onClick={handleRailClick}
            ></div>
            {renderTrack()}
            {renderMarks()}
            {thumbs}
          </div>
        </div>
      );
    };
  },
});

export default withInstall(Slider);
