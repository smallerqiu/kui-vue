import { defineComponent, ref, watch, computed, provide } from "vue";
import Thumb from "./thumb";
import { withInstall } from "../utils/vue";
import Big from "big.js";
import { getClosestStep } from "../utils/number";

const Slider = defineComponent({
  name: "Slider",
  props: {
    modelValue: { type: [Array, Number], default: 0 },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    step: { type: Number, default: 1 },
    disabled: Boolean,
    vertical: Boolean,
    reverse: Boolean,
    range: Boolean,
    marks: Object,
    included: { type: Boolean, default: true },
    tipFormatter: Function,
    tooltipVisible: Boolean,
  },
  emits: ["update:modelValue", "change"],

  setup(props, { emit }) {
    const railRef = ref();
    const internalValue = ref(props.range ? [props.min, props.min] : props.min);

    // 格式化与校验
    const formatValue = (val) => {
      if (props.range) {
        const arr = Array.isArray(val) ? [...val] : [props.min, props.min];
        return arr.map(v => getClosestStep(v, props)).sort((a, b) => a - b);
      }
      return getClosestStep(val, props);
    };

    watch(() => props.modelValue, (nv) => {
      internalValue.value = formatValue(nv);
    }, { immediate: true });

    const getPercent = (val) => {
      const diff = props.max - props.min;
      return diff === 0 ? 0 : ((val - props.min) / diff) * 100;
    };

    /**
     * 关键逻辑：根据 vertical 和 reverse 计算点击位置的百分比
     */
    const getPercentFromEvent = (e) => {
      const { width, height, left, top, bottom, right } = railRef.value.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      let pct = 0;
      if (props.vertical) {
        // 垂直模式：标准逻辑是底部(bottom)为0
        pct = (bottom - clientY) / height;
        if (props.reverse) pct = 1 - pct; // 反转：顶部为0
      } else {
        // 水平模式：标准逻辑是左侧(left)为0
        pct = (clientX - left) / width;
        if (props.reverse) pct = 1 - pct; // 反转：右侧为0
      }
      return Math.max(0, Math.min(1, pct));
    };

    const handleInteraction = (e, type) => {
      if (props.disabled) return;
      const pct = getPercentFromEvent(e);
      const rawValue = new Big(props.max - props.min).times(pct).plus(props.min);
      const newValue = getClosestStep(Number(rawValue), props);

      let nextValue;
      if (props.range) {
        const [v1, v2] = internalValue.value;
        if (type === 'left') nextValue = [newValue, v2];
        else if (type === 'right') nextValue = [v1, newValue];
        else {
          // 点击轨道，移动最近的滑块
          nextValue = Math.abs(newValue - v1) < Math.abs(newValue - v2) ? [newValue, v2] : [v1, newValue];
        }
        nextValue.sort((a, b) => a - b);
      } else {
        nextValue = newValue;
      }

      internalValue.value = nextValue;
      emit("update:modelValue", nextValue);
      emit("change", nextValue);
    };

    const handleKeydown = (e, type) => {
      if (props.disabled) return;
      const isPlus = ["ArrowRight", "ArrowUp"].includes(e.key);
      const isMinus = ["ArrowLeft", "ArrowDown"].includes(e.key);
      if (!isPlus && !isMinus) return;

      const stepBase = isPlus ? props.step : -props.step;
      let nextValue;

      if (props.range) {
        let [v1, v2] = internalValue.value;
        if (type === 'left') v1 = Number(new Big(v1).plus(stepBase));
        else v2 = Number(new Big(v2).plus(stepBase));
        nextValue = formatValue([v1, v2]);
      } else {
        nextValue = formatValue(Number(new Big(internalValue.value).plus(stepBase)));
      }

      internalValue.value = nextValue;
      emit("update:modelValue", nextValue);
    };

    return () => {
      const { vertical, reverse, max, min, included, marks, disabled } = props;

      // 渲染激活轨道 (Track)
      const renderTrack = () => {
        if (!included && marks) return null;
        const [v1, v2] = props.range ? internalValue.value : [min, internalValue.value];
        const p1 = getPercent(v1);
        const p2 = getPercent(v2);

        let style = {};
        if (vertical) {
          style = reverse 
            ? { top: `${p1}%`, height: `${p2 - p1}%` } 
            : { bottom: `${p1}%`, height: `${p2 - p1}%` };
        } else {
          style = reverse 
            ? { right: `${p1}%`, width: `${p2 - p1}%` } 
            : { left: `${p1}%`, width: `${p2 - p1}%` };
        }
        return <div class="k-slider-track" style={style}></div>;
      };

      // 渲染刻度 (Marks)
      const renderMarks = () => {
        if (!marks) return null;
        const mKeys = Object.keys(marks).map(Number);
        
        return (
          <div class="k-slider-marks">
            {mKeys.map(val => {
              const p = getPercent(val);
              const isActive = props.range 
                ? (val >= internalValue.value[0] && val <= internalValue.value[1])
                : (val <= internalValue.value);

              let style = {};
              if (vertical) {
                style = reverse ? { top: `${p}%` } : { bottom: `${p}%` };
              } else {
                style = reverse ? { right: `${p}%` } : { left: `${p}%` };
              }

              return (
                <div key={val} class="k-slider-mark-item" style={style}>
                  <span class={["k-slider-mark-dot", { "is-active": isActive }]}></span>
                  <div class={["k-slider-mark-text", { "is-active": isActive }]}>
                    {marks[val]}
                  </div>
                </div>
              );
            })}
          </div>
        );
      };

      const thumbs = (props.range ? [0, 1] : [1]).map(idx => (
        <Thumb
          key={idx}
          value={props.range ? internalValue.value[idx] : internalValue.value}
          min={min}
          max={max}
          vertical={vertical}
          reverse={reverse}
          disabled={disabled}
          tooltipVisible={props.tooltipVisible}
          tipFormatter={props.tipFormatter}
          onThumbMove={(e) => handleInteraction(e, props.range && idx === 0 ? 'left' : 'right')}
          onKeydownUpdate={(e) => handleKeydown(e, props.range && idx === 0 ? 'left' : 'right')}
        />
      ));

      return (
        <div class={["k-slider", { "k-slider-disabled": disabled, "k-slider-vertical": vertical, "k-slider-reverse": reverse }]}>
          <div class="k-slider-bar">
            <div class="k-slider-rail" ref={railRef} onClick={handleInteraction}></div>
            {renderTrack()}
            {thumbs}
            {renderMarks()}
          </div>
        </div>
      );
    };
  },
});

export default withInstall(Slider);