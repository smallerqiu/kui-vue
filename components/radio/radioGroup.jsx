import { defineComponent, ref, watch } from "vue";
import Radio from "./radio.jsx";
import RadioButton from "./radioButton.jsx";
import { withInstall } from "../utils/vue";
import { getChildren } from "../utils/element";

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
    // [Vue 3 Upgrade]: const { modelValue: currentValue } = toRefs(props);
    const currentValue = ref(props.value);
    const currentType = ref(props.type);
    const onChange = ({ value }) => {
      currentValue.value = value;
      // [Vue 3 Upgrade]: emit("update:modelValue", val);
      emit("input", value);
      emit("change", value);
    };
    watch(
      () => props.value,
      (val) => {
        currentValue.value = val;
      }
    );
    const optionsData = () => {
      let { options } = props;
      if (!options) {
        options = [];
        const children = getChildren(slots.default?.());
        children.forEach((child, index) => {
          // console.log(child);
          let { label, value, disabled, icon } =
            child?.componentOptions?.propsData || {};
          let { children = [], tag } = child?.componentOptions;
          if (tag == "RadioButton") {
            currentType.value = "button";
          }
          options.push({
            value,
            icon,
            disabled,
            label: label || children[0]?.text || value,
          });
        });
      }
      return options;
    };
    return () => {
      let options = optionsData();
      let nodes = [];

      const Component = currentType.value === "button" ? RadioButton : Radio;
      options.forEach((option) =>
        nodes.push(
          <Component
            key={option.value}
            label={option.label}
            value={option.value}
            onChange={onChange}
            checked={currentValue?.value === option.value}
            disabled={props.disabled || option.disabled}
            icon={option.icon}
            size={props.size}
          />
        )
      );
      const classes = [
        "k-radio-group",
        {
          "k-radio-circle": props.shape === "circle",
          "k-radio-group-light":
            props.theme === "light" && currentType.value === "button",
          "k-radio-group-card":
            props.theme === "card" && currentType.value === "button",
          "k-radio-group-vertical": props.direction === "vertical",
        },
      ];

      return <div class={classes}>{nodes}</div>;
    };
  },
});
export default withInstall(RadioGroup);
