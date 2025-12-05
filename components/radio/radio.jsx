import { defineComponent, inject, ref, computed } from "vue";
import { withInstall } from "../utils/vue";

const Radio = defineComponent({
  name: "Radio",
  // [Vue 3 Upgrade]: del 
  model: {
    prop: "checked",
    event: "change",
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

  setup(props, { slots, emit }) {
    const radioGroup = inject("KRadioGroup", null);

    const isChecked = computed(() => {
      if (radioGroup) {
        // [Vue 3 Upgrade]: radioGroup.currentValue.value
        return radioGroup.currentValue.value === props.value;
      }
      // [Vue 3 Upgrade]: return props.modelValue === props.value; 
      return props.checked;
    });

    const isDisabled = computed(() => {
      return (radioGroup && radioGroup.disabled.value) || props.disabled;
    });

    const radioSize = computed(() => {
      return (radioGroup && radioGroup.size.value) || props.size;
    });

    const handleChange = (e) => {
      if (isDisabled.value) return;

      const checked = e.target.checked;
      
      if (radioGroup) {
        if (checked) {
          radioGroup.onGroupChange(props.value);
        }
      } else {
        // [Vue 3 Upgrade]: emit("update:modelValue", checked);
        emit("change", checked);
        emit("input", checked); // 兼容
      }
    };

    return () => {
      const classes = [
        "k-radio",
        {
          ["k-radio-disabled"]: isDisabled.value,
          ["k-radio-checked"]: isChecked.value,
          ["k-radio-lg"]: radioSize.value === "large",
          ["k-radio-sm"]: radioSize.value === "small",
        },
      ];

      const labelNode = props.label || slots.default?.();

      return (
        <label class={classes} onClick={(e) => e.stopPropagation()}>
          <span class="k-radio-symbol">
            <input
              type="radio"
              class="k-radio-input"
              disabled={isDisabled.value}
              onChange={handleChange}
              // [Vue 3 Upgrade]: checked={isChecked.value}
              // [Vue 2 Only]: Vue 2 JSX need domPropsChecked
              domPropsChecked={isChecked.value}
            />
            <span class="k-radio-inner"></span>
          </span>
          {labelNode ? <span class="k-radio-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
});
export default withInstall(Radio);