import Checkbox from "./checkbox";
import { defineComponent, provide, toRefs } from "vue";
import { withInstall } from "../utils/vue";

const CheckboxGroup = defineComponent({
  name: "CheckboxGroup",
  props: {
    // [Vue 3 Upgrade]
    // modelValue: { type: Array, default: () => [] },

    // [Vue 3 Upgrade] :del
    value: {
      type: Array,
      default: () => [],
    },
    
    disabled: Boolean,
    options: Array, 
    direction: {
      type: String,
      default: "horizontal",
      validator: (val) => ["horizontal", "vertical"].indexOf(val) >= 0,
    },
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },

  setup(props, { slots, emit }) {
    const { disabled, size } = toRefs(props);
    
    // [Vue 3 Upgrade]: const { modelValue: currentValue } = toRefs(props);
    const { value: currentValue } = toRefs(props);

    const onGroupChange = (childValue) => {
      const val = [...currentValue.value];
      const index = val.indexOf(childValue);

      if (index > -1) {
        val.splice(index, 1);
      } else {
        val.push(childValue);
      }

      // [Vue 3 Upgrade]: emit("update:modelValue", val);
      emit("input", val); // Vue 2 v-model
      emit("change", val);
    };

    provide("KCheckboxGroup", {
      currentValue,
      disabled,
      size,
      onGroupChange,
    });

    return () => {
      let children = null;
      
      if (props.options && props.options.length) {
        children = props.options.map((option) => (
          <Checkbox
            key={option.value}
            label={option.label}
            value={option.value}
            disabled={option.disabled}
          />
        ));
      } else {
        children = slots.default?.();
      }

      return (
        <div
          class={[
            "k-checkbox-group",
            { "k-checkbox-group-vertical": props.direction == "vertical" },
          ]}
        >
          {children}
        </div>
      );
    };
  },
});
export default withInstall(CheckboxGroup);