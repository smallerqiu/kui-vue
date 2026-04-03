import {
  defineComponent,
  inject,
  onMounted,
  provide,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";

import type { IconType } from "../icon";
import RecursiveMenu from "./recursive-menu";

export const menuProps = {
  theme: String,
  mode: { type: String as PropType<"vertical" | "horizontal">, default: "vertical" },
  modelValue: { type: Array as PropType<string[]>, default: () => [] },
  accordion: Boolean,
  items: Array as PropType<MenuOptionsProps[]>,
  inlineCollapsed: Boolean,
  openKeys: { type: Array as PropType<string[]>, default: () => [] },
};

export interface MenuOptionsProps {
  icon?: IconType[];
  title?: string;
  key: string;
  disabled?: boolean;
  children?: MenuOptionsProps[];
}

export type MenuProps = ExtractPropTypes<typeof menuProps>;

const Menu = defineComponent({
  name: "Menu",
  props: menuProps,
  setup(props, { emit, slots }) {
    const defaultSelectedKeys = ref(props.modelValue || []);
    const defaultOpenKeys = ref(props.openKeys || []);
    const currentMode = ref(props.mode);
    const currentInlineCollapsed = ref(props.inlineCollapsed);
    const tempOpenKeys = ref(props.openKeys || []);

    provide("menu-open-keys", defaultOpenKeys);
    provide("menu-selected-keys", defaultSelectedKeys);
    provide("menu-mode", currentMode);
    provide("menu-inline-collapsed", currentInlineCollapsed);
    const dropdown = inject("dropdown", null);

    watch(
      () => props.modelValue,
      (value) => {
        defaultSelectedKeys.value = value;
      }
    );

    watch(
      () => props.mode,
      (value) => {
        currentMode.value = value;
        setCollapsed(value === "vertical");
      }
    );

    watch(
      () => props.openKeys,
      (value) => {
        defaultOpenKeys.value = value;
      }
    );

    watch(
      () => props.inlineCollapsed,
      (collapsed) => {
        currentInlineCollapsed.value = collapsed;
        setCollapsed(collapsed);
      }
    );
    onMounted(() => {
      setCollapsed(props.inlineCollapsed);
    });

    const setCollapsed = (collapsed: boolean) => {
      if (collapsed) {
        if (defaultOpenKeys.value.length > 0) {
          tempOpenKeys.value = defaultOpenKeys.value;
        }
        defaultOpenKeys.value = [];
      } else {
        defaultOpenKeys.value = tempOpenKeys.value;
      }
    };
    const dropdownMenuSelected =
      inject<(data: { key: string; keyPath: string[] }) => void>("dropdown-menu-selected");
    const selectedKeysChange = (key: string, selected: boolean, keyPath: string[]) => {
      if (selected) {
        defaultSelectedKeys.value = [...keyPath, key];
      } else {
        defaultSelectedKeys.value = defaultSelectedKeys.value.filter((x) => x !== key);
      }
      emit("update:value", defaultSelectedKeys.value);
      emit("select", { key, keyPath });

      if (
        currentMode.value == "horizontal" ||
        currentMode.value == "vertical" ||
        currentInlineCollapsed.value
      ) {
        if (defaultOpenKeys.value.length > 0) {
          tempOpenKeys.value = defaultOpenKeys.value;
        }
        defaultOpenKeys.value = [];
      }
      dropdownMenuSelected?.({ key, keyPath });
    };

    const openKeysChange = (key: string, opened: boolean, keyPath: string[]) => {
      if (props.accordion) {
        defaultOpenKeys.value = opened ? [...keyPath, key] : keyPath;
      } else {
        if (!opened) {
          defaultOpenKeys.value = defaultOpenKeys.value.filter((x) => x !== key);
        } else {
          defaultOpenKeys.value.push(key);
        }
      }
      emit("update:openKeys", defaultOpenKeys.value);
      emit("openChange", defaultOpenKeys.value);
    };
    provide("openKeysChange", openKeysChange);
    provide("selectedKeysChange", selectedKeysChange);

    return () => {
      const preCls = dropdown ? "dropdown-menu k-scroll" : "menu";
      const { items } = props;
      const cls = [
        `k-${preCls} k-${preCls}-${currentMode.value}`,
        {
          [`k-${preCls}-inline-collapsed`]: props.inlineCollapsed,
        },
      ];
      return (
        <ul class={cls} theme-mode={props.theme}>
          {items && items.length > 0
            ? items.map((item) => {
                return <RecursiveMenu item={item} key={item.key} />;
              })
            : slots.default?.()}
        </ul>
      );
    };
  },
});
export default Menu;
