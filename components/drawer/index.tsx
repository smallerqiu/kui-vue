import { useInitialValue } from "../utils/model-value";
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
import { providePopupHost } from "../config/popup-host";
import type { DrawerPlacementsType } from "../const/types";
import zhCN from "../locale/zh-CN";
import { toCssLength } from "../utils/css";
import { createFocusTrap } from "../utils/focus";
import { pushOverlay, type OverlayHandle } from "../utils/overlay-stack";
import { toggleContainerScroll } from "../utils/vnode";

const drawerProps = {
  modelValue: { type: Boolean, default: undefined },
  value: Boolean,
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
  destroyOnClose: { type: Boolean, default: true },
};

export type DrawerProps = ExtractPropTypes<typeof drawerProps>;

const Drawer = defineComponent({
  name: "Drawer",
  props: drawerProps,
  emits: {
    "update:modelValue": (visible: boolean) => typeof visible === "boolean",
    openChange: (visible: boolean) => typeof visible === "boolean",
    ok: () => true,
    cancel: () => true,
    close: () => true,
  },
  setup(props, { slots, emit }) {
    const initialModel = useInitialValue(props);
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const getPopupContainer = usePopupContainer();
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });

    const rendered = ref(initialModel.value);
    const visible = ref(initialModel.value);
    const opened = ref(initialModel.value);
    const closeHostedPopups = providePopupHost();
    const drawerBoxRef = ref<HTMLElement>();
    const focusTrap = createFocusTrap(() => drawerBoxRef.value);
    const resolveTarget = () => {
      const target = props.target?.();
      const element = target && "$el" in target ? target.$el : target;
      return element instanceof HTMLElement ? element : (getPopupContainer() ?? document.body);
    };
    let scrollTarget: HTMLElement | null = null;
    let scrollLocked = false;
    let positionedTarget: HTMLElement | null = null;
    let targetPosition = "";

    const restorePositioningContext = () => {
      if (positionedTarget?.style.position === "relative") {
        positionedTarget.style.position = targetPosition;
      }
      positionedTarget = null;
      targetPosition = "";
    };

    const ensurePositioningContext = (target: HTMLElement) => {
      if (target === positionedTarget) return;
      restorePositioningContext();
      if (target === document.body || getComputedStyle(target).position !== "static") return;
      positionedTarget = target;
      targetPosition = target.style.position;
      target.style.position = "relative";
    };

    const updateScrollLock = (lock: boolean) => {
      if (scrollLocked === lock) return;
      if (lock) scrollTarget = resolveTarget();
      toggleContainerScroll(scrollTarget, lock);
      scrollLocked = lock;
      if (!lock) scrollTarget = null;
    };

    // 退场倒计时：300ms 后收起面板并按 destroyOnClose 决定是否销毁 DOM。
    // 期间重开必须把它取消掉，否则面板刚亮起来就被上一次关闭摘走。
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    const cancelHide = () => {
      if (hideTimer === null) return;
      clearTimeout(hideTimer);
      hideTimer = null;
    };
    // 遮罩层队列：叠在 Drawer 上的 Modal 开着时，Escape 归 Modal。
    let overlay: OverlayHandle | null = null;
    const updateOverlay = (open: boolean) => {
      if (open) {
        overlay ??= pushOverlay();
        return;
      }
      overlay?.release();
      overlay = null;
    };

    watch(
      () => initialModel.value,
      (nv) => {
        toggle(nv);
      },
    );

    onMounted(() => {
      document.addEventListener("keydown", escToClose);
      if (rendered.value) ensurePositioningContext(resolveTarget());
      updateScrollLock(initialModel.value);
      if (initialModel.value) updateOverlay(true);
    });

    onBeforeUnmount(() => {
      document.removeEventListener("keydown", escToClose);
      cancelHide();
      updateOverlay(false);
      updateScrollLock(false);
      restorePositioningContext();
      focusTrap.deactivate();
    });

    watch(
      resolveTarget,
      (target) => {
        if (rendered.value) ensurePositioningContext(target);
      },
      { flush: "post" },
    );

    const toggle = (value: boolean) => {
      if (!rendered.value && value) {
        rendered.value = true;
        toggle(true);
      } else {
        if (value) {
          cancelHide();
          ensurePositioningContext(resolveTarget());
          updateScrollLock(true);
          nextTick(() => {
            visible.value = value;
            opened.value = value;
            updateOverlay(true);
            emit("update:modelValue", true);
            emit("openChange", true);
            focusTrap.activate();
          });
        } else {
          // 与 Modal 同款：受控用法下父组件的回写会把关闭喂回来第二次
          // （点取消 → emit update:modelValue → v-model 翻成 false → watcher 再调一次
          // toggle(false)），第二趟只会把 openChange 重复发一遍、把退场倒计时重启一遍。
          if (!visible.value) return;
          closeHostedPopups();
          focusTrap.deactivate();
          updateOverlay(false);
          updateScrollLock(false);
          visible.value = false;
          cancelHide();
          hideTimer = setTimeout(() => {
            hideTimer = null;
            opened.value = false;
            // 与 Modal 同款：退场动画跑完再摘 DOM，默认关一次就销毁面板内容，重开时重新挂载。
            if (props.destroyOnClose) rendered.value = false;
          }, 300);
          emit("update:modelValue", false);
          emit("openChange", false);
        }
      }
    };

    const escToClose = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      // escKey 在按键时读，挂载时读一次的话改 prop 不会生效。
      if (!props.escKey) return;
      // 已经关着的窗口不该响应 Escape，也不该在被别的层压在下面时抢走这次按键。
      if (!visible.value) return;
      if (!overlay?.isTop()) return;
      close();
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
        styles.width = toCssLength(width);
      }
      if (placement === "top" || placement === "bottom") {
        styles.height = toCssLength(height);
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
      const drawerProps = {
        class: "k-drawer-box",
        style: styles,
        ref: drawerBoxRef,
        tabindex: -1,
        role: "dialog",
        "aria-modal": props.mask || undefined,
        onKeydown: focusTrap.handleKeydown,
      };
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
