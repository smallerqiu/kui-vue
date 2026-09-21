import {
  defineComponent,
  inject,
  ref,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import { type BooleanType, type SizeType } from "../const/types";
import { FORM_INJECTION_KEY, markFormFieldComponent, useFormField } from "../form/context";
import type { IconType } from "../icon";
import Star from "./star";
const rateProps = {
  modelValue: Number,
  value: { type: Number, default: 0 },
  allowClear: { type: Boolean as BooleanType, default: true },
  allowHalf: Boolean as BooleanType,
  color: String,
  size: [Number, String] as PropType<number | SizeType>,
  showScore: Boolean as BooleanType,
  tooltips: Array as PropType<string[]>,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  count: { type: Number, default: 5 },
  character: [String, Function] as PropType<string | ((index: number) => VNodeChild)>,
  icon: [Array, Function] as PropType<IconType[] | ((index: number) => IconType[])>,
  symbolReverseFill: Boolean as BooleanType,
  strokeWidth: { type: Number, default: 1 },
};

export type RateProps = ExtractPropTypes<typeof rateProps>;

const Rate = defineComponent({
  name: "Rate",
  props: rateProps,
  emits: {
    "update:modelValue": (value: number) => typeof value === "number",
    change: (value: number) => typeof value === "number",
  },
  setup(props, { emit }) {
    const form = inject(FORM_INJECTION_KEY, {});
    const field = useFormField(true);
    const innerValue = ref(props.value);
    const tempValue = ref<number | null>(null);
    const cleared = ref(false);

    const update = (t: "C" | "M", index: number, percent: number) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
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

        const currentValue = field?.prop
          ? Number(field.value.value ?? 0)
          : (props.modelValue ?? innerValue.value);
        const nextValue = value === currentValue && props.allowClear ? 0 : value;
        if (props.modelValue === undefined) {
          innerValue.value = nextValue;
        }

        if (nextValue === 0) {
          cleared.value = true;
          tempValue.value = null;
        }
        emit("update:modelValue", nextValue);
        if (field?.prop) field.update(nextValue);
        emit("change", nextValue);
      }
    };

    const mouseLeave = () => {
      tempValue.value = null;
      cleared.value = false;
    };

    return () => {
      const currentValue = field?.prop
        ? Number(field.value.value ?? 0)
        : (props.modelValue ?? innerValue.value);
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const tpValue =
        !disabled && !readonly && tempValue.value !== null ? tempValue.value : currentValue;
      const { count, allowHalf, character, tooltips = [], icon, showScore, color } = props;
      // FormItem normally forwards the inherited size through a cloned VNode.
      // Rate also reads the Form context because its value update may render
      // before that cloned VNode is refreshed.
      let size = props.size ?? form.size;

      if (typeof size === "string") {
        const sizeValue = { small: 20, medium: 24, large: 32, default: 24 };
        size = sizeValue[size];
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
          disabled: disabled || readonly,
          percent: percent < 100 ? percent : undefined,
          tooltips: tooltips[i - 1],
          index: i,
          symbolReverseFill: props.symbolReverseFill,
          strokeWidth: props.strokeWidth,
          onUpdate: update,
        };
        stars.push(<Star {...sp} />);
      }

      const containerStyle: CSSProperties = {
        fontSize: size + "px",
        color: color || undefined,
      };

      const containerProps = {
        class: ["k-rate", { "k-rate-disabled": disabled, "k-rate-readonly": readonly }],
        "aria-readonly": props.readonly || undefined,
        onMouseleave: mouseLeave,
        style: containerStyle,
      };

      return (
        <div {...containerProps}>
          {stars}
          {showScore ? <span class="k-rate-score">{currentValue}</span> : null}
        </div>
      );
    };
  },
});

export default markFormFieldComponent(Rate);
