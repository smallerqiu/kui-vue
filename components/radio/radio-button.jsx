import { defineComponent, ref, watch } from "vue";
import { Button } from "../button";
import { withInstall } from "../utils/vue";
const RadioButton = defineComponent({
  name: "RadioButton",
  props: {
    // [Vue 3 Upgrade]
    modelValue: { type: [Boolean], default: false },
    label: { type: [String, Number] },
    value: { type: [String, Number] },
    theme: String,
    disabled: Boolean,
    checked: Boolean,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },

  setup(props, { slots, emit, attrs, listeners }) {
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
    const handleClick = (e) => {
      if (props.disabled || isChecked.value) return;

      const checked = !isChecked.value;

      isChecked.value = checked;
      emit("change", {
        checked: checked,
        value: props.value,
        label: labelText,
      });
      emit("update:modelValue", checked);
      e.preventDefault();
    };

    return () => {
      const buttonProps = {
        ...props,
        disabled: props.disabled,
        size: props.size,
        theme: props.theme,
        shape: props.shape,
        type: isChecked.value ? "primary" : "default",
        ...attrs,
        ...listeners,
        onClick: handleClick,
      };

      if (props.theme == "default") {
        delete buttonProps.theme;
      }

      return <Button {...buttonProps}>{labelText}</Button>;
    };
  },
});
export default withInstall(RadioButton);
