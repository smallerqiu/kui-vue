import { useInitialValue } from "../utils/model-value";
import type { ForwardedComponent } from "../utils/vue";
import { X } from "kui-icons";
import {
  computed,
  defineComponent,
  h,
  inject,
  isRef,
  nextTick,
  onBeforeUnmount,
  onMounted,
  ref,
  Teleport,
  Transition,
  watch,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type VNodeChild,
} from "vue";
import { Button } from "../button";
import { getMousePoint } from "../config/context";
import { usePopupContainer } from "../config/popup";
import { providePopupHost } from "../config/popup-host";
import type { BooleanType } from "../const/types";
import zhCN from "../locale/zh-CN";
import { toCssLength } from "../utils/css";
import { createFocusTrap } from "../utils/focus";
import { pushOverlay, type OverlayHandle } from "../utils/overlay-stack";
import { hasRenderableContent, toggleContainerScroll } from "../utils/vnode";

const modalProps = {
  modelValue: { type: Boolean as BooleanType, default: undefined },
  value: Boolean as BooleanType,
  // 与 react 的 `title: React.ReactNode` 同形：除字符串之外还收 VNode，富内容也可以走 `title` 插槽。
  title: { type: [String, Object] as PropType<string | VNodeChild>, default: undefined },
  okText: String,
  cancelText: String,
  width: { type: [Number, String] as PropType<number | string>, default: 520 },
  top: { type: Number as PropType<number>, default: 100 },
  mask: { type: Boolean as BooleanType, default: true },
  maskClosable: { type: Boolean as BooleanType, default: false },
  maximized: Boolean as BooleanType,
  centered: Boolean as BooleanType,
  draggable: Boolean as BooleanType,
  showClose: { type: Boolean as BooleanType, default: true },
  loading: Boolean as BooleanType,
  footer: { type: Boolean as BooleanType, default: true },
  escKey: { type: Boolean as BooleanType, default: true },
  panelOnly: Boolean as BooleanType,
  destroyOnClose: { type: Boolean as BooleanType, default: true },
};
export type ModalProps = ExtractPropTypes<typeof modalProps>;

