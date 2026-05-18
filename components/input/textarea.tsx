import {
  defineComponent,
  ref,
  watch,
  type DefineComponent,
  type ExtractPropTypes,
  type PropType,
  type TextareaHTMLAttributes,
} from "vue";
import type { BooleanType, ShapeType, SizeType, ThemeType } from "../const/types";

export const textAreaProps = {
  modelValue: [String, Number, Object, Array] as PropType<any>,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  shape: { type: String as PropType<ShapeType> },
  size: String as PropType<SizeType>,
  placeholder: String,
  rows: { type: Number, default: 2 },
  disabled: Boolean as BooleanType,
  // readonly: Boolean as BooleanType,
  onChange: { type: Function as PropType<(value: string) => void> },
};

export type TextAreaProps = Partial<ExtractPropTypes<typeof textAreaProps>> &
  Omit<TextareaHTMLAttributes, "onChange">;

const TextArea = defineComponent({
  name: "TextArea",
  props: textAreaProps,
  setup(props, { attrs, emit }) {
    const currentValue = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (v) => {
        currentValue.value = v;
      }
    );

    const handleChange = (e: Event) => {
      const { value } = e.target as HTMLInputElement;
      emit("update:modelValue", value);
      emit("change", value);
    };

    return () => {
      const { theme, disabled, size, shape, placeholder, rows } = props;
      const rootProps = {
        ...attrs,
        placeholder,
        rows,
        class: [
          "k-textarea",
          {
            [`k-textarea-fill`]: theme === "fill",
            [`k-textarea-outline`]: theme === "outline",
            "k-textarea-sm": size === "small",
            "k-textarea-square": shape === "square",
            "k-textarea-lg": size === "large",
          },
        ],
        disabled,
        value: currentValue.value,
        onInput: handleChange,
      };
      return <textarea {...rootProps} />;
    };
  },
});
export default TextArea as DefineComponent<TextAreaProps>;
