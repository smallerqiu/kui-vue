import { type DropdownContext, DropdownContextKey } from "../dropdown/dropdown-context";
import {
  type CSSProperties,
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
import type { BooleanType } from "../const/types";
import Icon, { type IconType } from "../icon";
import { setPlacement } from "../utils/placement";
import {
  type MenuContext,
  MenuContextKey,
  type SubMenuContext,
  SubMenuContextKey,
} from "./menu-context";

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
    const refSelection = ref<HTMLElement | null>(null);
    const refPopper = ref<HTMLElement | null>(null);
    const top = ref(0);
    const left = ref(0);
    const minWidth = ref("");
    const popupPositioned = ref(false);
    const instance = getCurrentInstance();
    const key = instance?.vnode.key as string;

    const dropdownContext = inject<DropdownContext | null>(DropdownContextKey, null);
    const menuContext = inject<MenuContext | null>(MenuContextKey, null);
    const subMenuContext = inject<SubMenuContext | null>(SubMenuContextKey, null);

    const currentPlacement = ref("bottom-left");
    const transOrigin = ref("bottom left");
    const popTimer = ref();
    const preCls = menuContext?.dropdown ? "dropdown-menu-submenu" : "menu-submenu";

    // inline 模式先在原位置渲染；切换为折叠模式后由 Teleport 移动同一棵子树。
    // horizontal/vertical 初始仍保持懒渲染，第一次交互时才创建 popup。
    const rendered = ref(menuContext?.mode === "inline" && !menuContext?.popupInlineCollapsed);

    onMounted(() => {
      nextTick(() => {
        const width = refSelection.value?.offsetWidth;
        minWidth.value = `${width}px`;

        if (menuContext?.openKeys.includes(key)) {
          updatePosition();
        }
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
      // console.log(mode, keyPath);
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

    const renderChildren = () => {
      const popup = usePopup();
      if (popup && !rendered.value) return [];

      const opened = menuContext?.openKeys.includes(key);
      let leftValue = left.value;
      if (
        (menuContext?.mode == "horizontal" && subMenuContext?.keyPath.length) ||
        menuContext?.mode == "vertical"
      ) {
        leftValue += 3;
      }
      const popperPros = {
        ref: refPopper,
        "k-placement": currentPlacement.value,
        style: {
          minWidth: menuContext?.mode == "horizontal" ? minWidth.value : null,
          top: top.value + "px",
          left: leftValue + "px",
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

      const transitionProps = popup
        ? { name: `k-${preCls}-popup` }
        : getTransitionProp("k-collapse-slide");
      const containerProps = popup
        ? { class: `k-${preCls}-popup`, ...popperPros }
        : { class: `k-${preCls}-sub` };

      return (
        <Teleport to={getPopupContainer()} disabled={!popup}>
          <Transition {...transitionProps}>
            <div {...containerProps} v-show={opened}>
              <div class={popup ? `k-${preCls}-sub` : undefined}>
                <ul class={`k-menu k-menu-${popup ? "vertical" : menuContext?.mode}`}>
                  {slots.default?.()}
                </ul>
              </div>
            </div>
          </Transition>
        </Teleport>
      );
    };

    watch(
      () => menuContext?.popupInlineCollapsed,
      (popup) => {
        if (popup) popupPositioned.value = false;
      }
    );

    return () => {
      const selected = menuContext?.selectedKeys.includes(key) && !menuContext?.dropdown;
      const opened = menuContext?.openKeys.includes(key);
      const titleProps: Record<string, unknown> & { style: CSSProperties } = {
        class: `k-${preCls}-title`,
        style: {} as CSSProperties,
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
        titleProps.ref = refSelection;
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
        <li class={classes}>
          {titleNode}
          {children}
        </li>
      );
    };
  },
});
export default SubMenu;
