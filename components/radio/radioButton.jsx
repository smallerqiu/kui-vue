import { Button } from "../button";
import { defineComponent, inject, computed } from "vue";
import { withInstall } from "../utils/vue";

const RadioButton = defineComponent({
  name: "RadioButton",
  props: {
    value: { type: [String, Number, Boolean] },
    disabled: Boolean,
    label: [String, Number],
    size: String,
    theme: String,
    shape: String,
  },
  setup(props, { slots, emit, attrs, listeners }) {
    const radioGroup = inject("KRadioGroup", null);

    const isChecked = computed(() => {
      if (radioGroup) {
        // [Vue 3 Upgrade]: radioGroup.currentValue.value
        return radioGroup.currentValue.value === props.value;
      }
      return false;
    });

    const isDisabled = computed(() => {
      return (radioGroup && radioGroup.disabled.value) || props.disabled;
    });

    const mergedSize = computed(
      () => (radioGroup && radioGroup.size.value) || props.size
    );
    const mergedTheme = computed(
      () => (radioGroup && radioGroup.theme.value) || props.theme || "default"
    );
    const mergedShape = computed(
      () => (radioGroup && radioGroup.shape.value) || props.shape
    );

    const handleClick = (e) => {
      if (isDisabled.value) return;

      if (radioGroup) {
        radioGroup.onGroupChange(props.value);
      }
      emit("click", e);
    };

    return () => {
      const labelText = props.label || slots.default?.();

      const buttonProps = {
        props: {
          ...props,
          disabled: isDisabled.value,
          size: mergedSize.value,
          theme: mergedTheme.value,
          shape: mergedShape.value,
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
