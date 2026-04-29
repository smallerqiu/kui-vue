import { Check } from "kui-icons";
import { defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType, SizeType, ThemeType, ValueType } from "../const/types";
import Icon from "../icon";
import { getValueWithType } from "../utils/checked";

const checkboxProps = {
  checked: {
    type: Boolean as BooleanType,
    default: false,
  },
  valueType: { type: String as PropType<ValueType>, default: "boolean" },
  modelValue: { type: [String, Number, Boolean] as PropType<string | number | boolean> },
  value: { type: [String, Number, Boolean] as PropType<string | number | boolean> },
  label: { type: [String, Number] as PropType<string | number> },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  disabled: Boolean as BooleanType,
  indeterminate: Boolean as BooleanType,
  size: {
    type: String as PropType<SizeType>,
  },
  onChange: {
    type: Function as PropType<(e: ChangeEvent) => void>,
  },
};
export interface ChangeEvent {
  value?: string | number | boolean;
  label?: string | number;
  checked: boolean;
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

const Checkbox = defineComponent({
  name: "Checkbox",
  props: checkboxProps,
  setup(props, { slots, emit }) {
    const isChecked = ref(props.modelValue || props.checked);

    watch(
      () => props.checked,
      (v) => {
        isChecked.value = v;
      }
    );

    watch(
      () => props.modelValue,
      (v) => {
        isChecked.value = v == 1;
      }
    );

    const emitValue = (checked: boolean) => {
      isChecked.value = checked;
      emit("change", {
        checked: checked,
        value: props.value,
        label: props.label || slots.default?.(),
      } as ChangeEvent);
      const value = getValueWithType(checked, props.valueType);
      emit("update:modelValue", value);
      emit("update:checked", checked);
    };

    const onChange = (e: Event) => {
      if (props.disabled) return;
      e.stopPropagation();
      const target = e.target as HTMLInputElement;
      emitValue(target.checked);
    };

    const triggerCheck = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        e.stopPropagation();
        if (props.disabled) return;
        emitValue(!isChecked.value);
      }
    };

    return () => {
      const { theme, disabled, indeterminate, size, label } = props;

      const rootProps = {
        class: [
          "k-checkbox",
          {
            "k-checkbox-fill": theme === "fill",
            "k-checkbox-disabled": disabled,
            "k-checkbox-checked": isChecked.value && !indeterminate,
            "k-checkbox-indeterminate": indeterminate && !isChecked.value,
            "k-checkbox-sm": size === "small",
            "k-checkbox-lg": size === "large",
          },
        ],
        tabindex: disabled ? undefined : 0,
        onKeydown: triggerCheck,
      };

      const inputProps = {
        type: "checkbox",
        tabindex: -1,
        class: "k-checkbox-input",
        disabled: disabled,
        checked: !!isChecked.value,
        onChange: onChange,
      };

      const innerNode = isChecked.value ? <Icon type={Check} /> : null;
      const labelNode = label || slots.default?.();

      return (
        <label {...rootProps}>
          <span class="k-checkbox-symbol">
            <input {...inputProps} />
            {innerNode}
          </span>
          {labelNode ? <span class="k-checkbox-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
});

export default Checkbox;
