import { defineComponent, cloneVNode, ref, watch, provide } from "vue";
import { getChildren } from "../utils/vnode";

export default defineComponent({
  name: "Collapse",
  props: {
    value: Array,
    accrodion: Boolean,
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
        ps.accrodion ? (value = []) : value.splice(index, 1);
      } else {
        ps.accrodion ? (value = [key]) : value.push(key);
      }
      currentValue.value = value;
      emit("change", key);
      emit("input", value);
    };

    return () => {
      const classes = [
        "k-collapse",
        {
          ["k-collaplse-sample"]: ps.sample,
        },
      ];
      const childs = getChildren(slots.default?.());

      return (
        <div class={classes}>
          {childs?.map((child) => {
            let actived = currentValue.value.includes(child.key);
            return cloneVNode(child, { actived, onExpand: change });
          })}
        </div>
      );
    };
  },
});
