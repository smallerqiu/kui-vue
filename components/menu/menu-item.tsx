import {
  defineComponent,
  getCurrentInstance,
  inject,
  onMounted,
  ref,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type VNodeChild,
} from "vue";
import type { BooleanType } from "../const/types";
import Icon, { type IconType } from "../icon";
import { getChildren } from "../utils/vnode";

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

    const selectedKeys = inject<Ref<string[]>>("menu-selected-keys", ref([]));
    const mode = inject<Ref<string>>("menu-mode");
    const inlineCollapsed = inject<Ref<boolean>>("menu-inline-collapsed", ref(false));
    const dropdown = inject("dropdown", null);
    const active = ref(false);
    const keyPah = inject("menu-key-path", []);
    const selectedKeysChange =
      inject<(key: string, selected: boolean, keyPath: string[]) => void>("selectedKeysChange");

    onMounted(() => {
      const selected = selectedKeys.value.indexOf(key as string) >= 0;
      if (selected) selectedKeys.value = [...keyPah, key as string];
    });
    return () => {
      const { icon, disabled, title } = props;
      const preCls = dropdown ? "dropdown-menu" : "menu";
      const selected = selectedKeys.value.indexOf(key as string) >= 0 && !dropdown;
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
            mode?.value === "inline" && !inlineCollapsed.value && keyPah.length
              ? `${keyPah.length * 16 + 16}px`
              : undefined,
        },
        onMouseenter: () => {
          if (disabled) return;
          active.value = true;
        },
        onMouseleave: () => {
          if (disabled) return;
          active.value = false;
        },
        onClick: () => {
          if (disabled) return;
          selectedKeysChange?.(key as string, true, keyPah);
        },
      };

      // 没有子集的时候才展示
      let titleNode = (
        <span class={`k-${preCls}-title-content`}>{title ?? getChildren(slots.default?.())}</span>
      );
      let iconNode = slots.icon ? (
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
