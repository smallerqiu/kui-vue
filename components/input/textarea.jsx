import { defineComponent } from "vue";
import BaseInput from "../base/input";
export default defineComponent({
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
  // provide() {
  //   return {
  //     TextArea: this,
  //   };
  // },
  setup(ps, { attrs }) {
    const props = {
      ...attrs,
      ...ps,
      inputType: "textarea",
    };
    return () => <BaseInput {...props} />;
  },
});
