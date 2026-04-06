import { defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { TypeSize } from "../const/var";

export const textAreaProps = {
  modelValue: [String, Number, Object, Array] as PropType<any>,
  value: [String, Number, Object, Array] as PropType<any>,
  theme: { type: String, default: "light" },
  size: String as PropType<TypeSize>,
  disabled: Boolean,
};

export type TextAreaProps = ExtractPropTypes<typeof textAreaProps>;

export default defineComponent({
  name: "TextArea",
  props: textAreaProps,
  emits: ["update:modelValue"],
  setup(props, { attrs, emit }) {
    const currentValue = ref(props.modelValue ?? props.value);
    
    watch(() => props.modelValue, (v) => { currentValue.value = v; });

    return () => {
      const { theme, disabled, size } = props;
      const rootProps = {
        ...attrs,
        class: [
          "k-textarea",
          {
            [`k-textarea-${theme}`]: theme === "light",
            "k-textarea-sm": size === "small",
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
}) //as DefineComponent<TextAreaProps>;