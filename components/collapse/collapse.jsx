import { defineComponent, /*cloneVNode,*/ ref, watch } from "vue";
import { getChildren } from "../utils/vnode";
import { withInstall, cloneVNode } from "../utils/vue";
const Collapse = defineComponent({
  name: "Collapse",
  props: {
    openKeys: Array,
    accordion: Boolean,
    sample: Boolean,
  },
  setup(ps, { slots, emit }) {
    const defaultOpenKeys = ref(ps.openKeys || []);

    watch(
      () => ps.openKeys,
      (nv, no) => {
        defaultOpenKeys.value = nv;
      }
    );

    const change = (key) => {
      if (!key) return;
      let value = defaultOpenKeys.value;
      let index = value.indexOf(key);

      if (index >= 0) {
        ps.accordion ? (value = []) : value.splice(index, 1);
      } else {
        ps.accordion ? (value = [key]) : value.push(key);
      }
      defaultOpenKeys.value = value;
      emit("change", key, value);
      emit("update:openKeys", value);
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
            let active = defaultOpenKeys.value.includes(child.key);
            // return cloneVNode(child, { active, onExpand: change }); //for 3
            return cloneVNode(
              child,
              // { props:  active, onExpand: change }, //for 3
              { props: { active }, on: { expand: change } },
              true
            );
          })}
        </div>
      );
    };
  },
});
export default withInstall(Collapse);
