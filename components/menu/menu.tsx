import {
  defineComponent,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  reactive,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";

import { DropdownContextKey, type DropdownContext } from "../dropdown/dropdown-context";
import type { BooleanType, DirectionType } from "../const/types";
import { MenuContextKey } from "./menu-context";
import RecursiveMenu from "./recursive-menu";
import SubMenu from "./sub-menu";
import type { MenuOptionsProps, MenuSelectEvent } from "./types";
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
const overflowMenuKey = "__kui_menu_overflow__";

export type MenuProps = ExtractPropTypes<typeof menuProps>;

const Menu = defineComponent({
  name: "Menu",
  props: menuProps,
  setup(props, { emit, slots }) {
    const defaultSelectedKeys = ref([...(props.modelValue || [])]);
    const defaultOpenKeys = ref(props.inlineCollapsed ? [] : [...(props.openKeys || [])]);
    const currentMode = ref(props.mode);
    const currentInlineCollapsed = ref(!!props.inlineCollapsed);
    const popupInlineCollapsed = ref(!!props.inlineCollapsed);
    const tempOpenKeys = ref([...(props.openKeys || [])]);
    const collapseTimer = ref<ReturnType<typeof setTimeout>>();
    const menuRef = ref<HTMLElement | null>(null);
    const visibleCount = ref(Number.POSITIVE_INFINITY);
    const totalItemCount = ref(0);
    let itemWidths: number[] = [];
    let overflowWidth = 0;
    let resizeObserver: ResizeObserver | undefined;
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
      resizeObserver?.disconnect();
    });

    const updateOverflow = () => {
      const menu = menuRef.value;
      if (!menu || currentMode.value !== "horizontal" || totalItemCount.value === 0) {
        visibleCount.value = Number.POSITIVE_INFINITY;
        return;
      }
      const children = Array.from(menu.children) as HTMLElement[];
      const total = totalItemCount.value;
      if (itemWidths.length !== total && children.length >= total) {
        itemWidths = children
          .slice(0, total)
          .map((element) => element.getBoundingClientRect().width);
      }
      const overflowElement = children.at(-1);
      if (children.length > total && overflowElement) {
        overflowWidth = overflowElement.getBoundingClientRect().width;
      }
      if (itemWidths.length !== total || overflowWidth === 0) return;

      const style = getComputedStyle(menu);
      const available =
        menu.clientWidth - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight);
      const gap = parseFloat(style.columnGap) || 0;
      const totalWidth = itemWidths.reduce((sum, width) => sum + width, 0) + gap * (total - 1);
      if (totalWidth <= available) {
        visibleCount.value = total;
        return;
      }
      let used = overflowWidth;
      let count = 0;
      for (const width of itemWidths) {
        const next = used + gap + width;
        if (next > available) break;
        used = next;
        count += 1;
      }
      visibleCount.value = count;
    };

    onMounted(() => {
      nextTick(updateOverflow);
      if (menuRef.value) {
        resizeObserver = new ResizeObserver(updateOverflow);
        resizeObserver.observe(menuRef.value);
      }
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
      keyPath = keyPath.filter((itemKey) => itemKey !== overflowMenuKey);
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
      keyPath = keyPath.filter((itemKey) => itemKey !== overflowMenuKey);
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
      const allChildren =
        items && items.length > 0
          ? items.map((item) => <RecursiveMenu item={item} key={item.key} />)
          : slots.default?.() || [];
      if (totalItemCount.value !== allChildren.length) {
        totalItemCount.value = allChildren.length;
        itemWidths = [];
        visibleCount.value = Number.POSITIVE_INFINITY;
        nextTick(updateOverflow);
      }
      const horizontal = currentMode.value === "horizontal";
      const count = horizontal ? visibleCount.value : allChildren.length;
      const visibleChildren = allChildren.slice(0, count);
      const overflowChildren = allChildren.slice(count);
      const showOverflowMeasure = horizontal && !Number.isFinite(visibleCount.value);
      const cls = [
        `k-${preCls}`,
        `k-${preCls}-${currentMode.value}`,
        {
          "k-scroll": menuState.dropdown,
          [`k-${preCls}-inline-collapsed`]: currentInlineCollapsed.value,
        },
      ];
      return (
        <ul ref={menuRef} class={cls} theme-mode={props.theme}>
          {visibleChildren}
          {(showOverflowMeasure || overflowChildren.length > 0) && (
            <SubMenu key={overflowMenuKey} title="...">
              {overflowChildren}
            </SubMenu>
          )}
        </ul>
      );
    };
  },
});
export default Menu;

export type { MenuOptionsProps, MenuSelectEvent } from "./types";
