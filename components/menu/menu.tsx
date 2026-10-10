import { useInitialValue } from "../utils/model-value";
import {
  computed,
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
import { getChildren } from "../utils/vnode";
import SubMenu from "./sub-menu";
import type { MenuOptionsProps, MenuSelectEvent } from "./types";
const menuProps = {
  theme: String as PropType<"light" | "dark">,
  mode: { type: String as PropType<DirectionType>, default: "vertical" },
  modelValue: { type: Array as PropType<string[]>, default: undefined },
  value: { type: Array as PropType<string[]>, default: () => [] },
  accordion: Boolean as BooleanType,
  items: Array as PropType<MenuOptionsProps[]>,
  inlineCollapsed: Boolean as BooleanType,
  collapsedTooltip: { type: Boolean as BooleanType, default: true },
  openKeys: { type: Array as PropType<string[]>, default: () => [] },
};
const overflowMenuKey = "__kui_menu_overflow__";

export type MenuProps = ExtractPropTypes<typeof menuProps>;

const Menu = defineComponent({
  name: "Menu",
  inheritAttrs: false,
  props: menuProps,
  emits: {
    "update:modelValue": (keys: string[]) => Array.isArray(keys),
    "update:openKeys": (keys: string[]) => Array.isArray(keys),
    select: (event: MenuSelectEvent) =>
      typeof event?.key === "string" && Array.isArray(event.keyPath),
    openChange: (keys: string[]) => Array.isArray(keys),
  },
  setup(props, { emit, slots, attrs }) {
    const initialModel = useInitialValue(props);
    const defaultSelectedKeys = ref([...(initialModel.value || [])]);
    const currentMode = ref(props.mode);
    // `inlineCollapsed` 只描述 inline 菜单的收起外观；其它模式下弹出行为本就由 mode 决定，
    // 折叠记忆与收起动画也必须跟着 mode 走，否则 vertical/horizontal 菜单会被打上折叠类。
    const collapsedInline = computed(
      () => currentMode.value === "inline" && !!props.inlineCollapsed,
    );
    const defaultOpenKeys = ref(collapsedInline.value ? [] : [...(props.openKeys || [])]);
    const popupInlineCollapsed = ref(collapsedInline.value);
    const inlineTransition = ref(false);
    const tempOpenKeys = ref([...(props.openKeys || [])]);
    const collapseTimer = ref<ReturnType<typeof setTimeout>>();
    const collapseFrame = ref(0);
    const menuRef = ref<HTMLElement | null>(null);
    const visibleCount = ref(Number.POSITIVE_INFINITY);
    const totalItemCount = ref(0);
    let itemWidths: number[] = [];
    let overflowWidth = 0;
    let resizeObserver: ResizeObserver | undefined;
    const dropdownContext = inject<DropdownContext | null>(DropdownContextKey, null);

    watch(
      () => initialModel.value,
      (value) => {
        defaultSelectedKeys.value = [...value];
      },
    );

    watch(
      () => props.mode,
      (value) => {
        currentMode.value = value;
        // 切换 mode 不改写展开状态：`openKeys` 始终表示"当前展开的 SubMenu"，
        // 既不会因为切到 vertical 被清空，也不会因为切回 inline/horizontal 被记忆值覆盖。
        // 水平模式需要重新测量溢出，其它模式恢复完整列表。
        itemWidths = [];
        visibleCount.value = Number.POSITIVE_INFINITY;
        observeOverflow();
        nextTick(updateOverflow);
      },
    );

    watch(
      () => props.openKeys,
      (value) => {
        const keys = [...(value ?? [])];
        if (!collapsedInline.value) {
          defaultOpenKeys.value = keys;
          return;
        }
        // 折叠期间的弹出展开由组件自己上报，父组件把同一个值回写过来时它只是瞬态的
        // hover 路径，不是新的展开意图，不能覆盖收起时记下的 inline 记忆。
        const remembered = defaultOpenKeys.value;
        const popupEcho =
          keys.length === remembered.length &&
          keys.every((itemKey, index) => itemKey === remembered[index]);
        if (!popupEcho) tempOpenKeys.value = keys;
      },
    );

    watch(
      () => props.inlineCollapsed,
      (collapsed) => {
        // 非 inline 模式下这个 prop 没有意义，不要启动收起编排、动画计时器或记忆改写。
        if (currentMode.value !== "inline") return;
        clearTimeout(collapseTimer.value);
        cancelAnimationFrame(collapseFrame.value);
        if (collapsed) {
          if (!inlineTransition.value) tempOpenKeys.value = [...defaultOpenKeys.value];
          inlineTransition.value = true;
          // 先提交折叠外观，下一帧再收起子菜单，避免宽度与高度测量挤在同一帧。
          collapseFrame.value = requestAnimationFrame(collapseOpenKeys);
          collapseTimer.value = setTimeout(() => {
            popupInlineCollapsed.value = true;
            inlineTransition.value = false;
          }, 220);
        } else {
          inlineTransition.value = true;
          // 先把关闭状态的子树移回 inline 位置，下一帧再恢复展开项。
          // 避免 Teleport 搬移与多级高度动画在同一帧发生。
          popupInlineCollapsed.value = false;
          collapseFrame.value = requestAnimationFrame(restoreOpenKeys);
          collapseTimer.value = setTimeout(() => {
            inlineTransition.value = false;
          }, 300);
        }
      },
    );

    onBeforeUnmount(() => {
      cancelAnimationFrame(collapseFrame.value);
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

    // 与 react 版一致：只有 horizontal 菜单需要跟随容器宽度重新测量溢出，
    // 其它模式或空菜单不创建 ResizeObserver，避免无谓回调。
    const observeOverflow = () => {
      resizeObserver?.disconnect();
      resizeObserver = undefined;
      const menu = menuRef.value;
      if (!menu || currentMode.value !== "horizontal" || totalItemCount.value === 0) return;
      resizeObserver = new ResizeObserver(updateOverflow);
      resizeObserver.observe(menu);
    };

    onMounted(() => {
      nextTick(updateOverflow);
      observeOverflow();
    });

    const collapseOpenKeys = () => {
      if (defaultOpenKeys.value.length > 0) {
        tempOpenKeys.value = [...defaultOpenKeys.value];
      }
      defaultOpenKeys.value = [];
    };
    const restoreOpenKeys = () => {
      if (tempOpenKeys.value.length === 0) return;
      defaultOpenKeys.value = [...tempOpenKeys.value];
      // 展开回来是真实的展开变化，和 react 版一样上报，父组件的 openKeys 才不会与界面脱节。
      emit("update:openKeys", defaultOpenKeys.value);
      emit("openChange", defaultOpenKeys.value);
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

      // 弹出型菜单里选中会关掉所有 popup，但只有真的关掉过展开项才上报，
      // 否则监听方会收到与本次点击无关的空事件。折叠记忆不由选中改写。
      if (
        (currentMode.value !== "inline" || collapsedInline.value) &&
        defaultOpenKeys.value.length > 0
      ) {
        defaultOpenKeys.value = [];
        emit("update:openKeys", []);
        emit("openChange", []);
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
      theme: computed(() => props.theme),
      openKeys: defaultOpenKeys,
      selectedKeys: defaultSelectedKeys,
      mode: currentMode,
      // 与 react 版一致：上下文中暴露原始 prop，子项自行结合 mode 判断是否处于折叠呈现。
      inlineCollapsed: computed(() => !!props.inlineCollapsed),
      collapsedTooltip: computed(() => props.collapsedTooltip),
      popupInlineCollapsed: computed(() => collapsedInline.value && popupInlineCollapsed.value),
      inlineTransition,
      inlineOpenKeys: tempOpenKeys,
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
          : getChildren(slots.default?.());
      if (totalItemCount.value !== allChildren.length) {
        totalItemCount.value = allChildren.length;
        itemWidths = [];
        visibleCount.value = Number.POSITIVE_INFINITY;
        // 条目数变化会影响是否需要观察溢出（例如空 → 有内容的 horizontal 菜单）。
        observeOverflow();
        nextTick(updateOverflow);
      }
      const horizontal = currentMode.value === "horizontal";
      const count = horizontal ? visibleCount.value : allChildren.length;
      const visibleChildren = allChildren.slice(0, count);
      const overflowChildren = allChildren.slice(count);
      // 空菜单没有任何可溢出的条目，不能为它渲染测量用的 ... 触发器。
      const showOverflowMeasure =
        horizontal && totalItemCount.value > 0 && !Number.isFinite(visibleCount.value);
      const cls = [
        `k-${preCls}`,
        `k-${preCls}-${currentMode.value}`,
        {
          "k-scroll": menuState.dropdown,
          [`k-${preCls}-inline-collapsed`]: collapsedInline.value,
        },
      ];
      return (
        <ul
          {...attrs}
          ref={menuRef}
          class={[cls, attrs.class]}
          theme-mode={props.theme}
          // 横向菜单栏用 left/right 在同级项之间移动（见 menu-keyboard 的 menubar 语义），
          // 纵向/内嵌菜单才符合 role="menu" 的上下方向约定。
          role={horizontal ? "menubar" : "menu"}
          aria-orientation={horizontal ? "horizontal" : "vertical"}
        >
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
