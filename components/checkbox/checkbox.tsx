import { Check } from "kui-icons";
import { defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType, SizeType, ThemeType, ValueType } from "../const/types";
import Icon from "../icon";
import { getValueWithType } from "../utils/checked";
import type { CheckboxChangeEvent } from "./types";

const checkboxProps = {
  checked: {
    type: Boolean as BooleanType,
    default: false,
  },
  valueType: { type: String as PropType<ValueType>, default: "boolean" },
  modelValue: {
    type: [String, Number, Boolean] as PropType<string | number | boolean>,
    default: undefined,
  },
  value: { type: [String, Number, Boolean] as PropType<string | number | boolean> },
  label: { type: [String, Number] as PropType<string | number> },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  indeterminate: Boolean as BooleanType,
  size: {
    type: String as PropType<SizeType>,
  },
};

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

const Checkbox = defineComponent({
  name: "Checkbox",
  props: checkboxProps,
  emits: {
    change: (event: CheckboxChangeEvent) => typeof event.checked === "boolean",
    "update:modelValue": (value: string | number | boolean) =>
      ["string", "number", "boolean"].includes(typeof value),
    "update:checked": (value: boolean) => typeof value === "boolean",
  },
  setup(props, { slots, emit }) {
    const resolveChecked = (value: string | number | boolean | undefined, fallback = false) =>
      value === undefined ? fallback : value === true || value === 1 || value === "1";
    const isChecked = ref(resolveChecked(props.modelValue, props.checked));

    watch(
      () => props.checked,
      (v) => {
        if (props.modelValue === undefined) isChecked.value = Boolean(v);
      },
    );

    watch(
      () => props.modelValue,
      (v) => {
        isChecked.value = resolveChecked(v, props.checked);
      },
    );

    const emitValue = (checked: boolean) => {
      isChecked.value = checked;
      const value = getValueWithType(checked, props.valueType);
      emit("change", {
        checked: checked,
        value: props.value,
        label: props.label ?? String(props.value ?? ""),
      } as CheckboxChangeEvent);
      emit("update:modelValue", value);
      emit("update:checked", checked);
    };

    const onChange = (e: Event) => {
      if (props.disabled || props.readonly) return;
      e.stopPropagation();
      const target = e.target as HTMLInputElement;
      emitValue(target.checked);
    };

    return () => {
      const { theme, disabled, indeterminate, size, label } = props;

      const rootProps = {
        class: [
          "k-checkbox",
          {
            "k-checkbox-fill": theme === "fill",
            "k-checkbox-disabled": disabled,
            "k-checkbox-readonly": props.readonly,
            "k-checkbox-checked": isChecked.value && !indeterminate,
            "k-checkbox-indeterminate": indeterminate,
            "k-checkbox-sm": size === "small",
            "k-checkbox-lg": size === "large",
          },
        ],
        "aria-readonly": props.readonly || undefined,
      };

      const inputProps = {
        type: "checkbox",
        class: "k-checkbox-input",
        disabled: disabled,
        indeterminate,
        "aria-checked": indeterminate ? "mixed" : isChecked.value,
        "aria-readonly": props.readonly || undefined,
        checked: !!isChecked.value,
        onClick: (event: MouseEvent) => {
          if (props.readonly) event.preventDefault();
        },
        onChange: onChange,
      };

      const innerNode = isChecked.value && !indeterminate ? <Icon type={Check} /> : null;
      const labelNode = label ?? slots.default?.();

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
