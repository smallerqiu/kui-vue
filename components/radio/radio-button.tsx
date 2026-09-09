import { defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import { Button } from "../button";
import type { BooleanType, ButtonType, ShapeType, SizeType, ThemeType } from "../const/types";
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
    const isChecked = ref(props.modelValue ?? props.checked ?? false);
    watch(
      () => props.modelValue,
      (v) => {
        if (v !== undefined) isChecked.value = v;
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
      if (props.disabled || props.readonly || isChecked.value) return;

      const checked = !isChecked.value;

      isChecked.value = checked;
      emit("change", {
        checked: checked,
        value: props.value,
        label: props.label ?? String(props.value ?? ""),
      } as ChangeEvent);
      emit("update:modelValue", checked);
      emit("update:checked", checked);
      e.preventDefault();
    };

    return () => {
      const labelText = props.label ?? slots.default?.();
      const buttonProps = {
        ...attrs,
        disabled: props.disabled,
        size: props.size,
        icon: props.icon,
        theme: props.theme,
        shape: props.shape,
        "aria-readonly": props.readonly || undefined,
        "aria-checked": Boolean(isChecked.value),
        role: "radio",
        tabindex: isChecked.value ? 0 : -1,
        type: (isChecked.value ? "primary" : "default") as ButtonType,
        onClick: [attrs.onClick, handleClick].filter(Boolean) as EventListener[],
      };

      return <Button {...buttonProps}>{labelText}</Button>;
    };
  },
});
export default RadioButton;
