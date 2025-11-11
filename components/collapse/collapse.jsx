import { defineComponent, /*cloneVNode,*/ ref, watch } from "vue";
import { getChildren } from "../utils/vnode";
import { withInstall } from '../utils/vue';
import Vue from "vue";
const {  cloneVNode } = Vue;
const Collapse = defineComponent({
  name: "Collapse",
  props: {
    value: Array,
    accordion: Boolean,
    sample: Boolean,
  },
  setup(ps, { slots, emit }) {
    const currentValue = ref(ps.value || []);

    watch(
      () => ps.value,
      (nv, no) => {
        currentValue.value = nv;
      }
    );

    const change = (key) => {
      if (!key) return;
      let value = currentValue.value;
      let index = value.indexOf(key);

      if (index >= 0) {
        ps.accordion ? (value = []) : value.splice(index, 1);
      } else {
        ps.accordion ? (value = [key]) : value.push(key);
      }
      currentValue.value = value;
      emit("change", key);
      emit("update", value);
    };

    return () => {
      const classes = [
        "k-collapse",
        {
          ["k-collapse-sample"]: ps.sample,
        },
      ];
      const children = getChildren(slots.default?.());

      return (
        <div class={classes}>
          {children?.map((child) => {
            let active = currentValue.value.includes(child.key);
            return cloneVNode(child, { active, onExpand: change });
          })}
        </div>
      );
    };
  },
});
export default withInstall(Collapse);
