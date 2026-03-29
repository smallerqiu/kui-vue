import { defineComponent, ref, watch, type CSSProperties, type ExtractPropTypes, type PropType } from "vue";
import type { IconType } from "../icon";
import { filterSize, sizeMap } from "../utils/size";
import Star from "./star";
export const rateProps = {
  modelValue: { type: Number, default: 0 },
  allowClear: { type: Boolean, default: true },
  allowHalf: Boolean,
  color: String,
  size: [Number, String] as PropType<number | string>,
  showScore: Boolean,
  tooltips: Array as PropType<string[]>,
  disabled: Boolean,
  count: { type: Number, default: 5 },
  character: [String, Function] as PropType<string | ((index: number) => any)>,
  icon: [Array, Function] as PropType<IconType[] | ((index: number) => any)>,
};

export type RateProps = ExtractPropTypes<typeof rateProps>;

export default defineComponent({
  name: "Rate",
  props: rateProps,
  emits: ["update:modelValue", "change"],
  setup(props, { emit }) {
    const initValue = ref(props.modelValue);
    const tempValue = ref<number | null>(null);
    const cleared = ref(false);

    watch(
      () => props.modelValue,
      (v) => {
        initValue.value = v;
      }
    );

    const update = (t: "C" | "M", index: number, percent: number) => {
      if (t === "M") {
        if (cleared.value) return;
        // mouse move
        if (props.allowHalf) {
          const value = index - (percent < 0.5 ? 0.5 : 0);
          tempValue.value = value;
        } else {
          tempValue.value = index;
        }
      } else {
        // click
        let value = index - (props.allowHalf ? (percent < 0.5 ? 0.5 : 0) : 0);
        value = parseFloat(value.toFixed(2));
        
        const nextValue = value === initValue.value && props.allowClear ? 0 : value;
        initValue.value = nextValue;
        
        if (nextValue === 0) {
          cleared.value = true;
          tempValue.value = null;
        }
        emit("update:modelValue", initValue.value);
        emit("change", initValue.value);
      }
    };

    const mouseLeave = () => {
      tempValue.value = null;
      cleared.value = false;
    };

    return () => {
      const tpValue = tempValue.value !== null ? tempValue.value : initValue.value;
      let { count, allowHalf, character, disabled, tooltips = [], icon, showScore, color, size } = props;

      if (typeof size === "string" && filterSize(size)) {
        const sizeValue = [20, 24, 32];
        size = sizeValue[sizeMap.indexOf(size)];
      }

      const stars = [];
      let actualCount = count;
      if (isNaN(Number(count)) || count <= 0) {
        actualCount = 5;
      }
      if (actualCount > 15) actualCount = 15;

      for (let i = 1; i <= actualCount; i++) {
        const mod = i - tpValue;
        const percent = (1 - (i - tpValue)) * 100;
        const sp = {
          key: i,
          allowHalf,
          full: tpValue >= i,
          half: mod > 0 && mod < 1,
          icon,
          character,
          size: size as number | string,
          disabled,
          percent: percent < 100 ? percent : undefined,
          tooltips: tooltips[i - 1],
          index: i,
          onUpdate: update,
        };
        stars.push(<Star {...sp} />);
      }

      const containerStyle: CSSProperties = { 
        fontSize: size + "px",
        color: color || undefined
      };

      const containerProps = {
        class: ["k-rate", { "k-rate-disabled": disabled }],
        onMouseleave: mouseLeave,
        style: containerStyle,
      };

      return (
        <div {...containerProps}>
          {stars}
          {showScore ? <span class="k-rate-score">{initValue.value}</span> : null}
        </div>
      );
    };
  },
});
