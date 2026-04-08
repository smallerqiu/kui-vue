import { Loading } from "kui-icons";
import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent, ref, watch } from "vue";
import type { TypeBoolean } from "../const/var";
import Icon from "../icon";

export const switchProps = {
  checked: [Boolean, Number],
  modelValue: [Boolean, Number],
  type: String,
  disabled: Boolean as TypeBoolean,
  loading: Boolean as TypeBoolean,
  size: {
    default: "default",
    type: String as PropType<"small" | "default" | "large">,
  },
  trueText: String,
  falseText: String,
};

export type SwitchProps = ExtractPropTypes<typeof switchProps>;

const Switch = defineComponent({
  name: "KSwitch",
  props: switchProps,
  emits: ["update:modelValue", "change"],
  setup(ps, { slots, emit }) {
    const isChecked = ref(ps.modelValue || ps.checked);
    watch(
      () => ps.modelValue,
      (nv) => {
        isChecked.value = nv;
      }
    );
    watch(
      () => ps.checked,
      (nv) => {
        isChecked.value = nv;
      }
    );
    const change = () => {
      if (ps.disabled) {
        return false;
      }
      const checked = !isChecked.value;
      isChecked.value = checked;
      emit("update:modelValue", checked);
      emit("change", checked);
    };

    return () => {
      const { type, trueText, falseText, disabled, loading, size } = ps;
      const classes = [
        "k-switch",
        {
          ["k-switch-checked"]: isChecked.value,
          ["k-switch-disabled"]: disabled || loading,
          [`k-switch-${type}`]: !!type,
          ["k-switch-sm"]: ps.size == "small",
        },
      ];
      const children = slots.checked?.() || trueText || slots.unchecked?.() || falseText;
      const loadNode = loading ? <Icon spin type={Loading} class="k-switch-loading" /> : null;

      const textNode =
        size != "small" && children ? (
          <span class="k-switch-inner">
            {isChecked.value ? slots.checked?.() || trueText : slots.unchecked?.() || falseText}
          </span>
        ) : null;

      return (
        <button class={classes} onClick={change} disabled={disabled || loading} type="button">
          {textNode}
          {loadNode}
        </button>
      );
    };
  },
});
export default Switch;
