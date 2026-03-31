import { computed, defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import { getChildren } from "../utils/vnode";
import Radio, { type RadioProps } from "./radio";
import RadioButton from "./radio-button";

export const radioGroupProps = {
  modelValue: { type: [String, Number], default: "" },
  disabled: Boolean,
  direction: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal",
  },
  size: {
    type: String as PropType<"small" | "large" | "default">,
  },
  theme: String,
  shape: String as PropType<"circle" | "square">,
  options: Array as PropType<RadioProps[]>,
  type: String,
};

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: radioGroupProps,
  emits: ["update:modelValue", "change"],
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
        children.forEach((child) => {
          let { label, value, disabled, icon } = child.props;
          options?.push({
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
