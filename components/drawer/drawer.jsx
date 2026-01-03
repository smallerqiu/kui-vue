import { Button } from "../button";
import Icon from "../icon";
import transfer from "../directives/transfer";
import { Close } from "kui-icons";
import {
  defineComponent,
  inject,
  nextTick,
  ref,
  Transition, watch,
  onMounted,
  onBeforeUnmount,
  computed,
} from "vue";
import zhCN from "../locale/zh-CN";
import { withInstall } from "../utils/vue";

const Drawer = defineComponent({
  name: "Drawer",
  directives: { transfer },
  props: {
    modelValue: Boolean,
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
    const injectedLocale = inject("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });
    const rendered = ref(ps.modelValue); 
    const visible = ref(ps.modelValue); 
    watch( 
      () => ps.modelValue,
      (nv, ov) => {
        if (nv) {
          toggle(nv);
        }
      }
    );

    onMounted(() => {
      if (!window.__kui_body_style) {
        window.__kui_body_style = {
          overflowY: document.body.style.overflowY,
          paddingRight: document.body.style.paddingRight,
        };
      }
      ps.escKey && document.addEventListener("keydown", escToClose);
    });
    onBeforeUnmount(() => {
      ps.escKey && document.removeEventListener("keydown", escToClose);
    });

    const lockScroll = (lock) => {
      if (lock) {
        const scrollbarWidth =
          window.innerWidth - document.documentElement.clientWidth;
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
        visible.value = true;
      } else {
        setTimeout(() => {
          visible.value = false;
        }, 300);
      }
      // emit("update:show", visible.value); // for 3
      emit("update:modelValue", visible.value);
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
      const {
        title,
        cancelText,
        okText,
        placement,
        width,
        height,
        closable,
        loading,
      } = ps;
      const hasFooter = ps.footer || slots.footer;
      const cancelBtn = (
        <Button onClick={cancel}>
          {cancelText || locale?.value.k.common.cancel}
        </Button>
      );
      const okBtn = (
        <Button type="primary" onClick={ok} loading={loading}>
          {okText || locale?.value.k.common.ok}
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
      const classes = [
        "k-drawer",
        `k-drawer-${placement}`,
        { "k-drawer-has-footer": hasFooter },
        { "k-drawer-nobody": !isBody },
        { "k-drawer-nomask": !ps.mask },
      ];
      let styles = {};
      if (placement == "left" || placement == "right")
        styles.width = typeof width === "number" ? `${width}px` : width;
      if (placement == "top" || placement == "bottom")
        styles.height = typeof height === "number" ? `${height}px` : height;

      let maskNode = null;
      if (ps.mask) {
        maskNode = (
          <Transition name="k-drawer-fade">
            <div
              class={["k-drawer-mask", { "k-drawer-mask-nobody": !isBody }]}
              v-show={visible.value}
              onClick={maskToClose}
            ></div>
          </Transition>
        );
      }
      return rendered.value ? (
        <div class={classes} v-transfer={target}>
          {maskNode}
          <Transition name={transitionName}>
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
          </Transition>
        </div>
      ) : null;
    };
  },
});
export default withInstall(Drawer);
