import { defineComponent, type ExtractPropTypes, type PropType, ref, watch } from "vue";
import type { IconType } from "../icon";
import type { ChangeEvent } from "./types";
export const radioProps = {
  modelValue: { type: [Boolean, String, Number], default: false },
  value: { type: [String, Number, Boolean] },
  label: { type: [String] },
  checked: Boolean,
  disabled: Boolean,
  theme: String,
  icon: Array as PropType<IconType[]>,
  size: {
    type: String as PropType<"small" | "large" | "default">,
    default: "default",
  },
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;

const Radio = defineComponent({
  name: "Radio",
  props: radioProps,
  emits: ["update:modelValue", "change", "update:checked"],
  setup(props, { slots, emit }) {
    const isChecked = ref<any>(props.modelValue || props.checked);
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
      if (props.disabled || isChecked.value) return;
      e.stopPropagation();
      e.preventDefault();
      const checked = (e.target as HTMLInputElement).checked;
      emitValue(checked);
    };
    const triggerCheck = (e: KeyboardEvent) => {
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
