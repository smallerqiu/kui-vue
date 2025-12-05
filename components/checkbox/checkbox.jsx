import Icon from "../icon";
import { Checkmark } from "kui-icons";
import { defineComponent, inject, computed } from "vue";
import { withInstall } from "../utils/vue";

const Checkbox = defineComponent({
  name: "Checkbox",
  
  // [Vue 3 Upgrade]: del model 
  model: {
    prop: "checked",
    event: "change",
  },
  
  props: {
    // [Vue 3 Upgrade]: 
    // modelValue: { type: [Boolean, String, Number], default: null },
    
    // [Vue 3 Upgrade]: Vue 2 use checked & model
    checked: {
      type: Boolean,
      default: false,
    },
    
    value: { type: [String, Number, Boolean] },
    label: { type: [String, Number] },
    disabled: Boolean,
    indeterminate: Boolean,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },
  
  setup(props, { slots, emit }) {
    const checkboxGroup = inject("KCheckboxGroup", null);

    const isChecked = computed(() => {
      if (checkboxGroup) {
        // [Vue 3 Upgrade]: checkboxGroup.modelValue.value
        return checkboxGroup.currentValue.value.indexOf(props.value) > -1;
      }
      
      // [Vue 3 Upgrade]: return props.modelValue;
      return props.checked;
    });

    const isDisabled = computed(() => {
      return (checkboxGroup && checkboxGroup.disabled.value) || props.disabled;
    });

    const checkboxSize = computed(() => {
      return (checkboxGroup && checkboxGroup.size.value) || props.size;
    });

    const handleChange = (e) => {
      if (isDisabled.value) return;
      
      const targetChecked = e.target.checked;
      
      if (checkboxGroup) {
        checkboxGroup.onGroupChange(props.value);
      } else {
        // [Vue 3 Upgrade]: emit("update:modelValue", targetChecked);
        emit("change", targetChecked); 
        emit("input", targetChecked); 
      }
    };

    return () => {
      const wpClasses = [
        "k-checkbox",
        {
          ["k-checkbox-disabled"]: isDisabled.value,
          ["k-checkbox-checked"]: isChecked.value && !props.indeterminate,
          ["k-checkbox-indeterminate"]: props.indeterminate && !isChecked.value,
          ["k-checkbox-sm"]: checkboxSize.value === "small",
          ["k-checkbox-lg"]: checkboxSize.value === "large",
        },
      ];

      let innerNode = isChecked.value ? (
        <Icon type={Checkmark} strokeWidth={60} />
      ) : null;
      
      const labelNode = props.label || slots.default?.();

      return (
        <label class={wpClasses} onClick={(e) => e.stopPropagation()}>
          <span class="k-checkbox-symbol">
            <input
              type="checkbox"
              class="k-checkbox-input"
              disabled={isDisabled.value}
              onChange={handleChange}
              
              // [Vue 3 Upgrade]: Vue 3 use checked={isChecked.value}
              // checked={isChecked.value}
              
              // [Vue 2 Only]: Vue 2 JSX need domPropsChecked to keep DOM status
              domPropsChecked={isChecked.value}
            />
            <span class="k-checkbox-inner">{innerNode}</span>
          </span>
          {labelNode ? <span class="k-checkbox-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
});
export default withInstall(Checkbox);