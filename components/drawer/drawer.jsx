import { Button } from "../button";
import Icon from "../icon";
import transfer from "../directives/transfer";
import { Close } from "kui-icons";
import { defineComponent, inject, nextTick, ref, /*Transition,*/ watch, onMounted, onBeforeUnmount } from "vue";
import zhCN from "../locale/lang/zh-CN";
import { withInstall } from '../utils/vue';

const Drawer = defineComponent({
  name: "Drawer",
  directives: { transfer },
  props: {
    // show: Boolean, //for 3
    value: Boolean,
    title: { default: "Title", type: String },
    width: { default: 520, type: [Number, String] },
    height: { default: 256, type: [Number, String] },
    okText: String,
    cancelText: String,
    placement: { type: String, default: "right" },
    closable: { type: Boolean, default: true },
    footer: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: true },
    target: { type: Function, default: () => document.body },
    mask: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    escKey: { type: Boolean, default: true },
  },
  setup(ps, { slots, emit }) {
    const locale = inject("locale", null) || zhCN;
    const rendered = ref(ps.value); // for 2
    // const rendered = ref(ps.show); // for 3
    const visible = ref(ps.value);
    // const visible = ref(ps.show); // for 3
    const opened = ref(ps.show);
    watch(
      // () => ps.show, // for 3
      () => ps.value,
      (nv, ov) => {
        if (nv) {
          toggle(nv);
        }
      }
    );

    onMounted(() => {
      if (!window.__kui_body_style) {
        window.__kui_body_style = { overflowY: document.body.style.overflowY, paddingRight: document.body.style.paddingRight };
      }
      ps.escKey && document.addEventListener("keydown", escToClose);
    });
    onBeforeUnmount(() => {
      ps.escKey && document.removeEventListener("keydown", escToClose);
    });

    const lockScroll = (lock) => {
      if (lock) {
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        const hasScrollbar = scrollbarWidth > 0;
        if (hasScrollbar) {
          document.body.style.overflowY = "hidden";
          document.body.style.paddingRight = `${scrollbarWidth}px`; // 防止布局跳动
        }
      } else {
        let { overflowY, paddingRight } = window.__kui_body_style;
        document.body.style.overflowY = overflowY || "";
        document.body.style.paddingRight = paddingRight || "";
      }
    };
    const toggle = (v) => {
      if (v && !rendered.value) {
        rendered.value = true;
        nextTick(() => {
          visible.value = true;
          openHandle();
        });
      } else {
        visible.value = v;
        openHandle();
      }
    };
    const escToClose = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    const maskToClose = () => {
      if (ps.maskClosable) {
        close();
      }
    };

    const cancel = () => {
      emit("cancel");
      visible.value = false;
      openHandle();
    };

    const openHandle = () => {
      if (visible.value) {
        opened.value = true;
      } else {
        setTimeout(() => {
          opened.value = false;
        }, 300);
      }
      lockScroll(visible.value);
      emit("update:show", visible.value);
    };

    const close = () => {
      visible.value = false;
      emit("close");
      openHandle();
    };

    const ok = () => {
      emit("ok");
    };

    return () => {
      const { title, cancelText, okText, placement, width, height, closable, loading } = ps;
      const hasFooter = ps.footer || slots.footer;
      const cancelBtn = <Button onClick={cancel}>{cancelText || locale?.k.drawer.cancel}</Button>;
      const okBtn = (
        <Button type="primary" onClick={ok} loading={loading}>
          {okText || locale?.k.drawer.ok}
        </Button>
      );
      const footNode = hasFooter ? (
        <div class="k-drawer-footer">
          {slots.footer ? slots.footer() : [cancelBtn, okBtn]}
        </div>
      ) : null;

      const closeNode = closable ? (
        <span class="k-drawer-close" onClick={close}>
          <Icon type={Close} />
        </span>
      ) : null;

      const transitionName = `k-drawer-${placement}`;
      const target = ps.target();
      const isBody = target == document.body;
      const classes = ["k-drawer", `k-drawer-${placement}`, { "k-drawer-opened": opened.value }, { "k-drawer-has-footer": hasFooter }, { "k-drawer-nobody": !isBody }, { "k-drawer-nomask": !ps.mask }];
      let styles = {};
      if (placement == "left" || placement == "right") styles.width = /%/.test(width) ? width : width + "px";
      if (placement == "top" || placement == "bottom") styles.height = /%/.test(height) ? height : height + "px";

      let maskNode = null;
      if (ps.mask) {
        maskNode = (
          <transition name="k-drawer-fade">
            <div class={["k-drawer-mask", { "k-drawer-mask-nobody": !isBody }]} v-show={visible.value} onClick={maskToClose}></div>
          </transition>
        );
      }
      return rendered.value ? (
        <div class={classes} v-transfer={target}>
          {maskNode}
          <transition name={transitionName}>
            <div class="k-drawer-box" v-show={visible.value} style={styles}>
              <div class="k-drawer-content">
                <div class="k-drawer-header">
                  {closeNode}
                  <div class="k-drawer-header-inner">{title}</div>
                </div>
                <div class="k-drawer-body">{slots.default?.()}</div>
                {footNode}
              </div>
            </div>
          </transition>
        </div>
      ) : null;
    };
  },
});
export default withInstall(Drawer);
