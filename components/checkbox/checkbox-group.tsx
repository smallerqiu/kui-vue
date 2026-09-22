import { useInitialValue } from "../utils/model-value";
import { cloneVNode, defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType, DirectionType, SizeType, ThemeType } from "../const/types";
import { markFormFieldComponent, useFormAppearance, useFormField } from "../form/context";
import { getChildren } from "../utils/vnode";
import Checkbox from "./checkbox";
import type { CheckboxChangeEvent, CheckboxOption, CheckboxValue } from "./types";

const checkboxGroupProps = {
  modelValue: {
    type: Array as PropType<CheckboxValue[]>,
    default: undefined,
  },
  value: {
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
};

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>;

const CheckboxGroup = defineComponent({
  name: "CheckboxGroup",
  props: checkboxGroupProps,
  emits: {
    "update:modelValue": (value: CheckboxValue[]) => Array.isArray(value),
    change: (value: CheckboxValue[]) => Array.isArray(value),
  },
  setup(props, { slots, emit }) {
    const initialModel = useInitialValue(props);
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const currentValue = ref(
      field?.prop ? (field.value.value as CheckboxValue[]) : initialModel.value,
    );

    watch(
      () => (field?.prop ? field.value.value : initialModel.value),
      (val) => {
        currentValue.value = Array.isArray(val) ? (val as CheckboxValue[]) : [];
      },
    );

    const onChange = ({ checked, value }: CheckboxChangeEvent) => {
      if (props.readonly || field?.readonly.value) return;
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
      if (field?.prop) field.update(val);
      emit("change", val);
    };

    return () => {
      const { direction } = props;
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const theme = appearance.theme.value;
      const size = appearance.size.value;

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
              readonly={readonly || option.readonly}
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
                readonly: readonly || Boolean(child.props?.readonly),
                theme,
                size,
                onChange,
              },
              true,
            );
          });

      return (
        <div
          {...rootProps}
          id={field?.prop ? field.id : undefined}
          role="group"
          aria-labelledby={field?.prop ? field.labelId : undefined}
          aria-describedby={field?.describedBy.value}
          aria-invalid={field?.invalid.value || undefined}
          aria-required={field?.required.value || undefined}
          aria-disabled={disabled || undefined}
          aria-readonly={readonly || undefined}
          onFocusout={() => field?.blur()}
        >
          {nodes}
        </div>
      );
    };
  },
});
const FormCheckboxGroup = markFormFieldComponent(CheckboxGroup);
export default FormCheckboxGroup;
