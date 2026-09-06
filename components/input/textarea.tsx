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
  onChange: { type: Function as PropType<(value: string) => void> },
};

export type TextAreaProps = Partial<ExtractPropTypes<typeof textAreaProps>> &
  Omit<TextareaHTMLAttributes, "onChange">;

const TextArea = defineComponent({
  name: "TextArea",
  props: textAreaProps,
  setup(props, { attrs, emit }) {
    const innerValue = ref(props.value);
    const currentValue = computed(() =>
      props.modelValue !== undefined ? props.modelValue : innerValue.value,
    );

    const handleChange = (e: Event) => {
      const { value } = e.target as HTMLInputElement;
      if (props.modelValue === undefined) innerValue.value = value;
      emit("update:modelValue", value);
      emit("change", value);
      emit("input", e);
    };

    return () => {
      const { theme, disabled, readonly, size, shape, placeholder, rows } = props;
      const rootProps = {
        ...attrs,
        placeholder,
        rows,
        class: [
          "k-textarea",
          {
            [`k-textarea-${theme}`]: !!theme && theme !== "outline",
            "k-textarea-sm": size === "small",
            "k-textarea-square": shape === "square",
            "k-textarea-circle": shape === "circle",
            "k-textarea-lg": size === "large",
          },
          attrs.class,
        ],
        disabled,
        readonly,
        "aria-readonly": readonly || undefined,
        value: currentValue.value,
        onInput: handleChange,
      };
      return <textarea {...rootProps} />;
    };
  },
});
export default TextArea as DefineComponent<TextAreaProps>;
