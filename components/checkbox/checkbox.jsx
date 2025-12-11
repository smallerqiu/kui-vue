import Icon from "../icon";
import { Checkmark } from "kui-icons";
import { defineComponent, ref, watch } from "vue";
import { withInstall } from "../utils/vue";

const Checkbox = defineComponent({
  name: "Checkbox",

  // [Vue 3 Upgrade]: del model
  model: {
    prop: "checked",
    event: "input",
  },

  props: {
    // [Vue 3 Upgrade]:
    // modelValue: { type: [Boolean, String, Number], default: null },

    // [Vue 3 Upgrade]: Vue 2 use checked & model
    checked: {
      type: Boolean,
      default: false,
    },

    value: { type: [String, Number, Boolean] },
    label: { type: [String, Number] },
    theme: String,
    disabled: Boolean,
    indeterminate: Boolean,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },

  setup(props, { slots, emit }) {
    const isChecked = ref(props.checked);
    watch(
      () => props.checked,
      (v) => {
        isChecked.value = v;
      }
    );

    const onChange = (e) => {
      if (props.disabled) return;

      const targetChecked = e.target.checked;

      isChecked.value = targetChecked;
      // [Vue 3 Upgrade]: emit("update:modelValue", targetChecked);
      emit("change", {
        checked: targetChecked,
        value: props.value,
        label: props.label,
      });
      emit("input", targetChecked);
    };
    const triggleCheck = (e) => {
      // onChange({ target: { checked: isChecked.value } });
      if (e.code == "Space") {
        onChange({ target: { checked: !isChecked.value } });
        e.preventDefault();
        e.stopPropagation();
      }
    };
    return () => {
      const wpClasses = [
        "k-checkbox",
        {
          ["k-checkbox-light"]: props.theme == "light",
          ["k-checkbox-disabled"]: props.disabled,
          ["k-checkbox-checked"]: isChecked.value && !props.indeterminate,
          ["k-checkbox-indeterminate"]: props.indeterminate && !isChecked.value,
          ["k-checkbox-sm"]: props.size === "small",
          ["k-checkbox-lg"]: props.size === "large",
        },
      ];

      let innerNode = isChecked.value ? (
        <Icon type={Checkmark} strokeWidth={60} />
      ) : null;

      const labelNode = props.label || slots.default?.();

      return (
        <label class={wpClasses} onKeydown={triggleCheck} tabindex="0">
          <span class="k-checkbox-symbol">
            <input
              type="checkbox"
              tabindex="-1"
              class="k-checkbox-input"
              disabled={props.disabled}
              onChange={onChange}
              // [Vue 3 Upgrade]: Vue 3 use checked={isChecked.value}
              // checked={isChecked.value}

              // [Vue 2 Only]: Vue 2 JSX need domPropsChecked to keep DOM status
              domPropsChecked={isChecked.value}
            />
            {innerNode}
          </span>
          {labelNode ? <span class="k-checkbox-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
});
export default withInstall(Checkbox);
