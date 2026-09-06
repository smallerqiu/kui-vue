import { Loading } from "kui-icons";
import type { CSSProperties, ExtractPropTypes, PropType } from "vue";
import { defineComponent, ref, watch } from "vue";
import type { BooleanType, ShapeType, SizeType, ValueType } from "../const/types";
import Icon from "../icon";
import { getValueWithType } from "../utils/checked";

const switchProps = {
  checked: {
    type: Boolean as BooleanType,
    default: false,
  },
  valueType: { type: String as PropType<ValueType>, default: "boolean" },
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined,
  },
  type: String,
  color: String,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  loading: Boolean as BooleanType,
  size: {
    type: String as PropType<SizeType>,
  },
  shape: { type: String as PropType<ShapeType>, default: "round" },
  trueText: String,
  falseText: String,
  onChange: Function as PropType<(value: string | number | boolean) => void>,
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;

const Switch = defineComponent({
  name: "Switch",
  props: switchProps,
  setup(props, { slots, emit }) {
    const resolveChecked = (value: string | number | boolean | undefined, fallback = false) =>
      value === undefined ? fallback : value === true || value === 1 || value === "1";
    const isChecked = ref(resolveChecked(props.modelValue, props.checked));
    watch(
      () => props.modelValue,
      (nv) => {
        isChecked.value = resolveChecked(nv, props.checked);
      },
    );
    watch(
      () => props.checked,
      (nv) => {
        if (props.modelValue === undefined) isChecked.value = nv;
      },
    );
    const change = () => {
      if (props.disabled || props.readonly) {
        return false;
      }
      const checked = !isChecked.value;
      isChecked.value = checked;
      const value = getValueWithType(checked, props.valueType);

      emit("update:modelValue", value);
      emit("update:checked", checked);
      emit("change", value);
    };

    return () => {
      const { type, trueText, falseText, disabled, loading, size } = props;
      const classes = [
        "k-switch",
        {
          ["k-switch-checked"]: isChecked.value,
          ["k-switch-disabled"]: disabled || loading,
          ["k-switch-readonly"]: props.readonly,
          [`k-switch-${type}`]: !!type,
          ["k-switch-sm"]: props.size == "small",
          [`k-switch-${props.shape}`]: props.shape,
        },
      ];
      const children = slots.checked?.() || trueText || slots.unchecked?.() || falseText;
      const loadNode = loading ? <Icon spin type={Loading} class="k-switch-loading" /> : null;

      const textNode =
        size != "small" && children ? (
          <span class="k-switch-inner">
            {isChecked.value ? slots.checked?.() || trueText : slots.unchecked?.() || falseText}
          </span>
        ) : null;

      return (
        <button
          class={classes}
          style={props.color ? ({ "--kui-switch-color": props.color } as CSSProperties) : undefined}
          onClick={change}
          disabled={disabled || loading}
          role="switch"
          aria-checked={isChecked.value}
          aria-readonly={props.readonly || undefined}
          type="button"
        >
          {textNode}
          {loadNode}
        </button>
      );
    };
  },
});
export default Switch;
