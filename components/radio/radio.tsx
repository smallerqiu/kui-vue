import { defineComponent, type ExtractPropTypes, type PropType, ref, watch } from "vue";

export const radioProps = {
  modelValue: { type: [Boolean, String, Number], default: null },
  value: { type: [String, Number, Boolean] },
  label: { type: [String, Number] },
  checked: Boolean,
  disabled: Boolean,
  theme: String,
  size: {
    type: String as PropType<"small" | "large" | "default">,
    default: "default",
  },
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;

const Radio = defineComponent({
  name: "Radio",
  props: radioProps,
  setup(props, { slots, emit }) {
    const isChecked = ref(props.modelValue || props.checked);
    // const theme = inject("theme", null);
    // console.log(props.theme,theme)
    watch(
      () => props.modelValue,
      (v) => {
        isChecked.value = v;
      }
    );
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
      emit("update:modelValue", checked);
      emit("update:checked", checked);
    };
    const onChange = (e: Event) => {
      if (props.disabled || isChecked.value) return;
      e.stopPropagation();
      e.preventDefault();
      const checked = e.target.checked;
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
        <label class={classes} tabindex={props.disabled ? undefined : 0} onKeydown={triggerCheck}>
          <span class="k-radio-symbol">
            <input
              type="radio"
              tabindex="-1"
              class="k-radio-input"
              disabled={props.disabled}
              onChange={onChange}
              checked={isChecked.value}
            />
          </span>
          {labelNode ? <span class="k-radio-label">{labelNode}</span> : null}
        </label>
      );
    };
  },
});
export default Radio;
