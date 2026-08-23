import {
  computed,
  defineComponent,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNode,
} from "vue";
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
      }
    );

    const onChange = ({ value }: CheckboxChangeEvent) => {
      if (value === undefined) return;
      const val = [...currentValue.value];
      const index = val.indexOf(value);

      if (index > -1) {
        val.splice(index, 1);
      } else {
        val.push(value);
      }
      emit("update:modelValue", val);
      emit("change", val);
    };

    const optionsData = computed(() => {
      const { options } = props;
      if (options && options.length > 0) {
        return options;
      }

      const data: CheckboxOption[] = [];
      const children = getChildren(slots.default?.());

      children.forEach((child: VNode) => {
        if (child?.props) {
          const { label, value, disabled } = child.props as CheckboxOption;
          if (value === undefined) return;
          // Try to resolve label from slots if not a prop
          const childSlots = child.children as { default?: () => VNode[] } | null;
          const resolvedLabel =
            label || childSlots?.default?.()?.[0]?.children?.toString() || value;
          data.push({
            value,
            disabled,
            label: String(resolvedLabel),
          });
        }
      });
      return data;
    });

    return () => {
      const { direction, disabled, theme, size } = props;

      const rootProps = {
        class: ["k-checkbox-group", { "k-checkbox-group-vertical": direction === "vertical" }],
      };

      const nodes = optionsData.value.map((option) => {
        if (option.value === undefined) return null;
        return (
          <Checkbox
            key={option.value}
            label={option.label === undefined ? undefined : String(option.label)}
            value={option.value}
            checked={currentValue.value.indexOf(option.value) > -1}
            disabled={disabled || option.disabled}
            theme={theme}
            size={size}
            onChange={onChange}
          />
        );
      });

      return <div {...rootProps}>{nodes}</div>;
    };
  },
});
export default CheckboxGroup;
