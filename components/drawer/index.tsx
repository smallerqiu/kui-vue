import { X } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  isRef,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  Teleport,
  Transition,
  watch,
  type ComponentPublicInstance,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type Ref,
} from "vue";
import { Button } from "../button";
import { usePopupContainer } from "../config/popup";
import type { DrawerPlacementsType } from "../const/types";
import zhCN from "../locale/zh-CN";
import { toggleContainerScroll } from "../utils/vnode";

const drawerProps = {
  modelValue: Boolean,
  title: { type: String, default: "Title" },
  width: { type: [Number, String] as PropType<number | string>, default: 520 },
  height: { type: [Number, String] as PropType<number | string>, default: 520 },
  okText: String,
  cancelText: String,
  placement: { type: String as PropType<DrawerPlacementsType>, default: "right" },
  closable: { type: Boolean, default: true },
  footer: { type: Boolean, default: true },
  maskClosable: { type: Boolean, default: true },
  target: {
    type: Function as PropType<() => HTMLElement | ComponentPublicInstance | null | undefined>,
  },
  mask: { type: Boolean, default: true },
  loading: { type: Boolean, default: false },
  escKey: { type: Boolean, default: true },
  onOk: Function as PropType<() => void>,
  onCancel: Function as PropType<() => void>,
  onClose: Function as PropType<() => void>,
  onOpenChange: Function as PropType<(opened: boolean) => void>,
};

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;

const Drawer = defineComponent({
  name: "Drawer",
  props: drawerProps,
  setup(props, { slots, emit }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const getPopupContainer = usePopupContainer();
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });

    const rendered = ref(props.modelValue);
    const visible = ref(props.modelValue);
    const opened = ref(props.modelValue);

    const resolveTarget = () => {
      const target = props.target?.();
      const element = target && "$el" in target ? target.$el : target;
      return element instanceof HTMLElement ? element : getPopupContainer();
    };

    watch(
      () => props.modelValue,
      (nv) => {
        toggle(nv);
      }
    );

    onMounted(() => {
      if (props.escKey) document.addEventListener("keydown", escToClose);
    });

    onBeforeUnmount(() => {
      if (props.escKey) document.removeEventListener("keydown", escToClose);
      toggleContainerScroll(resolveTarget(), false);
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
            emit("openChange", true);
          });
        } else {
          visible.value = false;
          setTimeout(() => {
            opened.value = false;
          }, 300);
          emit("update:modelValue", false);
          emit("openChange", false);
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
        <Button class="k-drawer-close" size="small" type="text" onClick={close} icon={X} />
      ) : null;

      const transitionName = `k-drawer-${placement}`;
      const target = resolveTarget();
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
        <Teleport to={target}>
          <div class={classes}>
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
        </Teleport>
      ) : null;
    };
  },
});

export default Drawer;
