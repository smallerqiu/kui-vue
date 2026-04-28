import { Loading } from "kui-icons";
import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent, ref, watch } from "vue";
import type { BooleanType, SizeType, ValueType } from "../const/types";
import Icon from "../icon";
import { getValueWithType } from "../utils/checked";

export const switchProps = {
  checked: {
    type: Boolean as BooleanType,
    default: false,
  },
  valueType: { type: String as PropType<ValueType>, default: "boolean" },
  modelValue: { type: [String, Number, Boolean] as PropType<string | number | boolean> },
  type: String,
  disabled: Boolean as BooleanType,
  loading: Boolean as BooleanType,
  size: {
    default: "default",
    type: String as PropType<SizeType>,
  },
  trueText: String,
  falseText: String,
  onChange: Function as PropType<(value: boolean) => void>,
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;

const Switch = defineComponent({
  name: "KSwitch",
  props: switchProps,
  setup(props, { slots, emit }) {
    const isChecked = ref(props.modelValue || props.checked);
    watch(
      () => props.modelValue,
      (nv) => {
        isChecked.value = nv == 1;
      }
    );
    watch(
      () => props.checked,
      (nv) => {
        isChecked.value = nv;
      }
    );
    const change = () => {
      if (props.disabled) {
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
          [`k-switch-${type}`]: !!type,
          ["k-switch-sm"]: props.size == "small",
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
        <button class={classes} onClick={change} disabled={disabled || loading} type="button">
          {textNode}
          {loadNode}
        </button>
      );
    };
  },
});
export default Switch;
