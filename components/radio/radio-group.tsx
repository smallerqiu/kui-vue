import { computed, defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType, DirectionType, ShapeType, SizeType, ThemeType } from "../const/types";
import type { IconType } from "../icon";
import { getChildren } from "../utils/vnode";
import Radio from "./radio";
import RadioButton from "./radio-button";
import type { ChangeEvent } from "./types";

export interface RadioOption {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  icon?: IconType[];
}

export const radioGroupProps = {
  modelValue: { type: [String, Number], default: "" },
  disabled: Boolean as BooleanType,
  direction: {
    type: String as PropType<DirectionType>,
    default: "horizontal",
  },
  size: {
    type: String as PropType<SizeType>,
  },
  theme: { type: String as PropType<ThemeType> },
  shape: String as PropType<ShapeType>,
  options: Array as PropType<RadioOption[]>,
  type: String as PropType<"radio" | "button">,
  onChange: Function as PropType<(value: string | number) => void>,
};

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: radioGroupProps,
  setup(props, { slots, emit }) {
    const currentValue = ref(props.modelValue);
    const onChange = ({ value }: ChangeEvent) => {
      currentValue.value = value;
      emit("update:modelValue", value);
      emit("change", value);
    };
    const onClick = (e: MouseEvent) => {
      console.log(e);
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
      const isButton = props.type === "button";
      let options = optionsData.value;
      let nodes: any = [];
      const Component = isButton ? RadioButton : Radio;
      const isCard = props.theme == "card";
      const events = isCard ? { onClick } : {};
      options.forEach((option) =>
        nodes.push(
          <Component
            {...events}
            key={option.label}
            label={option.label}
            value={option.value}
            onChange={onChange}
            checked={currentValue.value === option.value}
            disabled={props.disabled || option.disabled}
            icon={option.icon}
            size={props.size}
            theme={props.theme}
            shape={props.shape}
          />
        )
      );
      const classes = [
        "k-radio-group",
        {
          "k-radio-button-group": isButton,
          "k-radio-circle": props.shape === "circle",
          "k-radio-group-fill": props.theme === "fill" && isButton,
          "k-radio-group-card": props.theme === "card" && isButton,
          "k-radio-group-vertical": props.direction === "vertical",
        },
      ];
      if (props.theme === "card") {
        nodes.push(<div class="k-radio-group-card-seg"></div>);
      }

      return <div class={classes}>{nodes}</div>;
    };
  },
});
export default RadioGroup;
