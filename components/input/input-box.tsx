import { defineComponent, type ExtractPropTypes, type PropType } from "vue";

export const inputBoxProps = {
  multiple: Boolean,
  disabled: Boolean,
  size: String,
  type: String,
  theme: String,
  shape: String,
  inputType: String,
  value: [String, Number, Object] as PropType<string | number | any>,
  showPassword: Boolean,
  inputRef: Object as PropType<any>,
  htmlAttrs: { type: Object as PropType<any>, default: () => ({}) },
};

export type InputBoxProps = ExtractPropTypes<typeof inputBoxProps>;

export default defineComponent({
  name: "InputBox",
  props: inputBoxProps,
  emits: ["update:value", "focus", "blur"],
  setup(props, { emit, attrs }) {
    const handleInput = (e: Event) => {
      emit("update:value", e);
    };
    const handleFocus = (e: FocusEvent) => {
      emit("focus", e);
    };
    const handleBlur = (e: FocusEvent) => {
      emit("blur", e);
    };
    return () => {
      const { disabled, multiple, size, theme, shape, inputType } = props;
      let type = props.type;

      if (props.showPassword === true && type === "password") {
        type = "text";
      }

      const inputProps = {
        ref: props.inputRef,
        ...attrs,
        ...props.htmlAttrs,
        class: [
          {
            [`k-${inputType}`]: !multiple,
            [`k-${inputType}-text`]: multiple,
            [`k-${inputType}-disabled`]: disabled,
            [`k-${inputType}-sm`]: size === "small" && !multiple,
            [`k-${inputType}-lg`]: size === "large" && !multiple,
            [`k-${inputType}-${theme}`]: theme !== "solid" && !multiple && theme,
            [`k-${inputType}-circle`]: shape === "circle" && !multiple,
          },
          props.htmlAttrs.class,
        ],
        disabled,
        type,
        value: props.value,
        onFocus: handleFocus,
        onBlur: handleBlur,
        onInput: handleInput,
      };

      return <input {...inputProps} />;
    };
  },
});