import { Check } from "kui-icons";
import { defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType, SizeType, ThemeType, ValueType } from "../const/types";
import { markFormFieldComponent, useFormField } from "../form/context";
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
  inheritAttrs: false,
  props: checkboxProps,
  emits: {
    change: (event: CheckboxChangeEvent) => typeof event.checked === "boolean",
    "update:modelValue": (value: string | number | boolean) =>
      ["string", "number", "boolean"].includes(typeof value),
    "update:checked": (value: boolean) => typeof value === "boolean",
  },
  setup(props, { slots, emit, attrs }) {
    const field = useFormField(true);
    const resolveChecked = (value: string | number | boolean | undefined, fallback = false) =>
      value === undefined ? fallback : value === true || value === 1 || value === "1";
    const isChecked = ref(
      resolveChecked(
        field?.prop
          ? (field.value.value as string | number | boolean | undefined)
          : props.modelValue,
        props.checked,
      ),
    );

    watch(
      () => props.checked,
      (v) => {
        if (props.modelValue === undefined) isChecked.value = Boolean(v);
      },
    );

    watch(
      () => (field?.prop ? field.value.value : props.modelValue),
      (v) => {
        isChecked.value = resolveChecked(v as string | number | boolean | undefined, props.checked);
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
      if (field?.prop) field.update(value);
      emit("update:checked", checked);
    };

    const onChange = (e: Event) => {
      if (props.disabled || field?.disabled.value || props.readonly || field?.readonly.value)
        return;
      e.stopPropagation();
      const target = e.target as HTMLInputElement;
      emitValue(target.checked);
    };

    return () => {
      const { indeterminate, label } = props;
      const theme = field?.theme.value ?? props.theme;
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = props.size || field?.size.value;
      const { class: attrClass, style: attrStyle, ...inputAttrs } = attrs;

      const rootProps = {
        class: [
          "k-checkbox",
          {
            "k-checkbox-fill": theme === "fill",
            "k-checkbox-disabled": disabled,
            "k-checkbox-readonly": readonly,
            "k-checkbox-checked": isChecked.value && !indeterminate,
            "k-checkbox-indeterminate": indeterminate,
            "k-checkbox-sm": size === "small",
            "k-checkbox-lg": size === "large",
          },
          attrClass,
        ],
        style: attrStyle,
        "aria-readonly": readonly || undefined,
      };

      const inputProps = {
        ...inputAttrs,
        id: inputAttrs.id ?? (field?.prop ? field.id : undefined),
        type: "checkbox",
        class: "k-checkbox-input",
        disabled: disabled,
        indeterminate,
        "aria-checked": indeterminate ? "mixed" : isChecked.value,
        "aria-labelledby":
          inputAttrs["aria-labelledby"] ?? (field?.prop ? field.labelId : undefined),
        "aria-describedby": inputAttrs["aria-describedby"] ?? field?.describedBy.value,
        "aria-invalid": (inputAttrs["aria-invalid"] ?? field?.invalid.value) || undefined,
        "aria-required": (inputAttrs["aria-required"] ?? field?.required.value) || undefined,
        "aria-readonly": readonly || undefined,
        checked: !!isChecked.value,
        onClick: (event: MouseEvent) => {
          if (readonly) event.preventDefault();
        },
        onChange: onChange,
        onBlur: () => field?.blur(),
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

export default markFormFieldComponent(Checkbox);