const Modal = defineComponent({
  name: "Modal",
  inheritAttrs: false,
  props: modalProps,
  emits: {
    "update:modelValue": (visible: boolean) => typeof visible === "boolean",
    openChange: (visible: boolean) => typeof visible === "boolean",
    ok: () => true,
    cancel: () => true,
    close: () => true,
  },
  setup(props, { attrs, slots, emit }) {
    const initialModel = useInitialValue(props);
    const getPopupContainer = usePopupContainer();
    const visible = ref<boolean | undefined>(props.panelOnly || initialModel.value);
    const rendered = ref(props.panelOnly);
    const showInner = ref(props.panelOnly || initialModel.value);
    const left = ref(0);
    const currentTop = ref(props.top);
    const isMousePressed = ref(false);
    const mousedownIn = ref(false);
    const startPos = ref({ x: 0, y: 0 });
    const refModal = ref<HTMLElement | null>(null);
    const refHeader = ref<HTMLElement | null>(null);
    const closeHostedPopups = providePopupHost();
    const focusTrap = createFocusTrap(() => refModal.value);
    let scrollLocked = false;
    const updateScrollLock = (lock: boolean) => {
      if (props.panelOnly || scrollLocked === lock) return;
      toggleContainerScroll(typeof document === "undefined" ? null : document.body, lock);
      scrollLocked = lock;
    };
    // 退场倒计时：300ms 后收起内容并按 destroyOnClose 决定是否销毁 DOM。
    // 期间重开必须把它取消掉，否则窗口刚亮起来就被上一次关闭摘走。
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    const cancelHide = () => {
      if (hideTimer === null) return;
      clearTimeout(hideTimer);
      hideTimer = null;
    };
    // 遮罩层队列：叠着开时 Escape 只该关掉最上面那一层，panelOnly 是别人的面板，不进队。
    let overlay: OverlayHandle | null = null;
    const updateOverlay = (open: boolean) => {
      if (props.panelOnly) return;
      if (open) {
        overlay ??= pushOverlay();
        return;
      }
      overlay?.release();
      overlay = null;
    };
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });
    const escToClose = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || event.defaultPrevented) return;
      // escKey / panelOnly 都要在按键时读，挂载时读一次的话改 prop 不会生效。
      if (!props.escKey || props.panelOnly) return;
      // 已经关着的窗口不该响应 Escape，也不该在被别的层压在下面时抢走这次按键。
      if (!visible.value) return;
      if (!overlay?.isTop()) return;
      close();
    };

    onMounted(() => {
      document.addEventListener("mousedown", mousedown);
      document.addEventListener("keydown", escToClose);

      if (initialModel.value) {
        toggle(true);
      }
    });
    onBeforeUnmount(() => {
      mouseup();
      cancelHide();
      document.removeEventListener("mousedown", mousedown);
      document.removeEventListener("keydown", escToClose);
      updateOverlay(false);
      updateScrollLock(false);
      focusTrap.deactivate();
    });
    watch(
      () => initialModel.value,
      (nv) => {
        toggle(nv);
      },
    );
    const getOffset = (el: HTMLElement) => {
      return el
        ? {
            left: el.offsetLeft,
            top: el.offsetTop,
          }
        : { left: 0, top: 0 };
    };

    const toggle = (value?: boolean) => {
      if (!rendered.value && value) {
        rendered.value = true;
        toggle(true);
      } else {
        if (value) {
          cancelHide();
          updateScrollLock(true);
          nextTick(() => {
            visible.value = value;
            showInner.value = value;
            updateOverlay(true);
            // 打开方向不往外发：能走到这里的只有"父组件把 modelValue 翻成 true"这一条路
            // （挂载时读到的初始值也算），回写 `update:modelValue` 是把人家刚写的值再喂回去一次，
            // `openChange(true)` 也是同一件事的重复通知。与 react 对齐——那边 `requestOpen`
            // 全库只被 `false` 调用过，`onOpenChange` 只在关闭时响。
            // 想在打开时做点什么的，watch `modelValue` 就是同一个时机，且不会漏掉受控写法。
            nextTick(() => {
              if (props.draggable) {
                const modal = refModal.value;
                if (modal) left.value = (document.body.offsetWidth - modal.offsetWidth) / 2;
              }
              updateOrigin();
              if (!props.panelOnly) focusTrap.activate();
            });
          });
        } else {
          // 已经是关闭态就别再走一遍：受控用法下父组件的回写会把它喂回来第二次
          // （点取消 → emit update:modelValue → v-model 把 modelValue 翻成 false →
          // watcher 又调一次 toggle(false)）。第二趟除了把 update:modelValue / openChange
          // 重复发一遍、把退场倒计时重启一遍没有别的作用，
          // 所以同步开合状态的人只该收到一次通知。
          if (!visible.value) return;
          closeHostedPopups();
          focusTrap.deactivate();
          updateOverlay(false);
          updateScrollLock(false);
          visible.value = false;
          cancelHide();
          hideTimer = setTimeout(() => {
            hideTimer = null;
            showInner.value = false;
            // 退场动画跑完再摘 DOM：默认关一次就销毁面板内容，重开时重新挂载。
            // panelOnly 是宿主浮层里的面板，摘掉等于把别人的内容一起清了，所以不销毁。
            if (props.destroyOnClose && !props.panelOnly) rendered.value = false;
          }, 300);
          emit("update:modelValue", false);
          emit("openChange", false);
        }
      }
    };
    const updateOrigin = () => {
      if (refModal.value) {
        const { x, y } = getMousePoint();
        const p = getOffset(refModal.value);
        refModal.value.style.transformOrigin = `${x - p.left}px ${y - p.top}px`;
      }
    };
    const ok = () => {
      emit("ok");
    };
    const cancel = () => {
      if (!props.panelOnly) toggle(false);
      emit("cancel");
    };
    const close = () => {
      if (!props.panelOnly) toggle(false);
      emit("close");
    };
    const clickMaskToClose = (e: MouseEvent) => {
      if (
        !props.loading &&
        props.maskClosable &&
        refModal.value &&
        e.target instanceof Node &&
        !refModal.value.contains(e.target) &&
        !mousedownIn.value
      ) {
        close();
      }
    };
    const mousemove = (e: MouseEvent) => {
      if (isMousePressed.value && props.draggable) {
        const { x, y } = startPos.value;
        left.value += e.clientX - x;
        currentTop.value = currentTop.value ?? 100;
        currentTop.value += e.clientY - y;
        startPos.value = { x: e.clientX, y: e.clientY };
        updateOrigin();
        e.preventDefault();
      }
    };
    const mouseup = () => {
      isMousePressed.value = false;
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);
    };
    const mousedown = (e: MouseEvent) => {
      if (
        e.button == 0 &&
        props.draggable === true &&
        refHeader.value &&
        e.target instanceof Node &&
        refHeader.value.contains(e.target)
      ) {
        isMousePressed.value = true;
        startPos.value = { x: e.clientX, y: e.clientY };
        mousemove(e);
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
      }

      mousedownIn.value = Boolean(
        visible.value &&
        refModal.value &&
        e.target instanceof Node &&
        refModal.value.contains(e.target),
      );
    };

    return () => {
      const { draggable, width } = props;

      //mask
      let maskNode = null;
      if (props.mask) {
        maskNode = (
          <Transition name="k-modal-fade">
            <div class="k-modal-mask" v-show={visible.value} />
          </Transition>
        );
      }
      const okText = props.okText || locale.value?.k.common.ok;
      const cancelText = props.cancelText || locale.value?.k.common.cancel;
      //content
      let contentNode: VNodeChild = slots.content?.();
      if (!contentNode) {
        const contents = [];
        if (props.showClose) {
          contents.push(
            <Button
              icon={X}
              size="small"
              onClick={close}
              class="k-modal-close"
              type="text"
            ></Button>,
          );
        }
        // 与 react 的 `title: ReactNode` 对齐：属性除字符串之外还收 VNode，富内容也可以走
        // `title` 插槽。插槽渲染出内容才算数——`<template #title>{{ false }}</template>` 这类
        // 空产物回落到 `title` 属性，别把标题吞掉。两者都没有就不渲染 header（null 同样当"没有"，
        // 空标题也会撑出一条带边框的横条）。
        const titleSlot = slots.title?.();
        const titleContent = hasRenderableContent(titleSlot) ? titleSlot : props.title;
        if (titleContent != null) {
          contents.push(
            <div class="k-modal-header" ref={refHeader}>
              <div class="k-modal-header-inner">{titleContent}</div>
            </div>,
          );
        }
        contents.push(<div class="k-modal-body">{slots.default?.()}</div>);

        //footer
        if (props.footer) {
          let footer = slots.footer?.();
          if (!footer) {
            footer = [
              <Button onClick={cancel}>{cancelText}</Button>,
              <Button onClick={ok} type="primary" loading={props.loading}>
                {okText}
              </Button>,
            ];
          }
          const footerNode = footer ? <div class="k-modal-footer">{footer}</div> : null;

          contents.push(footerNode);
        }
        contentNode = (
          <div class="k-modal-content" tabindex="0">
            {contents}
          </div>
        );
      }

      const style = props.maximized
        ? null
        : {
            width: toCssLength(width),
            // 居中靠 `.k-modal-centered .k-modal-inner { top: 0 }`，这里再写内联 top 就把它压掉了；
            // left 只有拖动时才有意义，写个 left: 0px 纯属噪音。
            top: props.centered ? undefined : `${currentTop.value}px`,
            left: props.draggable && !props.centered ? `${left.value}px` : undefined,
          };
      const classes = [
        "k-modal",
        {
          "k-modal-draggable": draggable,
          "k-modal-maximized": props.maximized,
          "k-modal-centered": props.centered,
          "k-modal-has-footer": props.footer,
          "k-modal-panel": props.panelOnly,
        },
        attrs.class,
      ];
      const rootAttrs = { ...attrs };
      delete rootAttrs.class;
      const panel = rendered.value ? (
        <div {...rootAttrs} class={classes}>
          {maskNode}
          <div
            class="k-modal-wrap"
            tabindex="-1"
            role="dialog"
            // panelOnly 是被别的浮层包着用的面板，再声明 aria-modal 就变成嵌套对话框了
            aria-modal={!props.panelOnly && props.mask ? true : undefined}
            v-show={showInner.value}
            onClick={clickMaskToClose}
          >
            <Transition name="k-modal-zoom">
              <div
                class="k-modal-inner"
                ref={refModal}
                tabindex={-1}
                v-show={visible.value}
                style={style}
                onKeydown={focusTrap.handleKeydown}
              >
                {contentNode}
                <div tabindex="0"></div>
              </div>
            </Transition>
          </div>
        </div>
      ) : null;
      if (props.panelOnly) return panel;
      return rendered.value ? <Teleport to={getPopupContainer()}>{panel}</Teleport> : null;
    };
  },
});

export const ModalPanel = defineComponent({
  name: "ModalPanel",
  inheritAttrs: false,
  props: modalProps,
  setup:
    (props, { attrs, slots }) =>
    () =>
      h(Modal, { ...attrs, ...props, modelValue: true, mask: false, panelOnly: true }, slots),
}) as ForwardedComponent<typeof Modal>;
export default Modal;
