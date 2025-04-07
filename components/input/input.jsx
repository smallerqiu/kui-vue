import BaseInput from "../base/input";
import { defineComponent } from "vue";
export default defineComponent({
  name: "TextArea",
  props: {
    clearable: Boolean,
    id: String,
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    value: [String, Number, Array, Object],
    type: {
      validator(value) {
        return ["text", "password", "url", "email", "date", "search", "hidden"].indexOf(value) >= 0;
      },
      default: "text",
    },
    icon: [String, Array],
    suffix: String,
    prefix: String,
    disabled: Boolean,
    readonly: Boolean,
    visiblePassword: Boolean,
    visiblePasswordIcon: { type: Boolean, default: true },
    theme: {
      type: String,
      default: "solid",
      validator(value) {
        return ["normal", "solid", "light"].indexOf(value) >= 0;
      },
    },
    shape: String,
  },
  // provide() {
  //   return {
  //     Input: this,
  //   };
  // },
  setup(ps, { slots, attrs }) {
    return () => {
      const props = {
        inputType: "input",
        ...attrs,
        ...ps,
      };
      return (
        <BaseInput {...props}>
          <template v-slot:suffix>{slots.suffix?.()}</template>
          <template v-slot:prefix>{slots.prefix?.()}</template>
        </BaseInput>
      );
    };
  },
});
