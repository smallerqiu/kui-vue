import { Close } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  Transition,
  watch,
} from "vue";
import { Button } from "../button";
import transfer from "../directives/transfer";
import zhCN from "../locale/zh-CN";
import { toggleContainerScroll } from "../utils/vnode";
import { withInstall } from "../utils/vue";
const Drawer = defineComponent({
  name: "Drawer",
  directives: { transfer },
  props: {
    modelValue: Boolean,
    title: { default: "Title", type: String },
    width: { default: 520, type: [Number, String] },
    height: { default: 520, type: [Number, String] },
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
    const opened = ref(ps.modelValue);
    watch(
      () => ps.modelValue,
      (nv, ov) => {
        toggle(nv);
      }
    );

    onMounted(() => {
      ps.escKey && document.addEventListener("keydown", escToClose);
    });
    onBeforeUnmount(() => {
      ps.escKey && document.removeEventListener("keydown", escToClose);
      toggleContainerScroll(ps.target(), false);
    });

    const toggle = (value) => {
      if (!rendered.value && value) {
        rendered.value = true;
        toggle(true);
      } else {
        if (value) {
          nextTick((e) => {
            visible.value = value;
            opened.value = value;
            emit("update:modelValue", true);
          });
        } else {
          visible.value = false;
          setTimeout(() => {
            opened.value = false;
          }, 300);
          emit("update:modelValue", false);
        }
      }
    };
    const escToClose = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    const clickMaskToClose = () => {
      if (ps.maskClosable) {
        close();
      }
    };

    const cancel = () => {
      emit("cancel");
      visible.value = false;
      toggle(false);
    };

    const close = () => {
      emit("close");
      toggle(false);
    };

    const ok = () => {
      emit("ok");
    };

    return () => {
      const { title, cancelText, okText, placement, width, height, closable, loading } = ps;
      const hasFooter = ps.footer || slots.footer;
      const cancelBtn = (
        <Button onClick={cancel}>{cancelText || locale?.value.k.common.cancel}</Button>
      );
      const okBtn = (
        <Button type="primary" onClick={ok} loading={loading}>
          {okText || locale?.value.k.common.ok}
        </Button>
      );
      const footNode = hasFooter ? (
        <div class="k-drawer-footer">{slots.footer ? slots.footer() : [cancelBtn, okBtn]}</div>
      ) : null;

      const closeNode = closable ? (
        <Button
          class="k-drawer-close"
          size="small"
          type="text"
          onClick={close}
          icon={Close}
        ></Button>
      ) : null;

      const transitionName = `k-drawer-${placement}`;
      const target = ps.target();
      const isBody = target == document.body;
      const classes = [
        "k-drawer",
        `k-drawer-${placement}`,
        { "k-drawer-has-footer": hasFooter },
        { "k-drawer-to-body": isBody },
        { "k-drawer-no-mask": !ps.mask },
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
              class={["k-drawer-mask", { "k-drawer-mask-to-body": isBody }]}
              v-show={visible.value}
              onClick={clickMaskToClose}
            ></div>
          </Transition>
        );
      }
      return rendered.value ? (
        <div class={classes} v-transfer={target}>
          {maskNode}
          <div class="k-drawer-wrap" tabindex="-1" v-show={opened.value}>
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
        </div>
      ) : null;
    };
  },
});
export default withInstall(Drawer);
