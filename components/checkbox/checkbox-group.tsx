import { computed, defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { TypeSize } from "../const/var";
import { getChildren } from "../utils/vnode";
import Checkbox from "./checkbox";

export const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<any[]>,
    default: () => [],
  },
  theme: String,
  disabled: Boolean,
  options: Array as PropType<any[]>,
  direction: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal",
  },
  size: {
    type: String as PropType<TypeSize>,
    default: "default",
  },
};

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;

export default defineComponent({
  name: "CheckboxGroup",
  props: checkboxGroupProps,
  emits: ["update:modelValue", "change"],
  setup(props, { slots, emit }) {
    const currentValue = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
      }
    );

    const onChange = ({ value }: { value: any }) => {
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

      const data: any[] = [];
      const children = getChildren(slots.default?.());
      
      children.forEach((child: any) => {
        if (child?.props) {
          const { label, value, disabled } = child.props;
          // Try to resolve label from slots if not a prop
          const resolvedLabel = label || child.children?.default?.()?.[0]?.children || value;
          data.push({
            value,
            disabled,
            label: resolvedLabel,
          });
        }
      });
      return data;
    });

    return () => {
      const { direction, disabled, theme, size } = props;
      
      const rootProps = {
        class: [
          "k-checkbox-group",
          { "k-checkbox-group-vertical": direction === "vertical" },
        ],
      };

      const nodes = optionsData.value.map((option) => (
        <Checkbox
          key={option.value}
          label={option.label}
          value={option.value}
          checked={currentValue.value.indexOf(option.value) > -1}
          disabled={disabled || option.disabled}
          theme={theme}
          size={size}
          onChange={onChange}
        />
      ));

      return (
        <div {...rootProps}>
          {nodes}
        </div>
      );
    };
  },
});