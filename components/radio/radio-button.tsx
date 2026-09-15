import { defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import { Button } from "../button";
import type { BooleanType, ButtonType, ShapeType, SizeType, ThemeType } from "../const/types";
import { markFormFieldComponent, resolveFormControlAttrs, useFormField } from "../form/context";
import type { IconType } from "../icon";
import type { ChangeEvent } from "./types";

const radioButtonProps = {
  modelValue: { type: Boolean, default: undefined },
  label: { type: String },
  value: { type: [String, Number] },
  theme: String as PropType<ThemeType>,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  checked: Boolean as BooleanType,
  icon: Array as PropType<IconType[]>,
  size: {
    type: String as PropType<SizeType>,
  },
  shape: {
    type: String as PropType<ShapeType>,
  },
};

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>;

const RadioButton = defineComponent({
  name: "RadioButton",
  props: radioButtonProps,
  emits: {
    change: (event: ChangeEvent) => typeof event.checked === "boolean",
    "update:modelValue": (value: boolean) => typeof value === "boolean",
    "update:checked": (value: boolean) => typeof value === "boolean",
  },
  setup(props, { slots, emit, attrs }) {
    const field = useFormField(true);
    const isChecked = ref(
      field?.prop ? Boolean(field.value.value) : (props.modelValue ?? props.checked ?? false),
    );
    watch(
      () => (field?.prop ? field.value.value : props.modelValue),
      (v) => {
        if (field?.prop || v !== undefined) isChecked.value = Boolean(v);
      },
    );
    watch(
      () => props.checked,
      (v) => {
        if (props.modelValue === undefined) isChecked.value = Boolean(v);
      },
    );

    const handleClick = (e: Event) => {
      if (e.defaultPrevented) return;
      if (
        props.disabled ||
        field?.disabled.value ||
        props.readonly ||
        field?.readonly.value ||
        isChecked.value
      )
        return;

      const checked = !isChecked.value;

      isChecked.value = checked;
      emit("change", {
        checked: checked,
        value: props.value,
        label: props.label ?? String(props.value ?? ""),
      } as ChangeEvent);
      emit("update:modelValue", checked);
      if (field?.prop) field.update(checked);
      emit("update:checked", checked);
      e.preventDefault();
    };

    return () => {
      const labelText = props.label ?? slots.default?.();
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const buttonProps = {
        ...attrs,
        disabled,
        size: props.size || field?.size.value,
        icon: props.icon,
        theme: props.theme || field?.theme.value,
        shape: props.shape || field?.shape.value,
        ...resolveFormControlAttrs(attrs, field),
        "aria-readonly": readonly || undefined,
        "aria-checked": Boolean(isChecked.value),
        role: "radio",
        tabindex: isChecked.value ? 0 : -1,
        type: (isChecked.value ? "primary" : "default") as ButtonType,
        onClick: (event: PointerEvent) => {
          if (typeof attrs.onClick === "function") attrs.onClick(event);
          handleClick(event);
        },
        onBlur: () => field?.blur(),
      };

      return <Button {...buttonProps}>{labelText}</Button>;
    };
  },
});
export default markFormFieldComponent(RadioButton);
