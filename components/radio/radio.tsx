import { defineComponent, type ExtractPropTypes, type PropType, ref, watch } from "vue";
import type { BooleanType, SizeType, ThemeType } from "../const/types";
import {
  markFormFieldComponent,
  resolveFormControlAttrs,
  useFormAppearance,
  useFormField,
} from "../form/context";
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
  inheritAttrs: false,
  props: radioProps,
  emits: {
    change: (event: ChangeEvent) => typeof event.checked === "boolean",
    "update:modelValue": (value: boolean) => typeof value === "boolean",
    "update:checked": (value: boolean) => typeof value === "boolean",
  },
  setup(props, { slots, emit, attrs }) {
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const isChecked = ref(
      field?.prop ? Boolean(field.value.value) : (props.modelValue ?? props.checked ?? false),
    );
    watch(
      () => (field?.prop ? field.value.value : props.modelValue),
      (v) => {
        if (field?.prop || v !== undefined) isChecked.value = Boolean(v);
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
      if (field?.prop) field.update(checked);
      emit("update:checked", checked);
    };
    const onChange = (e: Event) => {
      if (
        props.disabled ||
        field?.disabled.value ||
        props.readonly ||
        field?.readonly.value ||
        isChecked.value
      )
        return;
      e.stopPropagation();
      e.preventDefault();
      const checked = (e.target as HTMLInputElement).checked;
      emitValue(checked);
    };
    const onClick = (e: MouseEvent) => {
      if (props.readonly || field?.readonly.value) e.preventDefault();
    };
    return () => {
      const { class: attrClass, style: attrStyle, ...inputAttrs } = attrs;
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = appearance.size.value;
      const theme = appearance.theme.value;
      const classes = [
        "k-radio",
        {
          ["k-radio-fill"]: theme == "fill",
          ["k-radio-disabled"]: disabled,
          ["k-radio-readonly"]: readonly,
          ["k-radio-checked"]: isChecked.value,
          ["k-radio-lg"]: size === "large",
          ["k-radio-sm"]: size === "small",
        },
        attrClass,
      ];

      const labelNode = props.label ?? slots.default?.();

      return (
        <label class={classes} style={attrStyle} aria-readonly={readonly || undefined}>
          <span class="k-radio-symbol">
            <input
              {...inputAttrs}
              type="radio"
              class="k-radio-input"
              name={props.name}
              disabled={disabled}
              {...resolveFormControlAttrs(inputAttrs, field)}
              aria-readonly={readonly || undefined}
              onBlur={() => field?.blur()}
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
export default markFormFieldComponent(Radio);
