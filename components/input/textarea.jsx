import { defineComponent, ref, watch } from "vue";

const TextArea = defineComponent({
  name: "TextArea",
  props: {
    modelValue: [String, Number, Object, Array],
    value: [String, Number, Object, Array],
    theme: { type: String, default: "light" },
    size: String,
    disabled: Boolean,
  },
  setup(ps, { attrs, emit, listeners }) {
    const currentValue = ref(ps.modelValue || ps.value);
    watch(
      () => ps.modelValue,
      (v) => {
        currentValue.value = v;
      }
    );

    return () => {
      const { theme, disabled, size } = ps;
      const props = {
        class: [
          "k-textarea",
          {
            [`k-textarea-${theme}`]: theme == "light",
            "k-textarea-sm": size == "small",
            "k-textarea-lg": size == "large",
          },
        ],
        ...attrs,
        disabled,
        value: currentValue.value,
        ...listeners,
        onInput: (e) => {
          const v = e.target.value;
          // currentValue.value = v;
          emit("update:modelValue", v);
        },
        // onInput: (e) => {
        //   // todo: not update value
        //   const v = e.target.value;
        //   currentValue.value = v;
        //   emit("update:value", v);
        // },
      };
      return <textarea {...props} />;
    };
  },
});
export default TextArea;
