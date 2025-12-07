import { defineComponent, watch, ref } from "vue";
import { withInstall } from "../utils/vue";
import { Button } from "../button/";
const RadioButton = defineComponent({
  name: "RadioButton",
  // [Vue 3 Upgrade]: del
  model: {
    prop: "checked",
    event: "input",
  },
  props: {
    // [Vue 3 Upgrade]
    // modelValue: { type: [Boolean, String, Number], default: null },

    // [Vue 3 Upgrade]: Vue 2 use checked & model
    checked: {
      type: Boolean,
      default: false,
    },
    value: { type: [String, Number, Boolean] },
    label: { type: [String, Number] },
    disabled: Boolean,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },

  setup(props, { slots, emit, attrs, listeners }) {
    const isChecked = ref(props.checked);
    watch(
      () => props.checked,
      (v) => {
        isChecked.value = v;
      }
    );

    const labelText = props.label || slots.default?.();
    const handleClick = (e) => {
      if (props.disabled) return;

      const checked = !isChecked.value;

      isChecked.value = checked;
      // [Vue 3 Upgrade]: emit("update:modelValue", targetChecked);
      emit("change", {
        checked: checked,
        value: props.value,
        label: labelText,
      });
      emit("input", checked);
      e.preventDefault();
    };

    return () => {
      const buttonProps = {
        props: {
          ...props,
          disabled: props.disabled,
          size: props.size,
          theme: props.theme,
          shape: props.shape,
          type: isChecked.value ? "primary" : "default",
        },
        attrs: attrs,
        on: {
          ...listeners,
          click: handleClick,
        },
      };

      return <Button {...buttonProps}>{labelText}</Button>;
    };
  },
});
export default withInstall(RadioButton);
