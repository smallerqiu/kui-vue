import { computed, defineComponent, ref, watch } from "vue";
import { getChildren } from "../utils/vnode.jsx";
import RadioButton from "./radio-button.jsx";
import Radio from "./radio.jsx";

const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: {
    modelValue: { type: [String, Number, Boolean], default: "" },
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
    const currentValue = ref(props.modelValue);
    const onChange = ({ value }) => {
      currentValue.value = value;
      emit("update:modelValue", value);
      emit("change", value);
    };
    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
      }
    );
    const optionsData = computed(() => {
      let { options } = props;
      if (!options) {
        options = [];
        const children = getChildren(slots.default?.());
        children.forEach((child, index) => {
          let { label, value, disabled, icon } = child.props;
          options.push({
            value,
            icon,
            disabled,
            label: label || child.children?.default()[0].children || value,
          });
        });
      }
      return options;
    });
    return () => {
      let options = optionsData.value;
      let nodes = [];
      const Component = props.type === "button" ? RadioButton : Radio;
      options.forEach((option) =>
        nodes.push(
          <Component
            key={option.value}
            label={option.label}
            value={option.value}
            onChange={onChange}
            checked={currentValue.value === option.value}
            disabled={props.disabled || option.disabled}
            icon={option.icon}
            size={props.size}
            theme={props.theme}
          />
        )
      );
      const classes = [
        "k-radio-group",
        {
          "k-radio-button-group": props.type === "button",
          "k-radio-circle": props.shape === "circle",
          "k-radio-group-light": props.theme === "light" && props.type === "button",
          "k-radio-group-card": props.theme === "card" && props.type === "button",
          "k-radio-group-vertical": props.direction === "vertical",
        },
      ];

      return <div class={classes}>{nodes}</div>;
    };
  },
});
export default RadioGroup;
