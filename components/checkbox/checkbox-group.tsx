import { cloneVNode, defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType, DirectionType, SizeType, ThemeType } from "../const/types";
import { getChildren } from "../utils/vnode";
import Checkbox from "./checkbox";
import type { CheckboxChangeEvent, CheckboxOption, CheckboxValue } from "./types";

const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<CheckboxValue[]>,
    default: () => [],
  },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  options: Array as PropType<CheckboxOption[]>,
  direction: {
    type: String as PropType<DirectionType>,
    default: "horizontal",
  },
  size: {
    type: String as PropType<SizeType>,
  },
  onChange: {
    type: Function as PropType<(value: CheckboxValue[]) => void>,
  },
};

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;

const CheckboxGroup = defineComponent({
  name: "CheckboxGroup",
  props: checkboxGroupProps,
  setup(props, { slots, emit }) {
    const currentValue = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
      },
    );

    const onChange = ({ checked, value }: CheckboxChangeEvent) => {
      if (props.readonly) return;
      if (value === undefined) return;
      const val = [...currentValue.value];
      const index = val.indexOf(value);

      if (checked && index === -1) {
        val.push(value);
      } else if (!checked && index > -1) {
        val.splice(index, 1);
      }
      currentValue.value = val;
      emit("update:modelValue", val);
      emit("change", val);
    };

    return () => {
      const { direction, disabled, theme, size } = props;

      const rootProps = {
        class: ["k-checkbox-group", { "k-checkbox-group-vertical": direction === "vertical" }],
      };

      const nodes = props.options
        ? props.options.map((option) => (
            <Checkbox
              key={option.value}
              label={option.label === undefined ? undefined : String(option.label)}
              value={option.value}
              checked={currentValue.value.indexOf(option.value) > -1}
              disabled={disabled || option.disabled}
              readonly={props.readonly || option.readonly}
              theme={theme}
              size={size}
              onChange={onChange}
            />
          ))
        : getChildren(slots.default?.()).map((child) => {
            const value = child.props?.value as string | number | boolean | undefined;
            return cloneVNode(
              child,
              {
                checked: value !== undefined && currentValue.value.includes(value),
                disabled: disabled || Boolean(child.props?.disabled),
                readonly: props.readonly || Boolean(child.props?.readonly),
                theme,
                size,
                onChange: [child.props?.onChange, onChange].filter(Boolean),
              },
              true,
            );
          });

      return (
        <div
          {...rootProps}
          role="group"
          aria-disabled={props.disabled || undefined}
          aria-readonly={props.readonly || undefined}
        >
          {nodes}
        </div>
      );
    };
  },
});
export default CheckboxGroup;
