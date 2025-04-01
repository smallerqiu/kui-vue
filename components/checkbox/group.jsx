import Checkbox from "./checkbox";
import { defineComponent, provide } from "vue";
export default defineComponent({
  name: "CheckboxGroup",
  props: {
    disabled: Boolean,
    options: Array,
    direction: {
      type: String,
      default: "horizontal",
      validator: (val) => ["horizontal", "vertical"].indexOf(val) >= 0,
    },
    value: { type: Array, default: () => [] },
    size: {
      default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
  },

  setup(ps, { slots }) {
    provide("checkBoxGroup", ps);

    const change = (data) => {
      // let value = this.value;
      // let index = value.indexOf(data.value);
      // if (index < 0) {
      //   value.push(data.value);
      // } else {
      //   value.splice(index, 1);
      // }
      // this.$emit("input", value);
      // let item = Object.assign(data, { checked: index < 0 });
      // this.$emit("change", item);
    };

    return () => {
      const { options, direction, size } = ps;
      let childs = slots.default?.();
      if (options && options.length) {
        childs = options.map((option) => <Checkbox key={option.value} size={size} value={option.value} label={option.label} disabled={option.disabled} />);
      }
      return <div class={["k-checkbox-group", { "k-checkbox-group-vertical": direction == "vertical" }]}>{childs}</div>;
    };
  },
});
