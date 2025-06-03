import Icon from "../icon";
import Tooltip from "../tooltip";
import { getChildren } from "../utils/vnode";
import {
  defineComponent,
  ref,
  reactive,
  getCurrentInstance,
  watch,
  inject,
  nextTick,
  onMounted,
} from "vue";

export default defineComponent({
  name: "MenuItem",
  props: {
    icon: [String, Array],
    title: String,
    // key: String,
    label: String,
    disabled: Boolean,
    ispopup: Boolean,
  },

  setup(ps, { slots }) {
    let { icon, disabled, title } = ps;
    const instance = getCurrentInstance();

    const selectedKeys = inject("menu-selected-keys", ref([]));
    const mode = inject("menu-mode", null);
    const dropdown = inject("dropdown", null);
    const active = ref(false);
    const key = instance.vnode.key;
    const keyPah = inject("menu-key-path", []);
    const selectedKeysChange = inject("selectedKeysChange", null);
    // const inlineCollapsed = inject("menu-inline-collapsed", ref(false));

    onMounted(() => {
      const selected = selectedKeys.value.indexOf(key) >= 0;
      selected && selectedKeysChange?.(key, selected, keyPah);
    });
    return () => {
      const preCls = dropdown ? "dropdown-menu" : "menu";
      const selected = selectedKeys.value.indexOf(key) >= 0 && !dropdown;
      const props = {
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
            (mode.value == "inline" || mode.value == "vertical") &&
            keyPah.length &&
            !ps.ispopup
              ? `${keyPah.length * 16 + 16}px`
              : null,
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
        <span class={`k-${preCls}-title-content`}>
          {title || getChildren(slots.default?.())}
        </span>
      );
      let iconNode = slots.icon ? (
        <span class={`k-${preCls}-item-icon`}>{slots.icon()}</span>
      ) : icon ? (
        <Icon type={icon} class={`k-${preCls}-item-icon`} />
      ) : null;
      return (
        <li {...props}>
          {iconNode}
          {titleNode}
        </li>
      );
    };
  },
});
