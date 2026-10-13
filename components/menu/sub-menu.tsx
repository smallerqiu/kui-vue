import { type DropdownContext, DropdownContextKey } from "../dropdown/dropdown-context";
import {
  type CSSProperties,
  computed,
  defineComponent,
  type ExtractPropTypes,
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  type PropType,
  provide,
  ref,
  Teleport,
  Transition,
  watch,
  type VNodeChild,
} from "vue";
import { getTransitionProp } from "../base/transition";
import { usePopupContainer } from "../config/popup";
import { usePopupHost } from "../config/popup-host";
import type { BooleanType } from "../const/types";
import Icon, { type IconType } from "../icon";
import { setPlacement } from "../utils/placement";
import {
  type MenuContext,
  MenuContextKey,
  type SubMenuContext,
  SubMenuContextKey,
} from "./menu-context";
import {
  firstMenuItemOf,
  handleMenuItemKeydown,
  handleSubMenuListKeydown,
  handleSubMenuTitleKeydown,
} from "./menu-keyboard";

const submenuProps = {
  disabled: Boolean as BooleanType,
  title: [String, Number, Object, Array] as PropType<VNodeChild>,
  icon: Array as PropType<IconType[]>,
};

export type SubMenuProps = ExtractPropTypes<typeof submenuProps>;

