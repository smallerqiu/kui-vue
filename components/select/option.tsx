import { Check } from "kui-icons";
import {
  computed,
  defineComponent,
  type DefineComponent,
  type ExtractPropTypes,
  type HTMLAttributes,
  type PropType,
  type VNodeChild,
} from "vue";
import { type BooleanType } from "../const/types";
import Icon from "../icon";
export type OptionSelectEvent = {
  value: string | number;
  label: string | number;
};
export const optionProps = {
  value: { type: [String, Number] as PropType<string | number>, required: true },
  label: { type: [String, Number, Object] as PropType<string | number | VNodeChild> },
  disabled: Boolean as BooleanType,
  checked: Boolean as BooleanType,
  active: Boolean as BooleanType,
  multiple: Boolean as BooleanType,
  onSelect: Function as PropType<(event: OptionSelectEvent) => void>,
};

export type OptionProps = Partial<ExtractPropTypes<typeof optionProps>> &
  Omit<HTMLAttributes, "onSelect">;
const Option = defineComponent({
  name: "Option",
  props: optionProps,
  setup(props, { slots, emit, attrs }) {
    const labelText = computed(() => props.label || slots.default?.() || props.value);

    const checked = computed(() => props.checked);
    const onSelect = () => {
      if (props.disabled) return;
      emit("select", { value: props.value, label: labelText.value });
    };

    return () => {
      const { multiple, disabled, active } = props;
      const liProps = {
        ...attrs,
        class: [
          "k-select-item",
          {
            "k-select-item-selected": checked.value,
            "k-select-item-active": active,
            "k-select-item-disabled": disabled,
          },
        ],
        onClick: onSelect,
      };
      return (
        <li {...liProps}>
          <span>
            {labelText.value}
            {multiple ? <Icon type={Check} /> : null}
          </span>
        </li>
      );
    };
  },
});
export default Option as DefineComponent<OptionProps>;
