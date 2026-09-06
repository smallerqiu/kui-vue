import {
  defineComponent,
  getCurrentInstance,
  inject,
  ref,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import type { BooleanType } from "../const/types";
import Icon, { type IconType } from "../icon";
import Tooltip from "../tooltip";
import { getChildren } from "../utils/vnode";
import {
  MenuContextKey,
  SubMenuContextKey,
  type MenuContext,
  type SubMenuContext,
} from "./menu-context";
import { handleMenuItemKeydown } from "./menu-keyboard";

const menuItemProps = {
  icon: Array as PropType<IconType[]>,
  title: [String, Number, Object, Array] as PropType<VNodeChild>,
  disabled: Boolean as BooleanType,
};

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;

const MenuItem = defineComponent({
  name: "MenuItem",
  props: menuItemProps,

  setup(props, { slots }) {
    const instance = getCurrentInstance();
    const key = instance?.vnode.key;
    const menuContext = inject<MenuContext | null>(MenuContextKey, null);
    const subMenuContext = inject<SubMenuContext | null>(SubMenuContextKey, null);
    const active = ref(false);
    // onMounted(() => {
    //   // const selected = selectedKeys.indexOf(key as string) >= 0;
    //   // if (selected) selectedKeys = [...keyPah, key as string];
    // });
    return () => {
      const { icon, disabled, title } = props;
      const preCls = menuContext?.dropdown ? "dropdown-menu" : "menu";
      const selected = menuContext?.selectedKeys.includes(key as string) && !menuContext?.dropdown;
      const _props = {
        class: [
          `k-${preCls}-item`,
          {
            [`k-${preCls}-item-active`]: active.value,
            [`k-${preCls}-item-selected`]: selected,
            [`k-${preCls}-item-disabled`]: disabled,
          },
        ],
        style: {
          paddingLeft:
            menuContext?.mode === "inline" &&
            !menuContext?.inlineCollapsed &&
            subMenuContext?.keyPath.length
              ? `${subMenuContext?.keyPath.length * 16 + 16}px`
              : undefined,
        },
        onMouseenter: () => {
          if (!disabled) active.value = true;
        },
        onMouseleave: () => {
          if (!disabled) active.value = false;
        },
        onClick: () => {
          if (!disabled)
            menuContext?.selectedKeysChange?.(key as string, true, subMenuContext?.keyPath || []);
        },
        onKeydown: (event: KeyboardEvent) =>
          handleMenuItemKeydown(event, () => {
            if (!disabled)
              menuContext?.selectedKeysChange?.(key as string, true, subMenuContext?.keyPath || []);
          }),
        role: "menuitem",
        tabindex: disabled ? -1 : 0,
        "aria-disabled": disabled || undefined,
        "aria-current": selected ? "page" : undefined,
      };

      // 没有子集的时候才展示
      const content = title ?? getChildren(slots.default?.());
      const titleNode = <span class={`k-${preCls}-title-content`}>{content}</span>;
      const iconNode = slots.icon ? (
        <span class={`k-${preCls}-item-icon`}>{slots.icon()}</span>
      ) : icon ? (
        <Icon type={icon} class={`k-${preCls}-item-icon`} />
      ) : null;
      const itemNode = (
        <li {..._props}>
          {iconNode}
          {titleNode}
        </li>
      );
      const showCollapsedTooltip =
        menuContext?.mode === "inline" &&
        menuContext.inlineCollapsed &&
        menuContext.collapsedTooltip &&
        !menuContext.dropdown &&
        !subMenuContext?.keyPath.length;
      return showCollapsedTooltip ? (
        <Tooltip title={content} placement="right">
          {itemNode}
        </Tooltip>
      ) : (
        itemNode
      );
    };
  },
});
export default MenuItem;
