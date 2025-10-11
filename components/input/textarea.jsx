import { defineComponent, watch, ref } from "vue";
import { withInstall } from '../utils/vue';
const TextArea = defineComponent({
  name: "TextArea",
  props: {
    value: [String, Number, Object],
    theme: String,
    disabled: Boolean,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },
  setup(ps, { attrs, emit }) {
    const { theme } = ps;
    const currentValue = ref(ps.value);
    watch(
      () => ps.value,
      (v) => {
        currentValue.value = v;
      }
    );
    const props = {
      class: ["k-textarea", { [`k-textarea-${theme}`]: theme }],
      // ...attrs,
      // ...ps,
      value: currentValue.value,
      onInput: (e) => {
        // todo: not update value
        const v = e.target.value
        currentValue.value = v;
        emit("update:value", v);
      },
    };
    return () => <textarea {...props} />;
  },
});
export default withInstall(TextArea);
