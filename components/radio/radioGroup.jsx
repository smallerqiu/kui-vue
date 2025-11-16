import { defineComponent, /*cloneVNode,*/ provide, computed } from "vue";
import Radio from "./radio.jsx";
import RadioButton from "./radioButton.jsx";
import { getChildren } from "../utils/vnode.jsx";
import { withInstall, cloneVNode } from "../utils/vue";
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
      emit("input", value);
      emit("change", { label, value });
    };

    return () => {
      const { options, type, direction, theme, shape, size } = ps;
      let children = getChildren(slots.default?.());

      if (options && options.length) {
        children = options.map((option) => {
          let pps = {
            key: option.key,
            props: {
              theme: theme,
              shape: shape,
              size: size,
              icon: option.icon,
              value: option.value,
              label: option.label,
              disabled: ps.disabled || option.disabled,
              checked: ps.value == option.value,
            },
            // onUpdate: change,
            on: {
              update: change,
            },
          };
          return type == "button" ? (
            <RadioButton {...pps} />
          ) : (
            <Radio {...pps} />
          );
        });
      } else {
        children = children?.map((child) => {
          // return cloneVNode(child, { size, theme, shape, checked: ps.value == child?.props?.value, onUpdate: change }, true);
          return cloneVNode(
            child,
            {
              props: {
                size,
                theme,
                shape,
                checked: ps.value == child?.componentOptions?.propsData?.value,
              },
              on: { update: change },
            },
            true
          );
        });
      }
      const classes = [
        "k-radio-group",
        { "k-radio-circle": shape == "circle" },
        { "k-radio-group-light": theme == "light" && type == "button" },
        { "k-radio-group-card": theme == "card" && type == "button" },
        { "k-radio-group-vertical": direction == "vertical" },
      ];

      return <div class={classes}>{children}</div>;
    };
  },
});
export default withInstall(RadioGroup);
