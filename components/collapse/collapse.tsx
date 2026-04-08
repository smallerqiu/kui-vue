import {
  cloneVNode,
  defineComponent,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType
} from "vue";
import type { TypeBoolean } from "../const/var";
import { getChildren } from "../utils/vnode";

const collapseProps = {
  openKeys: {
    type: Array as PropType<Array<string | number>>,
    default: () => [],
  },
  accordion: Boolean as TypeBoolean,
  sample: Boolean as TypeBoolean,
};

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;

export default defineComponent({
  name: "Collapse",
  props: collapseProps,
  emits: ["change", "update"],
  setup(props, { slots, emit }) {
    const defaultOpenKeys = ref<Array<string | number>>(props.openKeys || []);

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
      emit("update", value);
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
}) //as DefineComponent<CollapseProps>;
