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
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { Button } from "../button";
import { transfer } from "../directives/transfer";
import zhCN from "../locale/zh-CN";
import { toggleContainerScroll } from "../utils/vnode";

export const drawerProps = {
  modelValue: Boolean,
  title: { type: String, default: "Title" },
  width: { type: [Number, String] as PropType<number | string>, default: 520 },
  height: { type: [Number, String] as PropType<number | string>, default: 520 },
  okText: String,
  cancelText: String,
  placement: { type: String as PropType<"left" | "right" | "top" | "bottom">, default: "right" },
  closable: { type: Boolean, default: true },
  footer: { type: Boolean, default: true },
  maskClosable: { type: Boolean, default: true },
  target: { type: Function as PropType<() => HTMLElement>, default: () => document.body },
  mask: { type: Boolean, default: true },
  loading: { type: Boolean, default: false },
  escKey: { type: Boolean, default: true },
};

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;

const Drawer = defineComponent({
  name: "Drawer",
  directives: { transfer },
  props: drawerProps,
  emits: ["update:modelValue", "ok", "cancel", "close"],
  setup(props, { slots, emit }) {
    const injectedLocale = inject<Record<string, any>>("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? (injectedLocale as any).value
        : injectedLocale;
    });

    const rendered = ref(props.modelValue);
    const visible = ref(props.modelValue);
    const opened = ref(props.modelValue);

    watch(
      () => props.modelValue,
      (nv) => {
        toggle(nv);
      }
    );

    onMounted(() => {
      props.escKey && document.addEventListener("keydown", escToClose);
    });

    onBeforeUnmount(() => {
      props.escKey && document.removeEventListener("keydown", escToClose);
      toggleContainerScroll(props.target(), false);
    });

    const toggle = (value: boolean) => {
      if (!rendered.value && value) {
        rendered.value = true;
        toggle(true);
      } else {
        if (value) {
          nextTick(() => {
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

    const escToClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    const clickMaskToClose = () => {
      if (props.maskClosable) {
        close();
      }
    };

    const cancel = () => {
      emit("cancel");
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
      const { title, cancelText, okText, placement, width, height, closable, loading } = props;
      const hasFooter = props.footer || slots.footer;

      const cancelBtn = (
        <Button onClick={cancel}>{cancelText || locale.value?.k?.common?.cancel}</Button>
      );

      const okBtn = (
        <Button type="primary" onClick={ok} loading={loading}>
          {okText || locale.value?.k?.common?.ok}
        </Button>
      );

      const footNode = hasFooter ? (
        <div class="k-drawer-footer">{slots.footer ? slots.footer() : [cancelBtn, okBtn]}</div>
      ) : null;

      const closeNode = closable ? (
        <Button class="k-drawer-close" size="small" type="text" onClick={close} icon={Close} />
      ) : null;

      const transitionName = `k-drawer-${placement}`;
      const target = props.target();
      const isBody = target === document.body;

      const classes = [
        "k-drawer",
        `k-drawer-${placement}`,
        { "k-drawer-has-footer": hasFooter },
        { "k-drawer-to-body": isBody },
        { "k-drawer-no-mask": !props.mask },
      ];

      const styles: CSSProperties = {};
      if (placement === "left" || placement === "right") {
        styles.width = typeof width === "number" ? `${width}px` : width;
      }
      if (placement === "top" || placement === "bottom") {
        styles.height = typeof height === "number" ? `${height}px` : height;
      }

      const maskNode = props.mask ? (
        <Transition name="k-drawer-fade">
          <div
            class={["k-drawer-mask", { "k-drawer-mask-to-body": isBody }]}
            v-show={visible.value}
            onClick={clickMaskToClose}
          />
        </Transition>
      ) : null;
      const drawerProps = { class: "k-drawer-box", style: styles };
      return rendered.value ? (
        <div class={classes} v-transfer={target}>
          {maskNode}
          <div class="k-drawer-wrap" tabindex={-1} v-show={opened.value}>
            <Transition name={transitionName}>
              <div v-show={visible.value} {...drawerProps}>
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

export default Drawer;
