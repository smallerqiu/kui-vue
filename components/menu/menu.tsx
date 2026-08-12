import {
  defineComponent,
  inject,
  onBeforeUnmount,
  provide,
  reactive,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNode,
} from "vue";

import { DropdownContextKey, type DropdownContext } from "kui-vue/dropdown/dropdown-context";
import type { BooleanType, DirectionType } from "../const/types";
import type { IconType } from "../icon";
import { MenuContextKey } from "./menu-context";
import RecursiveMenu from "./recursive-menu";

export interface MenuSelectEvent {
  key: string;
  keyPath: string[];
}
const menuProps = {
  theme: String,
  mode: { type: String as PropType<DirectionType>, default: "vertical" },
  modelValue: { type: Array as PropType<string[]>, default: () => [] },
  accordion: Boolean as BooleanType,
  items: Array as PropType<MenuOptionsProps[]>,
  inlineCollapsed: Boolean as BooleanType,
  openKeys: { type: Array as PropType<string[]>, default: () => [] },
  onSelect: { type: Function as PropType<(data: MenuSelectEvent) => void> },
  onOpenChange: { type: Function as PropType<(openKeys: string[]) => void> },
};

export interface MenuOptionsProps {
  icon?: IconType[];
  title?: string | VNode;
  key: string;
  disabled?: boolean;
  children?: MenuOptionsProps[];
  [key: string]: unknown;
}

export type MenuProps = ExtractPropTypes<typeof menuProps>;

const Menu = defineComponent({
  name: "Menu",
  props: menuProps,
  setup(props, { emit, slots }) {
    const defaultSelectedKeys = ref([...(props.modelValue || [])]);
    const defaultOpenKeys = ref(props.inlineCollapsed ? [] : [...(props.openKeys || [])]);
    const currentMode = ref(props.mode);
    const currentInlineCollapsed = ref(props.inlineCollapsed);
    const popupInlineCollapsed = ref(props.inlineCollapsed);
    const tempOpenKeys = ref([...(props.openKeys || [])]);
    const collapseTimer = ref<ReturnType<typeof setTimeout>>();
    const dropdownContext = inject<DropdownContext | null>(DropdownContextKey, null);

    watch(
      () => props.modelValue,
      (value) => {
        defaultSelectedKeys.value = [...value];
      }
    );

    watch(
      () => props.mode,
      (value) => {
        currentMode.value = value;
        if (value === "vertical") {
          collapseOpenKeys();
        } else if (!props.inlineCollapsed) {
          restoreOpenKeys();
        }
      }
    );

    watch(
      () => props.openKeys,
      (value) => {
        if (props.inlineCollapsed || currentMode.value === "vertical") {
          tempOpenKeys.value = [...value];
        } else {
          defaultOpenKeys.value = [...value];
        }
      }
    );

    watch(
      () => props.inlineCollapsed,
      (collapsed) => {
        clearTimeout(collapseTimer.value);
        if (collapsed) {
          // 宽度和子菜单同时开始收缩；等垂直离场完成后再把子树移入 body。
          currentInlineCollapsed.value = true;
          collapseOpenKeys();
          collapseTimer.value = setTimeout(() => {
            popupInlineCollapsed.value = true;
          }, 200);
        } else {
          // 先把子树移回 inline 位置，再同时恢复宽度和之前打开的子菜单。
          popupInlineCollapsed.value = false;
          currentInlineCollapsed.value = false;
          restoreOpenKeys();
        }
      }
    );

    onBeforeUnmount(() => {
      clearTimeout(collapseTimer.value);
    });

    const collapseOpenKeys = () => {
      if (defaultOpenKeys.value.length > 0) {
        tempOpenKeys.value = [...defaultOpenKeys.value];
      }
      defaultOpenKeys.value = [];
    };
    const restoreOpenKeys = () => {
      defaultOpenKeys.value = [...tempOpenKeys.value];
    };

    const selectedKeysChange = (key: string, selected: boolean, keyPath: string[]) => {
      if (selected) {
        defaultSelectedKeys.value = [...keyPath, key];
      } else {
        defaultSelectedKeys.value = defaultSelectedKeys.value.filter((x) => x !== key);
      }
      emit("update:modelValue", defaultSelectedKeys.value);
      emit("select", { key, keyPath });

      if (
        currentMode.value == "horizontal" ||
        currentMode.value == "vertical" ||
        currentInlineCollapsed.value
      ) {
        if (defaultOpenKeys.value.length > 0) {
          tempOpenKeys.value = [...defaultOpenKeys.value];
        }
        defaultOpenKeys.value = [];
      }
      dropdownContext?.menuSelected?.({ key, keyPath });
    };

    const openKeysChange = (key: string, opened: boolean, keyPath: string[]) => {
      if (props.accordion) {
        defaultOpenKeys.value = opened ? [...keyPath, key] : keyPath;
      } else {
        if (!opened) {
          defaultOpenKeys.value = defaultOpenKeys.value.filter((x) => x !== key);
        } else {
          defaultOpenKeys.value = defaultOpenKeys.value.includes(key)
            ? defaultOpenKeys.value
            : [...defaultOpenKeys.value, key];
        }
      }
      emit("update:openKeys", defaultOpenKeys.value);
      emit("openChange", defaultOpenKeys.value);
    };

    const menuState = reactive({
      openKeys: defaultOpenKeys,
      selectedKeys: defaultSelectedKeys,
      mode: currentMode,
      inlineCollapsed: currentInlineCollapsed,
      popupInlineCollapsed,
      dropdown: dropdownContext != null,
      openKeysChange,
      selectedKeysChange,
    });

    provide(MenuContextKey, menuState);

    return () => {
      const preCls = menuState.dropdown ? "dropdown-menu" : "menu";
      const { items } = props;
      const cls = [
        `k-${preCls}`,
        `k-${preCls}-${currentMode.value}`,
        {
          "k-scroll": menuState.dropdown,
          [`k-${preCls}-inline-collapsed`]: currentInlineCollapsed.value,
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
