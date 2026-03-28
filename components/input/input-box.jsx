import { defineComponent } from "vue";

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
    htmlAttrs: Object,
  },
  emits: ["update:value", "focus", "blur"],
  setup(ps, { emit, slots, attrs, listeners }) {
    const handleInput = (e) => {
      // let v = e.target.value;
      // currentValue.value = v;
      emit("update:value", e);
    };
    const handleFocus = (e) => {
      emit("focus", e);
      e.preventDefault();
      e.stopPropagation();
    };
    const handleBlur = (e) => {
      emit("blur", e);
    };
    return () => {
      const { disabled, multiple, size, type, theme, shape, inputType } = ps;
      const props = {
        ref: ps.inputRef,
        ...attrs,
        ...ps.htmlAttrs,
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
          ps.htmlAttrs.class,
        ],
        disabled,
        type,
        value: ps.value,
        ...listeners,

        onFocus: handleFocus,
        onBlur: handleBlur,
        onInput: handleInput,
      };

      if (ps.showPassword === true && type == "password") {
        props.type = "text";
      }
      if (ps.htmlAttrs.autoComplete != "on") {
        props["data-1p-ignore"] = true;
        props["data-lpignore"] = true;
        props["data-dashlane-ignore"] = "true";
        props.autoComplete = "nope"; // "new-password";
      }
      return <input {...props} single />;
    };
  },
});
