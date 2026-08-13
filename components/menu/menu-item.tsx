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
import { getChildren } from "../utils/vnode";
import {
  MenuContextKey,
  SubMenuContextKey,
  type MenuContext,
  type SubMenuContext,
} from "./menu-context";

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
      };

      // 没有子集的时候才展示
      const titleNode = (
        <span class={`k-${preCls}-title-content`}>{title ?? getChildren(slots.default?.())}</span>
      );
      const iconNode = slots.icon ? (
        <span class={`k-${preCls}-item-icon`}>{slots.icon()}</span>
      ) : icon ? (
        <Icon type={icon} class={`k-${preCls}-item-icon`} />
      ) : null;
      return (
        <li {..._props}>
          {iconNode}
          {titleNode}
        </li>
      );
    };
  },
});
export default MenuItem;
