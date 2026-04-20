import {
  defineComponent,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type TextareaHTMLAttributes,
} from "vue";
import type { BooleanType, ShapeType, SizeType, ThemeType } from "../const/types";

export const textAreaProps = {
  modelValue: [String, Number, Object, Array] as PropType<any>,
  value: [String, Number, Object, Array] as PropType<any>,
  theme: { type: String as PropType<ThemeType>, default: "light" },
  shape: { type: String as PropType<ShapeType> },
  size: String as PropType<SizeType>,
  placeholder: String,
  rows: { type: Number, default: 2 },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
};

export type TextAreaProps = ExtractPropTypes<typeof textAreaProps> & TextareaHTMLAttributes;

const TextArea = defineComponent({
  name: "TextArea",
  props: textAreaProps,
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const currentValue = ref(props.modelValue ?? props.value);

    watch(
      () => props.modelValue,
      (v) => {
        currentValue.value = v;
      }
    );

    return () => {
      const { theme, disabled, size, shape, placeholder, rows } = props;
      const rootProps = {
        ...attrs,
        placeholder,
        rows,
        class: [
          "k-textarea",
          {
            [`k-textarea-${theme}`]: theme === "light",
            "k-textarea-sm": size === "small",
            "k-textarea-square": shape === "square",
            "k-textarea-lg": size === "large",
          },
        ],
        disabled,
        value: currentValue.value,
        onInput: (e: Event) => emit("update:modelValue", (e.target as HTMLTextAreaElement).value),
      };
      return <textarea {...rootProps} />;
    };
  },
});
export default TextArea;