const SubMenu = defineComponent({
  name: "SubMenu",
  props: submenuProps,
  setup(props, { slots }) {
    const getPopupContainer = usePopupContainer();
    // 标题节点：popup 模式下用于定位，任何模式下都用于把焦点还给触发项。
    const refSelection = ref<HTMLElement | null>(null);
    const refPopper = ref<HTMLElement | null>(null);
    const top = ref(0);
    const left = ref(0);
    const minWidth = ref("");
    const popupPositioned = ref(false);
    // 键盘展开子菜单时记下"要把焦点送进列表首项"。它不是渲染输入，故意不用 ref：
    // 标志位一变就触发 watcher 会在 openKeys 还没更新前误判成"已关闭"而丢掉请求。
    let pendingFocusFirst = false;
    const listRef = ref<HTMLUListElement | null>(null);
    const instance = getCurrentInstance();
    const key = instance?.vnode.key as string;

    const dropdownContext = inject<DropdownContext | null>(DropdownContextKey, null);
    const menuContext = inject<MenuContext | null>(MenuContextKey, null);
    const subMenuContext = inject<SubMenuContext | null>(SubMenuContextKey, null);
    usePopupHost(() => {
      if (menuContext?.openKeys.includes(key)) {
        menuContext.openKeysChange?.(key, false, subMenuContext?.keyPath || []);
      }
    });

    const currentPlacement = ref("bottom-left");
    const transOrigin = ref("bottom left");
    const popTimer = ref();
    const preCls = menuContext?.dropdown ? "dropdown-menu-submenu" : "menu-submenu";
    // 标题与子菜单互相引用，屏幕阅读器才能报出"展开的菜单项"。
    // key 可能带有非法字符，缺失时退回实例 uid，保证 id 唯一且合法。
    const idSeed = String(key ?? instance?.uid ?? "").replace(/[^a-zA-Z0-9_-]/g, "");
    const triggerId = `k-menu-submenu-title-${idSeed}`;
    const popupId = `k-menu-submenu-popup-${idSeed}`;

    // inline 模式先在原位置渲染；切换为折叠模式后由 Teleport 移动同一棵子树。
    // popup 在首次展开时创建，包括由 openKeys 控制的展开。
    const rendered = ref(menuContext?.mode === "inline" && !menuContext?.popupInlineCollapsed);

    onMounted(() => {
      nextTick(() => {
        const width = refSelection.value?.offsetWidth;
        minWidth.value = `${width}px`;
      });
    });

    onBeforeUnmount(() => {
      clearTimeout(popTimer.value);
    });

    const clearCurrentPopTimer = () => {
      clearTimeout(popTimer.value);
    };
    const hideCurrentPopTimer = () => {
      popTimer.value = setTimeout(() => {
        menuContext?.openKeysChange?.(key as string, false, subMenuContext?.keyPath || []);
      }, 200);
    };

    provide(SubMenuContextKey, {
      keyPath: [...(subMenuContext?.keyPath || []), key],
      clearPopTimer: clearCurrentPopTimer,
      hidePopTimer: hideCurrentPopTimer,
    });

    const showPopper = () => {
      // if (!rendered.value) {
      rendered.value = true;
      nextTick(() => {
        menuContext?.openKeysChange?.(key as string, true, subMenuContext?.keyPath || []);
        updatePosition();
      });
    };
    const updatePosition = () => {
      popupPositioned.value = false;
      // the second level menu show right top
      // or the mode is vertical
      if (
        (menuContext?.mode == "horizontal" && subMenuContext?.keyPath.length) ||
        menuContext?.mode == "vertical" ||
        (menuContext?.mode == "inline" && menuContext?.inlineCollapsed)
      ) {
        currentPlacement.value = "right-top";
      }
      nextTick(() => {
        setPlacement({
          refSelection,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
          offset: 8,
        });
        popupPositioned.value = true;
      });
    };
    const usePopup = () =>
      menuContext?.mode === "horizontal" ||
      menuContext?.mode === "vertical" ||
      menuContext?.popupInlineCollapsed;

    const openedNow = computed(() => !!menuContext?.openKeys.includes(key));
    // 横向菜单栏（role="menubar"）里根级子菜单用 ArrowDown 打开浮层；
    // 纵向/内嵌列表里展开分支的键是 ArrowRight，ArrowDown 留给走同级项。
    const isMenubarItem = computed(
      () => menuContext?.mode === "horizontal" && !(subMenuContext?.keyPath.length ?? 0),
    );

    const focusFirstItem = () => {
      const first = firstMenuItemOf(listRef.value);
      if (!first) return false;
      first.focus({ preventScroll: true });
      return true;
    };

    const activateTitle = () => {
      if (props.disabled) return;
      if (menuContext?.mode === "inline" && !menuContext.inlineCollapsed) {
        menuContext.openKeysChange?.(key, !openedNow.value, subMenuContext?.keyPath || []);
        return;
      }
      if (openedNow.value) {
        menuContext?.openKeysChange?.(key, false, subMenuContext?.keyPath || []);
      } else {
        showPopper();
      }
    };

    const expandAndFocusFirst = () => {
      if (!openedNow.value) {
        pendingFocusFirst = true;
        activateTitle();
        return;
      }
      // 已经展开：列表通常就绪；浮层还没定位完时交给下面的 watcher 重试。
      if ((usePopup() && !popupPositioned.value) || !focusFirstItem()) {
        pendingFocusFirst = true;
      }
    };

    const closeAndRefocusTrigger = () => {
      menuContext?.openKeysChange?.(key as string, false, subMenuContext?.keyPath || []);
      refSelection.value?.focus({ preventScroll: true });
    };

    // 键盘展开时列表可能还没挂载或还没定位完，等这些渲染输入就绪后再把焦点送进首项。
    watch(
      () => [openedNow.value, popupPositioned.value, listRef.value],
      ([opened, positioned, list]) => {
        if (!pendingFocusFirst) return;
        if (!opened) return;
        // 浮层必须完成定位，否则首项还不可见、测量也不可靠。
        if (usePopup() && !positioned) return;
        if (!list) return;
        pendingFocusFirst = false;
        focusFirstItem();
      },
      { flush: "post" },
    );

    watch(
      () => !!menuContext?.openKeys.includes(key) && !!usePopup(),
      (opened) => {
        if (!opened) return;
        rendered.value = true;
        updatePosition();
      },
      { immediate: true },
    );

    const renderChildren = () => {
      const popup = usePopup();
      if (popup && !rendered.value) return [];

      // 恢复记忆状态时先铺好内部层级，根子菜单才能测到完整高度。
      const restoreNested = !popup && menuContext?.inlineTransition && !!subMenuContext;
      const opened = (
        restoreNested ? menuContext?.inlineOpenKeys : menuContext?.openKeys
      )?.includes(key);
      const popperPros = {
        ref: refPopper,
        "theme-mode": menuContext?.theme,
        "k-placement": currentPlacement.value,
        style: {
          minWidth: menuContext?.mode == "horizontal" ? minWidth.value : null,
          top: top.value + "px",
          left: left.value + "px",
          transformOrigin: transOrigin.value,
          visibility: popup && !popupPositioned.value ? "hidden" : undefined,
        } as CSSProperties,
        onMouseenter: () => {
          clearCurrentPopTimer();
          menuContext?.openKeysChange?.(key as string, true, subMenuContext?.keyPath || []);
          subMenuContext?.clearPopTimer?.();
          dropdownContext?.clearPopTimer?.();
        },
        onMouseleave: () => {
          hideCurrentPopTimer();
          subMenuContext?.hidePopTimer?.();
          dropdownContext?.clearPopTimer?.();
        },
      };

      // 展开/收起走 Menu 自己的 `k-menu-slide`，不能借 Collapse 的 `k-collapse-slide`：那个类带着
      // `animation: k-motion-scale-y-in`（scaleY 0→1，见 `components/collapse/styles/index.less`），
      // 会叠在同一个元素的高度过渡上——盒子按 height 先撑开，内容还被压成 0，看上去就是
      // "外层先展开、里面的再伸缩下来"。Vue 的时长由这条 CSS 规则自己决定，
      // `@menu-submenu-duration` 必须和 react `menu/sub-menu.tsx` 里的 `timeout` 一致。
      const transitionProps = popup
        ? { name: `k-${preCls}-popup` }
        : restoreNested
          ? { css: false }
          : getTransitionProp("k-menu-slide");
      const containerProps = popup
        ? { class: `k-${preCls}-popup`, ...popperPros }
        : { class: `k-${preCls}-sub` };

      return (
        <Teleport to={getPopupContainer()} disabled={!popup}>
          {/* 关闭即卸载，向 react 的 <Transition unmountOnExit>（默认 true）对齐：
              之前用 v-show，浮层面板一旦展开过就永远留在 body 里（每个 hover 过的子菜单
              一份隐藏 DOM），纵向/折叠菜单项多时是白白的常驻开销；inline 的子面板同理，
              收起后还占着整棵子树。退场动画（@menu-submenu-duration）跑完再摘节点。 */}
          <Transition {...transitionProps}>
            {opened ? (
              <div {...containerProps}>
                <div class={popup ? `k-${preCls}-sub` : undefined}>
                  <ul
                    id={popupId}
                    ref={listRef}
                    aria-labelledby={triggerId}
                    class={`k-menu k-menu-${popup ? "vertical" : menuContext?.mode}`}
                    role="menu"
                    // 子菜单列表永远是纵向堆叠的：horizontal 下它必然以浮层形式出现，
                    // 原来按 mode 推导会给出一个不可能命中的 "horizontal" 分支。
                    aria-orientation="vertical"
                    onKeydown={(event: KeyboardEvent) => {
                      // Escape 只退一层：最内层的列表处理并阻止冒泡，焦点回到这一层的标题。
                      handleSubMenuListKeydown(event, closeAndRefocusTrigger);
                    }}
                  >
                    {slots.default?.()}
                  </ul>
                </div>
              </div>
            ) : null}
          </Transition>
        </Teleport>
      );
    };

    watch(
      () => menuContext?.popupInlineCollapsed,
      (popup) => {
        if (popup) popupPositioned.value = false;
      },
    );

    return () => {
      const selected = menuContext?.selectedKeys.includes(key) && !menuContext?.dropdown;
      const opened = menuContext?.openKeys.includes(key);
      const titleProps: Record<string, unknown> & { style: CSSProperties } = {
        id: triggerId,
        class: `k-${preCls}-title`,
        style: {} as CSSProperties,
        role: "menuitem",
        tabindex: props.disabled ? -1 : 0,
        "aria-disabled": props.disabled || undefined,
        "aria-haspopup": "menu",
        "aria-expanded": opened,
        // 关闭时不要留下指向不存在节点的 aria-controls。
        "aria-controls": opened ? popupId : undefined,
        // 标题节点在每种模式下都要能被引用到：popup 用它定位，Escape 关闭时用它接回焦点。
        ref: refSelection,
      };
      titleProps.onKeydown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && opened) {
          event.preventDefault();
          // 焦点在标题上时也要只关掉这一层。
          event.stopPropagation();
          menuContext?.openKeysChange?.(key, false, subMenuContext?.keyPath || []);
          return;
        }
        if (
          handleSubMenuTitleKeydown(
            event,
            { isMenubarItem: isMenubarItem.value, opened: !!opened },
            { expandAndFocusFirst },
          )
        ) {
          return;
        }
        handleMenuItemKeydown(event, activateTitle);
      };
      if (menuContext?.mode == "inline" && !menuContext?.inlineCollapsed) {
        titleProps.onClick = () => {
          if (props.disabled) return;
          menuContext?.openKeysChange?.(key as string, !opened, subMenuContext?.keyPath || []);
        };
      } else if (
        menuContext?.mode == "horizontal" ||
        menuContext?.mode == "vertical" ||
        menuContext?.inlineCollapsed
      ) {
        // popper
        titleProps.onMouseenter = () => {
          if (props.disabled) return;
          clearCurrentPopTimer();
          showPopper();
        };
        titleProps.onMouseleave = () => {
          if (props.disabled) return;
          popTimer.value = setTimeout(() => {
            menuContext?.openKeysChange?.(key as string, false, subMenuContext?.keyPath || []);
          }, 200);
        };
      }
      if (
        subMenuContext?.keyPath.length &&
        menuContext?.mode === "inline" &&
        !menuContext?.inlineCollapsed
      ) {
        titleProps.style.paddingLeft = `${(subMenuContext?.keyPath || []).length * 16 + 16}px`;
      }
      const title = props.title ?? slots.title?.();

      const titleNode = (
        <div {...titleProps}>
          {props.icon ? <Icon type={props.icon} class="k-menu-item-icon" /> : null}
          {<span class={`k-${preCls}-title-content`}>{title}</span>}
          {menuContext?.mode == "horizontal" && !subMenuContext?.keyPath.length ? null : (
            <i class={`k-${preCls}-arrow`} />
          )}
        </div>
      );

      const classes = [
        `k-${preCls}`,
        {
          [`k-${preCls}-active`]: opened || selected,
          [`k-${preCls}-selected`]: selected,
          [`k-${preCls}-opened`]: opened,
          [`k-${preCls}-disabled`]: props.disabled,
        },
      ];
      const children = renderChildren();
      return (
        // 包装用的 li 没有自己的语义，去掉隐式 listitem，让标题 div[menuitem] 成为菜单项。
        <li class={classes} role="none">
          {titleNode}
          {children}
        </li>
      );
    };
  },
});
export default SubMenu;
