import { Loading } from "kui-icons";
import { defineComponent, ref, watch } from "vue";
import Icon from "../icon";
import { withInstall } from "../utils/vue";
const Switch = defineComponent({
  name: "KSwitch",
  props: {
    checked: [Boolean, Number], //for 3
    modelValue: [Boolean, Number], //for 2
    type: String,
    disabled: Boolean,
    loading: Boolean,
    size: {
      default: "default",
      validator(value) {
        return ["small", "default", "large"].indexOf(value) >= 0;
      },
    },
    trueText: String,
    falseText: String,
  },
  setup(ps, { slots, emit }) {
    const isChecked = ref(ps.modelValue || ps.checked);
    watch(
      () => ps.modelValue,
      (nv, no) => {
        isChecked.value = nv;
      }
    );
    watch(
      () => ps.checked,
      (nv, no) => {
        isChecked.value = nv;
      }
    );
    const change = () => {
      if (ps.disabled) {
        return false;
      }
      const checked = !isChecked.value;
      isChecked.value = checked;
      emit("update:modelValue", checked); //for 2
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
export default withInstall(Switch);
