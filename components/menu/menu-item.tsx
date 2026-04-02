import {
  defineComponent,
  inject,
  onMounted,
  ref,
  type ExtractPropTypes,
  type PropType,
  type Ref,
} from "vue";
import Icon, { type IconType } from "../icon";
import { getChildren } from "../utils/vnode";

export const menuItemProps = {
  icon: Array as PropType<IconType[]>,
  title: String,
  key: { type: String, required: true },
  disabled: Boolean,
  isPopup: Boolean,
};

export type MenuItemProps = ExtractPropTypes<typeof menuItemProps>;

const MenuItem = defineComponent({
  name: "MenuItem",
  props: menuItemProps,

  setup(props, { slots }) {
    let { icon, disabled, title, key } = props;
    // const instance = getCurrentInstance();
    // const key = instance?.vnode.key;

    const selectedKeys = inject<Ref<string[]>>("menu-selected-keys", ref([]));
    const mode = inject<Ref<string>>("menu-mode");
    const dropdown = inject("dropdown", null);
    const active = ref(false);
    const keyPah = inject("menu-key-path", []);
    const selectedKeysChange =
      inject<(key: string, selected: boolean, keyPath: string[]) => void>("selectedKeysChange");

    onMounted(() => {
      const selected = selectedKeys.value.indexOf(key) >= 0;
      selected && selectedKeysChange?.(key, selected, keyPah);
    });
    return () => {
      const preCls = dropdown ? "dropdown-menu" : "menu";
      const selected = selectedKeys.value.indexOf(key) >= 0 && !dropdown;
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
            (mode?.value == "inline" || mode?.value == "vertical") &&
            keyPah.length &&
            !props.isPopup
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
          selectedKeysChange?.(key, true, keyPah);
        },
      };

      // 没有子集的时候才展示
      let titleNode = (
        <span class={`k-${preCls}-title-content`}>{title || getChildren(slots.default?.())}</span>
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
