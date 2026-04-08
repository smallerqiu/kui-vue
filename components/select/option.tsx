import { Checkmark } from "kui-icons";
import { computed, defineComponent, type ExtractPropTypes, type PropType } from "vue";
import { type TypeBoolean } from "../const/var";
import Icon from "../icon";

export const optionProps = {
  value: { type: [String, Number] as PropType<string | number>, required: true },
  label: { type: [String, Number] as PropType<string | number> },
  disabled: Boolean as TypeBoolean,
  checked: Boolean as TypeBoolean,
  active: Boolean as TypeBoolean,
  multiple: Boolean as TypeBoolean,
};

export type OptionProps = ExtractPropTypes<typeof optionProps>;

export default defineComponent({
  name: "Option",
  props: optionProps,
  emits: ["select", "mouseenter"],
  setup(props, { slots, emit }) {
    const labelText = computed(() => props.label || slots.default?.() || props.value);

    const checked = computed(() => props.checked);
    const onSelect = () => {
      if (props.disabled) return;
      emit("select", { value: props.value, label: labelText.value });
    };

    return () => {
      const { multiple, disabled, active } = props;
      const liProps = {
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
            {multiple ? <Icon type={Checkmark} /> : null}
          </span>
        </li>
      );
    };
  },
});
