import Checkbox from "./checkbox";
import { defineComponent, provide, /*cloneVNode*/ } from "vue";
import { getChildren } from "../utils/vnode";
import { withInstall, cloneVNode } from '../utils/vue';
const CheckboxGroup = defineComponent({
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
      const v = [...ps.value];
      let index = v.indexOf(value);
      if (checked) {
        v.push(value);
      } else {
        v.splice(index, 1);
      }
      emit("update:value", v);
      emit("change", v);
    };

    return () => {
      const { options, direction, size } = ps;
      let children = getChildren(slots.default?.());
      if (options && options?.length) {
        children = options.map((option) => {
          let pps = {
            key: option.value,
            value: option.value,
            size,
            label: option.label,
            disabled: ps.disabled || option.disabled,
            onUpdate: change,
            checked: ps.value.indexOf(option.value) >= 0,
          };
          return <Checkbox {...pps} />;
        });
      } else {
        children = children?.map((child) => {
          // return cloneVNode(child, { size, disabled: ps.disabled || child.disabled, checked: ps.value.indexOf(child.props.value) >= 0, onUpdate: change });
          return cloneVNode(child, { props: { size, disabled: ps.disabled || child.componentOptions?.propsData.disabled, checked: ps.value.indexOf(child.componentOptions?.propsData.value) >= 0 }, on: { update: change } }, true);
        });
      }
      return <div class={["k-checkbox-group", { "k-checkbox-group-vertical": direction == "vertical" }]}>{children}</div>;
    };
  },
});
export default withInstall(CheckboxGroup);