import {
  defineComponent,
  ref,
  provide,
  inject,
  getCurrentInstance,
  onMounted,
  nextTick,
  Transition,
} from "vue";
import Icon from "../icon";
import { ChevronDown, ChevronForward } from "kui-icons";
import { getTranstionProp } from "../base/transition";
import transfer from "../directives/transfer";
import { setPlacement } from "../utils/placement";

export default defineComponent({
  name: "SubMenu",
  directives: { transfer },
  props: {
    disabled: Boolean,
    title: String,
    // key: String,
    icon: [String, Array],
  },
  setup(ps, { slots, attrs }) {
    const active = ref(false);
    const preCls = "menu-submenu";
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

    const inline = mode.value == "inline";

    onMounted(() => {
      nextTick(() => {
        const width = refCtx.value?.offsetWidth;
        minWidth.value = `${width}px`;
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

    const updatePosition = () => {
      // console.log(mode, keyPah);
      // the second level menu show right top
      // or the mode is vertical
      if (
        (mode.value == "horizontal" && keyPah.length > 0) ||
        mode.value == "vertical"
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

    const renderPoper = () => {
      const inline = mode.value == "inline";
      const opened = openKeys.value.indexOf(key) >= 0;
      if (inline) {
        const aniprop = getTranstionProp("k-collaplse-slide");
        return (
          <Transition {...aniprop}>
            <div class={`k-${preCls}-sub`} v-show={opened}>
              <ul className={`k-menu k-menu-${mode.value}`}>
                {slots.default?.()}
              </ul>
            </div>
          </Transition>
        );
      } else {
        // todo: mode 从inline 切换 vertical 时 会挂.
        // pop
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
            // console.log(clearPopTimer)
            openKeysChange?.(key, true, keyPah);
            clearPopTimer?.();
          },
          onMouseleave: () => {
            hideCurrentPopTimer();
            hidePopTimer?.();
          },
        };
        return (
          <Transition name="k-menu-submenu-popup">
            <div
              className="k-menu-submenu-popup"
              v-show={opened}
              v-transfer={true}
              {...poperPros}>
              <div class={`k-${preCls}-sub`}>
                <ul className={`k-menu k-menu-vertical`}>
                  {slots.default?.()}
                </ul>
              </div>
            </div>
          </Transition>
        );
      }
    };

    return () => {
      const selected = selectedKeys.value.indexOf(key) >= 0;
      const opened = openKeys.value.indexOf(key) >= 0;
      let titleProps = {
        class: `k-${preCls}-title`,
        style: {
          // paddingLeft: `${keyPah.length * 32}px`,
        },
      };
      if (mode.value == "inline") {
        titleProps.onClick = () => {
          openKeysChange?.(key, !opened, keyPah);
        };
      }
      if (mode.value == "horizontal" || mode.value == "vertical") {
        // dropdown
        titleProps.ref = refCtx;
        titleProps.onMouseenter = () => {
          active.value = true;
          clearCurrentPopTimer();
          // console.log(key, opened, keyPah);
          openKeysChange?.(key, true, keyPah);
          updatePosition();
        };
        titleProps.onMouseleave = () => {
          popTimer.value = setTimeout(() => {
            active.value = false;
            openKeysChange?.(key, false, keyPah);
          }, 200);
          // openKeysChange?.(key, false, keyPah);
        };
      }
      if (keyPah.length) {
        titleProps.style.paddingLeft = inline
          ? `${keyPah.length * 16 + 16}px`
          : null;
      }
      let title = ps.title || slots.title?.();
      // todo: horizontal 隐藏箭头
      const titleNode = (
        <div {...titleProps}>
          {ps.icon ? <Icon type={ps.icon} class="k-menu-item-icon" /> : null}
          {<span class="k-menu-title-content">{title}</span>}
          <Icon type={ChevronDown} class={`k-${preCls}-arrow`} /> 
        </div>
      );

      const classes = [
        `k-${preCls}`,
        {
          [`k-${preCls}-active`]: active.value,
          [`k-${preCls}-selected`]: selected,
          [`k-${preCls}-opened`]: opened,
          [`k-${preCls}-disabled`]: ps.disabled,
        },
      ];
      // console.log(minWidth.value);
      const poper = renderPoper();
      return (
        <li class={classes}>
          {titleNode}
          {poper}
        </li>
      );
    };
  },
});
