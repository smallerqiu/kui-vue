import Checkbox from "./checkbox";
import { defineComponent, provide, cloneVNode, computed } from "vue";
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

  setup(ps, { slots, emit }) {
    provide("checkBoxGroup", ps);

    const change = ({ checked, label, value }) => {
      const v = ps.value;
      let index = v.indexOf(value);
      if (checked) {
        v.push(value);
      } else {
        v.splice(index, 1);
      }
      emit("update:value", v);
      emit("change", { checked, label, value });
    };

    return () => {
      const { options, direction, size } = ps;
      let childs = slots.default?.();
      if (options && options?.length) {
        childs = options.map((option) => {
          let pps = {
            key: option.value,
            value: option.value,
            size,
            label: option.label,
            disabled: option.disabled,
            onUpdate: change,
            checked: ps.value.indexOf(option.value) >= 0,
          };
          return <Checkbox {...pps} />;
        });
      } else {
        childs = childs?.map((child) => {
          return cloneVNode(child, { size, checked: ps.value.indexOf(child.props.value) >= 0, onUpdate: change });
        });
      }
      return <div class={["k-checkbox-group", { "k-checkbox-group-vertical": direction == "vertical" }]}>{childs}</div>;
    };
  },
});
