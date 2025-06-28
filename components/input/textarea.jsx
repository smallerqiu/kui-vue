import { defineComponent } from "vue";
import { withInstall } from '../utils/vue';
const TextArea = defineComponent({
  name: "TextArea",
  props: {
    value: [String, Number],
    theme: String,
    disabled: Boolean,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },
  setup(ps, { attrs }) {
    const { theme } = ps;
    const props = {
      class: ["k-textarea", { [`k-textarea-${theme}`]: theme }],
      ...attrs,
      ...ps,
    };
    return () => <textarea {...props} />;
  },
});
export default withInstall(TextArea);
