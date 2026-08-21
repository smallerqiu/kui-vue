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
import type { BooleanType } from "../const/types";
import zhCN from "../locale/zh-CN";
import { toggleContainerScroll } from "../utils/vnode";

const modalProps = {
  modelValue: Boolean as BooleanType,
  title: String,
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
  onClose: { type: Function as PropType<() => void> },
  onOk: { type: Function as PropType<() => void> },
  onCancel: { type: Function as PropType<() => void> },
  onOpenChange: { type: Function as PropType<(opened: boolean) => void> },
  panelOnly: Boolean as BooleanType,
};
export type ModalProps = ExtractPropTypes<typeof modalProps>;

const Modal = defineComponent({
  name: "Modal",
  inheritAttrs: false,
  props: modalProps,
  setup(props, { attrs, slots, emit }) {
    const getPopupContainer = usePopupContainer();
    const visible = ref<boolean | undefined>(props.panelOnly || props.modelValue);
    const rendered = ref(props.panelOnly);
    const showInner = ref(props.panelOnly || props.modelValue);
    const left = ref(0);
    const currentTop = ref(props.top);
    const isMousePressed = ref(false);
    const mousedownIn = ref(false);
    const startPos = ref({ x: 0, y: 0 });
    const refModal = ref();
    const refHeader = ref();
    let scrollLocked = false;
    const updateScrollLock = (lock: boolean) => {
      if (props.panelOnly || scrollLocked === lock) return;
      toggleContainerScroll(typeof document === "undefined" ? null : document.body, lock);
      scrollLocked = lock;
    };
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });
    const escToClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    onMounted(() => {
      document.addEventListener("mousedown", mousedown);
      if (props.escKey) document.addEventListener("keydown", escToClose);

      if (props.modelValue) {
        toggle(true);
      }
    });
    onBeforeUnmount(() => {
      mouseup();
      document.removeEventListener("mousedown", mousedown);
      document.removeEventListener("keydown", escToClose);
      updateScrollLock(false);
    });
    watch(
      () => props.modelValue,
      (nv) => {
        toggle(nv);
      }
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
          updateScrollLock(true);
          nextTick(() => {
            visible.value = value;
            showInner.value = value;
            emit("update:modelValue", true);
            emit("openChange", true);
            nextTick(() => {
              if (props.draggable) {
                left.value = (document.body.offsetWidth - refModal.value.offsetWidth) / 2;
              }
              updateOrigin();
            });
          });
        } else {
          updateScrollLock(false);
          visible.value = false;
          setTimeout(() => {
            showInner.value = false;
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
        refModal.value.style["transform-origin"] = `${x - p.left}px ${y - p.top}px`;
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
        refHeader.value.contains(e.target)
      ) {
        isMousePressed.value = true;
        startPos.value = { x: e.clientX, y: e.clientY };
        mousemove(e);
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
      }

      mousedownIn.value = visible.value && refModal.value && refModal.value.contains(e.target);
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
            ></Button>
          );
        }
        if (props.title !== null) {
          contents.push(
            <div class="k-modal-header" ref={refHeader}>
              <div class="k-modal-header-inner">{props.title}</div>
            </div>
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
            width: typeof width === "number" ? `${width}px` : width,
            top: props.centered ? undefined : `${currentTop.value}px`,
            left: props.centered ? undefined : `${left.value}px`,
          };
      const classes = [
        "k-modal",
        {
          "k-modal-draggable": draggable,
          "k-modal-maximized": props.maximized,
          "k-modal-centered": props.centered,
          "k-modal-has-footer": props.footer !== null,
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
            v-show={showInner.value}
            onClick={clickMaskToClose}
          >
            <Transition name="k-modal-zoom">
              <div class="k-modal-inner" ref={refModal} v-show={visible.value} style={style}>
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
});
export default Modal;
