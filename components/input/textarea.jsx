import { defineComponent, watch, ref } from "vue";
import { withInstall } from "../utils/vue";
const TextArea = defineComponent({
  name: "TextArea",
  props: {
    value: [String, Number, Object, Array],
    theme: String,
    disabled: Boolean,
  },
  setup(ps, { attrs, emit, listeners }) {
    const { theme, disabled } = ps;
    const currentValue = ref(ps.value);
    watch(
      () => ps.value,
      (v) => {
        currentValue.value = v;
      }
    );

    return () => {
      const props = {
        class: ["k-textarea", { [`k-textarea-${theme}`]: theme }],
        attrs: {
          ...attrs,
          disabled,
        },
        domProps: {
          value: currentValue.value,
        },
        on: {
          ...listeners,
          input: (e) => {
            const v = e.target.value;
            // currentValue.value = v;
            emit("input", v);
          },
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
export default withInstall(TextArea);
