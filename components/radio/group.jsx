import { defineComponent, /*cloneVNode,*/ provide, computed } from "vue";
import Radio from "./radio.jsx";
import Button from "./button.jsx";
import { getChildren } from "../utils/vnode.jsx";
import { withInstall, cloneVNode } from '../utils/vue';
const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: {
    value: { type: [String, Number], default: "" },
    disabled: Boolean,
    direction: {
      type: String,
      default: "horizontal",
      validator: (val) => ["horizontal", "vertical"].indexOf(val) >= 0,
    },
    size: {
      // default: "default",
      validator(value) {
        return ["small", "large", "default"].indexOf(value) >= 0;
      },
    },
    theme: String,
    shape: String,
    options: Array,
    type: String,
  },
  setup(ps, { slots, emit }) {
    provide("radioGroup", ps);

    const change = ({ label, value }) => {
      emit("update:value", value);
      emit("change", { label, value });
    };

    return () => {
      const { options, type, direction, theme, shape, size } = ps;
      let children = getChildren(slots.default?.());

      if (options && options.length) {
        children = options.map((option) => {
          let pps = {
            theme: theme,
            shape: shape,
            size: size,
            icon: option.icon,
            key: option.key,
            value: option.value,
            label: option.label,
            disabled: ps.disabled || option.disabled,
            onUpdate: change,
            checked: ps.value == option.value,
          };
          return type == "button" ? <Button {...pps} /> : <Radio {...pps} />;
        });
      } else {
        children = children?.map((child) => {
          return cloneVNode(child, { size, theme, shape, checked: ps.value == child?.props?.value, onUpdate: change });
        });
      }
      const classes = ["k-radio-group", { "k-radio-circle": shape == "circle" },
        { "k-radio-group-light": theme == "light" && type == "button" },
        { "k-radio-group-card": theme == "card" && type == "button" },
        { "k-radio-group-vertical": direction == "vertical" }];

      return <div class={classes}>{children}</div>;
    };
  },
});
export default withInstall(RadioGroup);
