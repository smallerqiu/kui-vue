import { Checkmark } from "kui-icons";
import {
  defineComponent,
  ref,
  watch,
  type DefineComponent,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { TypeSize } from "../const/var";
import Icon from "../icon";

const checkboxProps = {
  checked: {
    type: Boolean,
    default: false,
  },
  modelValue: { type: [String, Number, Boolean] as PropType<string | number | boolean> },
  value: { type: [String, Number, Boolean] as PropType<string | number | boolean> },
  label: { type: [String, Number] as PropType<string | number> },
  theme: { type: String, default: "light" },
  disabled: Boolean,
  indeterminate: Boolean,
  size: {
    type: String as PropType<TypeSize>,
    default: "default",
  },
};
export interface ChangeEvent {
  value: string | number | boolean;
  label: string | number;
  checked: Boolean;
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>;

export default defineComponent({
  name: "Checkbox",
  props: checkboxProps,
  emits: ["change", "update:modelValue", "update:checked"],
  setup(props, { slots, emit }) {
    const isChecked = ref(props.modelValue || props.checked);

    watch(
      () => props.checked,
      (v) => {
        isChecked.value = v;
      }
    );

    watch(
      () => props.modelValue,
      (v) => {
        isChecked.value = v || false;
      }
    );

    const emitValue = (checked: boolean) => {
      isChecked.value = checked;
      emit("change", {
        checked: checked,
        value: props.value,
        label: props.label || slots.default?.(),
      } as ChangeEvent);
      emit("update:modelValue", checked);
      emit("update:checked", checked);
    };

    const onChange = (e: Event) => {
      if (props.disabled) return;
      e.stopPropagation();
      const target = e.target as HTMLInputElement;
      emitValue(target.checked);
    };

    const triggerCheck = (e: KeyboardEvent) => {
      if (e.code === "Space") {
        e.preventDefault();
        e.stopPropagation();
        if (props.disabled) return;
        emitValue(!isChecked.value);
      }
    };

    return () => {
      const { theme, disabled, indeterminate, size, label } = props;

      const rootProps = {
        class: [
          "k-checkbox",
          {
            "k-checkbox-light": theme === "light",
            "k-checkbox-disabled": disabled,
            "k-checkbox-checked": isChecked.value && !indeterminate,
            "k-checkbox-indeterminate": indeterminate && !isChecked.value,
            "k-checkbox-sm": size === "small",
            "k-checkbox-lg": size === "large",
          },
        ],
        tabindex: disabled ? undefined : 0,
        onKeydown: triggerCheck,
      };

      const inputProps = {
        type: "checkbox",
        tabindex: -1,
        class: "k-checkbox-input",
        disabled: disabled,
        checked: !!isChecked.value,
        onChange: onChange,
      };

      const innerNode = isChecked.value ? <Icon type={Checkmark} strokeWidth={60} /> : null;
      const labelNode = label || slots.default?.();

      return (
        <label {...rootProps}>
          <span class="k-checkbox-symbol">
            <input {...inputProps} />
            {innerNode}
          </span>
          {labelNode ? <span class="k-checkbox-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
}) as DefineComponent<CheckboxProps>;
