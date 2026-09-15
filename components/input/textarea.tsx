import {
  computed,
  defineComponent,
  ref,
  type DefineComponent,
  type ExtractPropTypes,
  type PropType,
  type TextareaHTMLAttributes,
} from "vue";
import type { BooleanType, ShapeType, SizeType, ThemeType } from "../const/types";
import {
  markFormFieldComponent,
  resolveFormControlAttrs,
  useFormAppearance,
  useFormField,
} from "../form/context";

const textAreaProps = {
  value: [String, Number, Array] as PropType<string | number | readonly string[] | null>,
  modelValue: [String, Number, Array] as PropType<string | number | readonly string[] | null>,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  shape: { type: String as PropType<ShapeType> },
  size: String as PropType<SizeType>,
  placeholder: String,
  rows: { type: Number, default: 2 },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
};

export type TextAreaProps = Partial<ExtractPropTypes<typeof textAreaProps>> &
  Omit<TextareaHTMLAttributes, "onChange">;

const TextArea = defineComponent({
  name: "TextArea",
  props: textAreaProps,
  emits: {
    "update:modelValue": (value: string) => typeof value === "string",
    change: (value: string) => typeof value === "string",
    input: (event: Event) => typeof event?.type === "string",
  },
  setup(props, { attrs, emit }) {
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const innerValue = ref(props.value);
    const currentValue = computed(() =>
      field?.prop
        ? (field.value.value as string | number | readonly string[] | null)
        : props.modelValue !== undefined
          ? props.modelValue
          : innerValue.value,
    );

    const handleChange = (e: Event) => {
      const { value } = e.target as HTMLInputElement;
      if (props.modelValue === undefined) innerValue.value = value;
      emit("update:modelValue", value);
      if (field?.prop) field.update(value);
      emit("change", value);
      emit("input", e);
    };

    return () => {
      const { theme, shape, placeholder, rows } = props;
      const disabled = props.disabled || field?.disabled.value;
      const readonly = props.readonly || field?.readonly.value;
      const size = appearance.size.value;
      const effectiveTheme = appearance.theme.value ?? theme;
      const effectiveShape = appearance.shape.value ?? shape;
      const rootProps = {
        ...attrs,
        ...resolveFormControlAttrs(attrs, field),
        placeholder,
        rows,
        class: [
          "k-textarea",
          {
            [`k-textarea-${effectiveTheme}`]: !!effectiveTheme && effectiveTheme !== "outline",
            "k-textarea-sm": size === "small",
            "k-textarea-square": effectiveShape === "square",
            "k-textarea-circle": effectiveShape === "circle",
            "k-textarea-lg": size === "large",
          },
          attrs.class,
        ],
        disabled,
        readonly,
        "aria-readonly": readonly || undefined,
        value: currentValue.value,
        onInput: handleChange,
        onBlur: () => field?.blur(),
      };
      return <textarea {...rootProps} />;
    };
  },
});
const FormTextArea = markFormFieldComponent(TextArea);
export default FormTextArea as typeof FormTextArea & DefineComponent<TextAreaProps>;
