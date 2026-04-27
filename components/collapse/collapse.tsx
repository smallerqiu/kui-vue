import { cloneVNode, defineComponent, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType } from "../const/types";
import { getChildren } from "../utils/vnode";

const collapseProps = {
  openKeys: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
  accordion: Boolean as BooleanType,
  sample: Boolean as BooleanType,
  onChange: Function as PropType<(key: string | number) => void>,
};

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;

const Collapse = defineComponent({
  name: "Collapse",
  props: collapseProps,
  setup(props, { slots, emit }) {
    const defaultOpenKeys = ref<(string | number)[]>(props.openKeys || []);

    watch(
      () => props.openKeys,
      (nv) => {
        defaultOpenKeys.value = nv;
      }
    );

    const change = (key: string | number) => {
      if (!key && key !== 0) return;
      let value = [...defaultOpenKeys.value];
      const index = value.indexOf(key);

      if (index >= 0) {
        value = props.accordion ? [] : value.filter((k) => k !== key);
      } else {
        value = props.accordion ? [key] : [...value, key];
      }
      defaultOpenKeys.value = value;
      emit("change", key);
      emit("update:openKeys", value);
    };

    return () => {
      const rootProps = {
        class: [
          "k-collapse",
          {
            "k-collapse-sample": props.sample,
          },
        ],
      };

      const children = getChildren(slots.default?.());

      return (
        <div {...rootProps}>
          {children?.map((child) => {
            const active = defaultOpenKeys.value.includes(child.key as string | number);
            return cloneVNode(child, { active, onExpand: change });
          })}
        </div>
      );
    };
  },
});
export default Collapse;
