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
    const currentPlacement = ref("bottom-left");
    const transOrigin = ref("bottom left");
    const mouseenterTimer = ref(null);

    const inline = mode.value == "inline";

    onMounted(() => {
      nextTick(() => {
        const width = refCtx.value?.offsetWidth;
        minWidth.value = `${width}px`;
      });
    });

    const keyPah = inject("menu-key-path", []);
    provide("menu-key-path", [...keyPah, key]);

    const updatePosition = () => {
      console.log(mode, keyPah);
      if (mode.value == "horizontal" && keyPah.length > 0) {
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
          3
        );
      });
    };

    const renderPoper = () => {
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
        const aniprop = getTranstionProp("k-menu-submenu-popup");
        const poperPros = {
          ref: refPopper,
          "k-placement": currentPlacement.value,
          style: {
            minWidth: minWidth.value,
            top: top.value + "px",
            left: left.value + "px",
            transformOrigin: transOrigin.value,
          },
          onMouseenter: () => {
            clearTimeout(mouseenterTimer.value);
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
      const showInline = mode == "inline";
      let titleProps = {
        class: `k-${preCls}-title`,
        style: {
          // paddingLeft: `${keyPah.length * 32}px`,
        },
        onClick: () => {
          openKeysChange?.(key, !opened, keyPah);
        },
      };
      if (mode.value == "horizontal") {
        titleProps.ref = refCtx;
        titleProps.onMouseenter = () => {
          active.value = true;
          clearTimeout(mouseenterTimer.value);
          // console.log(key, opened, keyPah);
          openKeysChange?.(key, true, keyPah);
          updatePosition();
        };
        titleProps.onMouseleave = () => {
          mouseenterTimer.value = setTimeout(() => {
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
