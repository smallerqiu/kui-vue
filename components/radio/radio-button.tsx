import { defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import { Button } from "../button";
import type { BooleanType, SizeType } from "../const/types";
import type { IconType } from "../icon";
import type { ChangeEvent } from "./types";

export const radioButtonProps = {
  modelValue: { type: [Boolean], default: false },
  label: { type: String },
  value: { type: [String, Number] },
  theme: String,
  disabled: Boolean as BooleanType,
  checked: Boolean as BooleanType,
  icon: Array as PropType<IconType[]>,
  size: {
    type: String as PropType<SizeType>,
    default: "default",
  },
  shape: {
    type: String as PropType<"circle" | "square">,
    default: "square",
  },
};

export type RadioButtonProps = ExtractPropTypes<typeof radioButtonProps>;

const RadioButton = defineComponent({
  name: "RadioButton",
  props: radioButtonProps,
  emits: ["change", "update:modelValue"],
  setup(props, { slots, emit, attrs }) {
    const isChecked = ref(props.modelValue || props.checked);
    watch(
      () => props.modelValue,
      (v) => {
        isChecked.value = v;
      }
    );
    watch(
      () => props.checked,
      (v) => {
        isChecked.value = v;
      }
    );

    const labelText = props.label || slots.default?.();
    const handleClick = (e: Event) => {
      if (props.disabled || isChecked.value) return;

      const checked = !isChecked.value;

      isChecked.value = checked;
      emit("change", {
        checked: checked,
        value: props.value,
        label: labelText,
      } as ChangeEvent);
      emit("update:modelValue", checked);
      e.preventDefault();
    };

    return () => {
      const buttonProps: Record<string, any> = {
        ...props,
        disabled: props.disabled,
        size: props.size,
        theme: props.theme,
        shape: props.shape,
        type: isChecked.value ? "primary" : "default",
        ...attrs,
        onClick: handleClick,
      };

      return <Button {...buttonProps}>{labelText}</Button>;
    };
  },
});
export default RadioButton;
