import { defineComponent, provide, ref, watch, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType, SurfaceShapeType, ThemeType } from "../const/types";
import { useConfigAppearance } from "../config/context";
import { collapseContextKey, type CollapseKey } from "./context";

const collapseProps = {
  openKeys: {
    type: Array as PropType<(string | number)[]>,
    default: () => [],
  },
  accordion: Boolean as BooleanType,
  sample: Boolean as BooleanType,
  theme: { type: String as PropType<ThemeType>, default: "outline" },
  shape: { type: String as PropType<SurfaceShapeType>, default: "round" },
};

export type CollapseProps = ExtractPropTypes<typeof collapseProps>;

const Collapse = defineComponent({
  name: "Collapse",
  props: collapseProps,
  emits: {
    change: (key: CollapseKey) => typeof key === "string" || typeof key === "number",
    "update:openKeys": (keys: CollapseKey[]) => Array.isArray(keys),
  },
  setup(props, { slots, emit }) {
    const appearance = useConfigAppearance(props);
    const defaultOpenKeys = ref<CollapseKey[]>([...(props.openKeys || [])]);

    watch(
      () => props.openKeys,
      (nv) => {
        defaultOpenKeys.value = [...nv];
      },
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

    provide(collapseContextKey, {
      openKeys: defaultOpenKeys,
      toggle: change,
    });

    return () => {
      const rootProps = {
        class: [
          "k-collapse",
          {
            "k-collapse-sample": props.sample,
            [`k-collapse-${appearance.theme.value}`]: appearance.theme.value,
            [`k-collapse-${appearance.surfaceShape.value}`]: appearance.surfaceShape.value,
          },
        ],
      };

      return <div {...rootProps}>{slots.default?.()}</div>;
    };
  },
});
export default Collapse;
