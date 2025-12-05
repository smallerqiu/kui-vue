import { defineComponent, provide, toRefs } from "vue";
import Radio from "./radio.jsx";
import RadioButton from "./radioButton.jsx";
import { withInstall } from "../utils/vue";

const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: {
    // [Vue 3 Upgrade]: del
    // modelValue: { type: [String, Number, Boolean], default: "" },

    // [Vue 3 Upgrade]: Vue 2 use v-model
    value: { type: [String, Number, Boolean], default: "" },
    
    disabled: Boolean,
    direction: {
      type: String,
      default: "horizontal",
      validator: (val) => ["horizontal", "vertical"].indexOf(val) >= 0,
    },
    size: {
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    theme: String,
    shape: String,
    options: Array,
    type: String, // 'button' or default
  },
  setup(props, { slots, emit }) {
    const { disabled, size, theme, shape } = toRefs(props);
    
    // [Vue 3 Upgrade]: const { modelValue: currentValue } = toRefs(props);
    const { value: currentValue } = toRefs(props);

    const onGroupChange = (val) => {
      // [Vue 3 Upgrade]: emit("update:modelValue", val);
      emit("input", val);
      emit("change", val);
    };

    provide("KRadioGroup", {
      currentValue,
      disabled,
      size,
      theme,
      shape,
      onGroupChange,
    });

    return () => {
      let children = null;

      if (props.options && props.options.length) {
        const Component = props.type === "button" ? RadioButton : Radio;
        children = props.options.map((option) => (
          <Component
            key={option.value}
            label={option.label}
            value={option.value}
            disabled={option.disabled}
            icon={option.icon}
          />
        ));
      } else {
        children = slots.default?.();
      }

      const classes = [
        "k-radio-group",
        { "k-radio-circle": props.shape === "circle" },
        { "k-radio-group-light": props.theme === "light" && props.type === "button" },
        { "k-radio-group-card": props.theme === "card" && props.type === "button" },
        { "k-radio-group-vertical": props.direction === "vertical" },
      ];

      return <div class={classes}>{children}</div>;
    };
  },
});
export default withInstall(RadioGroup);