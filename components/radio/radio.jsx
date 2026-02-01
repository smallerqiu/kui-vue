import { defineComponent, watch, ref, inject } from "vue";
import { withInstall } from "../utils/vue";

const Radio = defineComponent({
  name: "Radio",
  // [Vue 3 Upgrade]: del
  model: {
    prop: "checked",
    event: "input",
  },
  props: {
    // [Vue 3 Upgrade]
    // modelValue: { type: [Boolean, String, Number], default: null },

    // [Vue 3 Upgrade]: Vue 2 use checked & model
    checked: {
      type: [Boolean, Number],
      default: false,
    },
    value: { type: [String, Number, Boolean] },
    label: { type: [String, Number] },
    disabled: Boolean,
    theme: String,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },

  setup(props, { slots, emit }) {
    const isChecked = ref(props.checked);
    // const theme = inject("theme", null);
    // console.log(props.theme,theme)
    watch(
      () => props.checked,
      (v) => {
        isChecked.value = v;
      }
    );

    const emitValue = (checked) => {
      isChecked.value = checked;
      emit("change", {
        checked: checked,
        value: props.value,
        label: props.label || slots.default?.(),
      });
      emit("input", checked);
    };
    const onChange = (e) => {
      if (props.disabled || isChecked.value) return;
      const checked = e.target.checked;
      e.preventDefault();
      e.stopPropagation();
      emitValue(checked);
    };
    const triggerCheck = (e) => {
      if (e.code == "Space") {
        e.preventDefault();
        e.stopPropagation();
        if (props.disabled || isChecked.value) return;
        emitValue(!isChecked.value);
      }
    };
    return () => {
      const classes = [
        "k-radio",
        {
          ["k-radio-light"]: props.theme == "light",
          ["k-radio-disabled"]: props.disabled,
          ["k-radio-checked"]: isChecked.value,
          ["k-radio-lg"]: props.size === "large",
          ["k-radio-sm"]: props.size === "small",
        },
      ];

      const labelNode = props.label || slots.default?.();

      return (
        <label class={classes} tabindex={props.disabled ? null : 0} onKeydown={triggerCheck}>
          <span class="k-radio-symbol">
            <input
              type="radio"
              tabindex="-1"
              class="k-radio-input"
              disabled={props.disabled}
              onChange={onChange}
              // [Vue 3 Upgrade]: checked={isChecked.value}
              // [Vue 2 Only]: Vue 2 JSX need domPropsChecked
              domPropsChecked={isChecked.value}
            />
          </span>
          {labelNode ? <span class="k-radio-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
});
export default withInstall(Radio);
