import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "InputBox",
  props: {
    multiple: Boolean,
    disabled: Boolean,
    size: String,
    type: String,
    theme: String,
    shape: String,
    inputType: String,
    value: [String, Number, Object],
    showPassword: Boolean,
    inputRef: Object,
  },
  setup(ps, { emit, slots, attrs, listeners }) {
    const handleInput = (e) => {
      // let v = e.target.value;
      // currentValue.value = v;
      // emit("update:value", v); // for 3
      emit("input", e); // for 3
    };
    const handleFocus = (e) => {
      emit("focus", e);
    };
    const handleBlur = (e) => {
      emit("blur", e);
    };
    return () => {
      const { disabled, multiple, size, type, theme, shape, inputType } = ps;
      const props = {
        ref: ps.inputRef,
        class: [
          {
            [`k-${inputType}`]: !multiple,
            [`k-${inputType}-text`]: multiple,
            [`k-${inputType}-disabled`]: disabled,
            [`k-${inputType}-sm`]: size == "small" && !multiple,
            [`k-${inputType}-lg`]: size == "large" && !multiple,
            [`k-${inputType}-${theme}`]: theme != "solid" && !multiple && theme,
            [`k-${inputType}-circle`]: shape == "circle" && !multiple,
          },
        ],
        attrs: {
          ...attrs,
          disabled,
          type,
        },
        domProps: {
          value: ps.value,
        },
        on: {
          ...listeners,
          focus: handleFocus,
          blur: handleBlur,
          input: handleInput,
        },
        // onFocus: handleFocus,
        // onBlur: handleBlur,
        // onInput: handleInput,
      };
      if (!ps.showPassword && type == "password") {
        props.type = "text";
      }
      return <input {...props} single />;
    };
  },
});
