import {
  cloneVNode,
  type CSSProperties,
  defineComponent,
  type ExtractPropTypes,
  getCurrentInstance,
  inject,
  nextTick,
  onMounted,
  type PropType,
  provide,
  type Ref,
  ref,
  Transition,
  type VNodeChild,
} from "vue";
import { getTransitionProp } from "../base/transition";
import type { BooleanType } from "../const/types";
import { transfer } from "../directives/transfer";
import Icon, { type IconType } from "../icon";
import { setPlacement } from "../utils/placement";
import { getChildren } from "../utils/vnode";

export const submenuProps = {
  disabled: Boolean as BooleanType,
  title: String as PropType<string | VNodeChild>,
  isPopup: Boolean as BooleanType,
  icon: Array as PropType<IconType[]>,
};

export type SubMenuProps = ExtractPropTypes<typeof submenuProps>;

const SubMenu = defineComponent({
  name: "SubMenu",
  directives: { transfer },
  props: submenuProps,
  setup(props, { slots }) {
    const refSelection = ref<HTMLElement | null>(null);
    const refPopper = ref<HTMLElement | null>(null);
    const top = ref(0);
    const left = ref(0);
    const minWidth = ref("");
    const instance = getCurrentInstance();
    const key = instance?.vnode.key as string;
    const menuMode = inject<Ref<string | null>>("menu-mode", ref(null));
    const selectedKeys = inject<Ref<string[]>>("menu-selected-keys", ref([]));
    const openKeys = inject<Ref<string[]>>("menu-open-keys", ref([]));
    const openKeysChange =
      inject<(key: string, opened: boolean, path: string[]) => void>("openKeysChange");
    const clearPopTimer = inject<(() => void) | null>("clearPopTimer", null);
    const hidePopTimer = inject<(() => void) | null>("hidePopTimer", null);
    const currentPlacement = ref("bottom-left");
    const transOrigin = ref("bottom left");
    const popTimer = ref();
    const inlineCollapsed = inject("menu-inline-collapsed", ref(false));
    const dropdown = inject("dropdown", null);
    const preCls = dropdown ? "dropdown-menu-submenu" : "menu-submenu";

    const rendered = ref(false);

    onMounted(() => {
      nextTick(() => {
        const width = refSelection.value?.offsetWidth;
        minWidth.value = `${width}px`;

        if (openKeys.value.indexOf(key) >= 0) {
          updatePosition();
        }
      });
    });

    const clearCurrentPopTimer = () => {
      clearTimeout(popTimer.value);
    };
    const hideCurrentPopTimer = () => {
      popTimer.value = setTimeout(() => {
        openKeysChange?.(key as string, false, keyPah);
      }, 200);
    };

    const keyPah = inject("menu-key-path", []);
    provide("menu-key-path", [...keyPah, key]);

    provide("clearPopTimer", clearCurrentPopTimer);
    provide("hidePopTimer", hideCurrentPopTimer);

    const showPopper = () => {
      // if (!rendered.value) {
      rendered.value = true;
      nextTick(() => {
        openKeysChange?.(key as string, true, keyPah);
        updatePosition();
      });
    };
    const updatePosition = () => {
      // console.log(mode, keyPah);
      // the second level menu show right top
      // or the mode is vertical
      if (
        (menuMode.value == "horizontal" && keyPah.length > 0) ||
        menuMode.value == "vertical" ||
        (menuMode.value == "inline" && inlineCollapsed.value)
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
      });
    };
    const renderPopper = () => {
      // pop
      const opened = openKeys.value.indexOf(key) >= 0;
      let leftValue = left.value;
      if ((menuMode?.value == "horizontal" && keyPah.length) || menuMode.value == "vertical") {
        leftValue += 3;
      }
      const popperPros = {
        ref: refPopper,
        "k-placement": currentPlacement.value,
        style: {
          minWidth: menuMode.value == "horizontal" ? minWidth.value : null,
          top: top.value + "px",
          left: leftValue + "px",
          transformOrigin: transOrigin.value,
        } as CSSProperties,
        onMouseenter: () => {
          clearCurrentPopTimer();
          openKeysChange?.(key as string, true, keyPah);
          clearPopTimer?.();
        },
        onMouseleave: () => {
          hideCurrentPopTimer();
          hidePopTimer?.();
        },
      };
      const children = getChildren(slots.default?.());
      const menuItems = children.map((child) => {
        // if (child.type.name == "MenuItem") {
        return cloneVNode(child, { isPopup: true });
        // }
      });
      return rendered.value ? (
        <Transition name={`k-${preCls}-popup`}>
          <div class={`k-${preCls}-popup`} v-show={opened} v-transfer={true} {...popperPros}>
            <div class={`k-${preCls}-sub`}>
              <ul class={`k-menu k-menu-vertical`}>{menuItems}</ul>
            </div>
          </div>
        </Transition>
      ) : null;
    };
    const renderSubmenu = () => {
      const opened = openKeys.value.indexOf(key) >= 0;
      // todo: mode 从inline 切换 vertical 时 会卡一下
      const popper = renderPopper();
      if (menuMode.value != "horizontal") {
        const transitionProps = getTransitionProp("k-collapse-slide");
        const node = [
          <Transition {...transitionProps}>
            <div
              class={`k-${preCls}-sub`}
              v-show={opened && !inlineCollapsed.value && menuMode.value != "vertical"}
            >
              <ul class={`k-menu k-menu-${menuMode.value}`}>{slots.default?.()}</ul>
            </div>
          </Transition>,
        ];
        if (inlineCollapsed.value || menuMode.value == "vertical") {
          popper && node.push(popper);
        }
        return node;
      } else {
        return popper;
      }
    };

    return () => {
      const selected = selectedKeys.value.indexOf(key) >= 0 && !dropdown;
      const opened = openKeys.value.indexOf(key) >= 0;
      let titleProps: Record<string, any> = {
        class: `k-${preCls}-title`,
        style: {} as CSSProperties,
      };
      if (menuMode.value == "inline" && !inlineCollapsed.value) {
        titleProps.onClick = () => {
          if (props.disabled) return;
          openKeysChange?.(key as string, !opened, keyPah);
        };
      } else if (
        menuMode.value == "horizontal" ||
        menuMode.value == "vertical" ||
        inlineCollapsed.value
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
            openKeysChange?.(key as string, false, keyPah);
          }, 200);
        };
      }
      if (keyPah.length && menuMode.value != "horizontal" && !props.isPopup) {
        titleProps.style.paddingLeft = `${keyPah.length * 16 + 16}px`;
      }
      let title = props.title || slots.title?.();

      const titleNode = (
        <div {...titleProps}>
          {props.icon ? <Icon type={props.icon} class="k-menu-item-icon" /> : null}
          {<span class={`k-${preCls}-title-content`}>{title}</span>}
          {menuMode.value == "horizontal" && !keyPah.length ? null : (
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
      const popper = renderSubmenu();
      return (
        <li class={classes}>
          {titleNode}
          {popper}
        </li>
      );
    };
  },
});
export default SubMenu;
