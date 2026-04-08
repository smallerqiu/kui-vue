import { Close } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  nextTick,
  onBeforeMount,
  onMounted,
  ref,
  Transition,
  watch,
  type ExtractPropTypes,
} from "vue";
import { Button } from "../button";
import { getMousePoint } from "../config/context";
import type { TypeBoolean } from "../const/var";
import { transfer } from "../directives/transfer";
import zhCN from "../locale/zh-CN";

export const modalProps = {
  modelValue: Boolean as TypeBoolean,
  title: String,
  okText: String,
  cancelText: String,
  top: Number,
  width: Number,
  mask: { type: Boolean as TypeBoolean, default: true },
  maskClosable: { type: Boolean as TypeBoolean, default: false },
  maximized: Boolean as TypeBoolean,
  centered: Boolean as TypeBoolean,
  draggable: Boolean as TypeBoolean,
  showClose: { type: Boolean as TypeBoolean, default: true },
  loading: Boolean as TypeBoolean,
  footer: String,
  transfer: { type: Boolean as TypeBoolean, default: true },
  escKey: { type: Boolean as TypeBoolean, default: true },
};
export type ModalProps = ExtractPropTypes<typeof modalProps>;

const Modal = defineComponent({
  name: "Modal",
  directives: { transfer },
  props: modalProps,
  setup(props, { slots, emit }) {
    const visible = ref(props.modelValue);
    const rendered = ref(false);
    const showInner = ref(props.modelValue);
    const left = ref(0);
    const currentTop = ref(props.top);
    const isMousePressed = ref(false);
    const mousedownIn = ref(false);
    const startPos = ref({ x: 0, y: 0 });
    const refModal = ref();
    const refHeader = ref();
    const injectedLocale = inject<Record<string,any>>("locale", zhCN);
    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });
    const escToClose = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    onBeforeMount(() => {
      document.removeEventListener("mousedown", mousedown);
      props.escKey && document.removeEventListener("keydown", escToClose);
    });
    onMounted(() => {
      document.addEventListener("mousedown", mousedown);
      props.escKey && document.addEventListener("keydown", escToClose);

      if (props.draggable) {
        left.value = (document.body.offsetWidth - (props.width || 480)) / 2;
      }
      if (props.modelValue) {
        toggle(true);
      }
    });
    watch(
      () => props.modelValue,
      (nv) => {
        toggle(nv);
      }
    );
    const getOffset = (el:HTMLElement) => {
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
          nextTick(() => {
            visible.value = value;
            showInner.value = value;
            emit("update:modelValue", true);
            nextTick(() => {
              updateOrigin();
            });
          });
        } else {
          visible.value = false;
          setTimeout(() => {
            showInner.value = false;
          }, 300);
          emit("update:modelValue", false);
        }
      }
    };
    const updateOrigin = () => {
      if (refModal.value) {
        let { x, y } = getMousePoint();
        let { left, top } = getOffset(refModal.value);
        refModal.value.style["transform-origin"] = `${x - left}px ${y - top}px`;
      }
    };
    const ok = () => {
      emit("ok");
    };
    const cancel = () => {
      toggle(false);
      emit("cancel");
    };
    const close = () => {
      toggle(false);
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
        let { x, y } = startPos.value;
        left.value += e.clientX - x;
        currentTop.value = currentTop.value || 100;
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
      let { draggable, width } = props;

      //mask
      let maskNode = null;
      if (props.mask) {
        maskNode = (
          <Transition name="k-modal-fade">
            <div class="k-modal-mask" v-show={visible.value} />
          </Transition>
        );
      }
      let okText = props.okText || locale.value?.k.common.ok;
      let cancelText = props.cancelText || locale.value?.k.common.cancel;
      //content
      let contentNode:any = slots.content?.();
      if (!contentNode) {
        const contents = [];
        props.showClose &&
          contents.push(
            <Button
              icon={Close}
              size="small"
              onClick={close}
              class="k-modal-close"
              type="text"
            ></Button>
          );
        props.title !== null &&
          contents.push(
            <div class="k-modal-header" ref={refHeader}>
              <div class="k-modal-header-inner">{props.title}</div>
            </div>
          );
        contents.push(<div class="k-modal-body">{slots.default?.()}</div>);

        //footer
        if (props.footer !== null) {
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

      const style = {
        width: `${width}px`,
        top: `${currentTop.value}px`,
        left: `${left.value}px`,
      };
      const classes = [
        "k-modal",
        {
          "k-modal-draggable": draggable,
          "k-modal-maximized": props.maximized,
          "k-modal-centered": props.centered,
          "k-modal-has-footer": props.footer !== null,
        },
      ];
      return rendered.value ? (
        <div class={classes} v-transfer={props.transfer}>
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
    };
  },
});
export default Modal;
