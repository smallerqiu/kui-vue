import {
  defineComponent,
  ref,
  provide,
  inject,
  getCurrentInstance,
  onMounted,
  cloneVNode,
  nextTick,
  Transition,
} from "vue";
import Icon from "../icon";
import { getTranstionProp } from "../base/transition";
import transfer from "../directives/transfer";
import { setPlacement } from "../utils/placement";
import { getChildren } from "../utils/vnode";

export default defineComponent({
  name: "SubMenu",
  directives: { transfer },
  props: {
    disabled: Boolean,
    title: String,
    ispopup: Boolean,
    // key: String,
    icon: [String, Array],
  },
  setup(ps, { slots, attrs }) {
    const refCtx = ref(null);
    const refPopper = ref(null);
    const top = ref(0);
    const left = ref(0);
    const minWidth = ref("");
    const instance = getCurrentInstance();
    const key = instance.vnode.key;
    const mode = inject("menu-mode", null);
    const selectedKeys = inject("menu-selected-keys", ref([]));
    const openKeys = inject("menu-open-keys", ref([]));
    const openKeysChange = inject("openKeysChange", null);
    const clearPopTimer = inject("clearPopTimer", null);
    const hidePopTimer = inject("hidePopTimer", null);
    const currentPlacement = ref("bottom-left");
    const transOrigin = ref("bottom left");
    const popTimer = ref(null);
    const inlineCollapsed = inject("menu-inline-collapsed", ref(false));
    const dropdown = inject("dropdown", null);
    const preCls = dropdown ? "dropdown-menu-submenu" : "menu-submenu";

    const inline = mode.value == "inline";

    const rendered = ref(false);

    onMounted(() => {
      nextTick(() => {
        const width = refCtx.value?.offsetWidth;
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
        openKeysChange?.(key, false, keyPah);
      }, 200);
    };

    const keyPah = inject("menu-key-path", []);
    provide("menu-key-path", [...keyPah, key]);

    provide("clearPopTimer", clearCurrentPopTimer);
    provide("hidePopTimer", hideCurrentPopTimer);

    const showPoper = () => {
      // if (!rendered.value) {
      rendered.value = true;
      nextTick(() => {
        openKeysChange?.(key, true, keyPah);
        updatePosition();
      });
      // } else {
      //   openKeysChange?.(key, true, keyPah);
      //   updatePosition();
      // }
    };
    const updatePosition = () => {
      // console.log(mode, keyPah);
      // the second level menu show right top
      // or the mode is vertical
      if (
        (mode.value == "horizontal" && keyPah.length > 0) ||
        mode.value == "vertical" ||
        (mode.value == "inline" && inlineCollapsed.value)
      ) {
        currentPlacement.value = "right-top";
      }
      nextTick(() => {
        setPlacement(
          refCtx,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
          8
        );
      });
    };
    const renderPopper = () => {
      // pop
      const opened = openKeys.value.indexOf(key) >= 0;
      let leftValue = left.value;
      if (
        (mode.value == "horizontal" && keyPah.length) ||
        mode.value == "vertical"
      ) {
        leftValue += 3;
      }
      const poperPros = {
        ref: refPopper,
        "k-placement": currentPlacement.value,
        style: {
          minWidth: mode.value == "horizontal" ? minWidth.value : null,
          top: top.value + "px",
          left: leftValue + "px",
          transformOrigin: transOrigin.value,
        },
        onMouseenter: () => {
          clearCurrentPopTimer();
          openKeysChange?.(key, true, keyPah);
          clearPopTimer?.();
        },
        onMouseleave: () => {
          hideCurrentPopTimer();
          hidePopTimer?.();
        },
      };
      const childs = getChildren(slots.default?.());
      const menuItesms = childs.map((child) => {
        // if (child.type.name == "MenuItem") {
        return cloneVNode(child, { ispopup: true });
        // }
      });
      return rendered.value ? (
        <Transition name={`k-${preCls}-popup`}>
          <div
            className={`k-${preCls}-popup`}
            v-show={opened}
            v-transfer={true}
            {...poperPros}>
            <div class={`k-${preCls}-sub`}>
              <ul className={`k-menu k-menu-vertical`}>{menuItesms}</ul>
            </div>
          </div>
        </Transition>
      ) : null;
    };
    const renderSubmenu = () => {
      const inline = mode.value != "horizontal";
      const opened = openKeys.value.indexOf(key) >= 0;
      // todo: mode 从inline 切换 vertical 时 会卡一下, 为查明原因. 后面在细看

      if (inline) {
        const aniprop = getTranstionProp("k-collaplse-slide");
        const node = [
          <Transition {...aniprop}>
            <div
              class={`k-${preCls}-sub`}
              v-show={
                opened && !inlineCollapsed.value && mode.value != "vertical"
              }>
              <ul className={`k-menu k-menu-${mode.value}`}>
                {slots.default?.()}
              </ul>
            </div>
          </Transition>,
        ];
        if (inlineCollapsed.value || mode.value == "vertical") {
          node.push(renderPopper());
        }
        return node;
      } else {
        return renderPopper();
      }
    };

    return () => {
      const selected = selectedKeys.value.indexOf(key) >= 0 && !dropdown;
      const opened = openKeys.value.indexOf(key) >= 0;
      let titleProps = {
        class: `k-${preCls}-title`,
        style: {},
      };
      if (mode.value == "inline" && !inlineCollapsed.value) {
        titleProps.onClick = () => {
          if (ps.disabled) return;
          openKeysChange?.(key, !opened, keyPah);
        };
      } else if (
        mode.value == "horizontal" ||
        mode.value == "vertical" ||
        inlineCollapsed.value
      ) {
        // popper
        titleProps.ref = refCtx;
        titleProps.onMouseenter = () => {
          if (ps.disabled) return;
          clearCurrentPopTimer();
          showPoper();
        };
        titleProps.onMouseleave = () => {
          if (ps.disabled) return;
          popTimer.value = setTimeout(() => {
            openKeysChange?.(key, false, keyPah);
          }, 200);
        };
      }
      if (keyPah.length && inline && !ps.ispopup) {
        titleProps.style.paddingLeft = `${keyPah.length * 16 + 16}px`;
      }
      let title = ps.title || slots.title?.();

      const titleNode = (
        <div {...titleProps}>
          {ps.icon ? <Icon type={ps.icon} class="k-menu-item-icon" /> : null}
          {<span class={`k-${preCls}-title-content`}>{title}</span>}
          {mode.value == "horizontal" && !keyPah.length ? null : (
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
          [`k-${preCls}-disabled`]: ps.disabled,
        },
      ];
      const poper = renderSubmenu();
      return (
        <li class={classes}>
          {titleNode}
          {poper}
        </li>
      );
    };
  },
});
