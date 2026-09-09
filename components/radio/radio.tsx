import { defineComponent, type ExtractPropTypes, type PropType, ref, watch } from "vue";
import type { BooleanType, SizeType, ThemeType } from "../const/types";
import type { ChangeEvent } from "./types";
const radioProps = {
  modelValue: { type: Boolean, default: undefined },
  value: { type: [String, Number] },
  name: String,
  label: { type: String },
  checked: Boolean as BooleanType,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  size: {
    type: String as PropType<SizeType>,
  },
};

export type RadioProps = ExtractPropTypes<typeof radioProps>;

const Radio = defineComponent({
  name: "Radio",
  props: radioProps,
  emits: {
    change: (event: ChangeEvent) => typeof event.checked === "boolean",
    "update:modelValue": (value: boolean) => typeof value === "boolean",
    "update:checked": (value: boolean) => typeof value === "boolean",
  },
  setup(props, { slots, emit }) {
    const isChecked = ref(props.modelValue ?? props.checked ?? false);
    watch(
      () => props.modelValue,
      (v) => {
        if (v !== undefined) isChecked.value = v;
      },
    );
    watch(
      () => props.checked,
      (v) => {
        if (props.modelValue === undefined) isChecked.value = Boolean(v);
      },
    );

    const emitValue = (checked: boolean) => {
      isChecked.value = checked;
      emit("change", {
        checked: checked,
        value: props.value,
        label: props.label ?? String(props.value ?? ""),
      } as ChangeEvent);
      emit("update:modelValue", checked);
      emit("update:checked", checked);
    };
    const onChange = (e: Event) => {
      if (props.disabled || props.readonly || isChecked.value) return;
      e.stopPropagation();
      e.preventDefault();
      const checked = (e.target as HTMLInputElement).checked;
      emitValue(checked);
    };
    const onClick = (e: MouseEvent) => {
      if (props.readonly) e.preventDefault();
    };
    return () => {
      const classes = [
        "k-radio",
        {
          ["k-radio-fill"]: props.theme == "fill",
          ["k-radio-disabled"]: props.disabled,
          ["k-radio-readonly"]: props.readonly,
          ["k-radio-checked"]: isChecked.value,
          ["k-radio-lg"]: props.size === "large",
          ["k-radio-sm"]: props.size === "small",
        },
      ];

      const labelNode = props.label ?? slots.default?.();

      return (
        <label class={classes} aria-readonly={props.readonly || undefined}>
          <span class="k-radio-symbol">
            <input
              type="radio"
              class="k-radio-input"
              name={props.name}
              disabled={props.disabled}
              aria-readonly={props.readonly || undefined}
              onClick={onClick}
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
