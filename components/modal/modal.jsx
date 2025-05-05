import Icon from "../icon";
import { Button } from "../button";
import transfer from "../directives/transfer";
import { Close } from "kui-icons";
import { defineComponent, ref, watch, onMounted, nextTick, Transition, onBeforeMount, inject } from "vue";
import zhCN from "../locale/lang/zh-CN";
export default defineComponent({
  name: "Modal",
  directives: { transfer },
  props: {
    show: Boolean,
    title: String,
    okText: String,
    cancelText: String,
    top: Number,
    width: Number,
    mask: { type: Boolean, default: true },
    maskClosable: { type: Boolean, default: false },
    maximized: Boolean,
    centered: Boolean,
    draggable: Boolean,
    showClose: { type: Boolean, default: true },
    loading: Boolean,
    footer: String,
    transfer: { type: Boolean, default: true },
  },
  setup(ps, { slots, emit }) {
    const visible = ref(ps.show);
    const rendered = ref(false);
    const showInner = ref(ps.show);
    const left = ref(0);
    const currentTop = ref(ps.top);
    const isMouseDown = ref(false);
    const mousedownIn = ref(false);
    const startPos = ref({ x: 0, y: 0 });
    const refModal = ref(null);
    const refHeader = ref(null);
    const locale = inject("locale", null) || zhCN;
    onBeforeMount(() => {
      document.removeEventListener("mousedown", mousedown);
    });
    onMounted(() => {
      document.addEventListener("mousedown", mousedown);

      if (ps.draggable) {
        left.value = (document.body.offsetWidth - (ps.width || 480)) / 2;
      }
      if (ps.show) {
        toggle(true);
      }
    });
    watch(
      () => ps.show,
      (nv, ov) => {
        toggle(nv);
      }
    );
    const getOffset = (el) => {
      return el
        ? {
            left: el.offsetLeft,
            top: el.offsetTop,
          }
        : { left: 0, top: 0 };
    };

    const toggle = (value) => {
      if (!rendered.value && value) {
        rendered.value = true;
        toggle(true);
      } else {
        if (value) {
          nextTick((e) => {
            visible.value = value;
            showInner.value = value;
            emit("update:show", true);
            nextTick(() => {
              updateOrigin();
            });
          });
        } else {
          visible.value = false;
          setTimeout(() => {
            showInner.value = false;
          }, 300);
          emit("update:show", false);
        }
      }
    };
    const updateOrigin = () => {
      if (refModal.value) {
        let { x, y } = window.__kui__point || { x: 0, y: 0 };
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
    const clickMaskToClose = (e) => {
      if (!ps.loading && ps.maskClosable && !refModal.value.contains(e.target) && !mousedownIn.value) {
        close();
      }
    };
    const mousemove = (e) => {
      if (isMouseDown.value && ps.draggable) {
        let { x, y } = startPos.value;
        left.value += e.clientX - x;
        currentTop.value = currentTop.value || 100;
        currentTop.value += e.clientY - y;
        startPos.value = { x: e.clientX, y: e.clientY };
        updateOrigin();
        e.preventDefault();
      }
    };
    const mouseup = (e) => {
      isMouseDown.value = false;
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);
    };
    const mousedown = (e) => {
      if (e.button == 0 && ps.draggable === true && refHeader.value && refHeader.value.contains(e.target)) {
        isMouseDown.value = true;
        startPos.value = { x: e.clientX, y: e.clientY };
        mousemove(e);
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
      }

      mousedownIn.value = visible.value && refModal.value && refModal.value.contains(e.target);
    };

    return () => {
      let { draggable, width } = ps;

      //mask
      let maskNode = null;
      if (ps.mask) {
        maskNode = (
          <Transition name="k-modal-fade">
            <div class="k-modal-mask" v-show={visible.value} />
          </Transition>
        );
      }
      let okText = ps.okText || locale?.k.modal.ok;
      let cancelText = ps.cancelText || locale?.k.modal.cancel;
      //content
      let contentNode = slots.content?.();
      if (!contentNode) {
        const contents = [];
        ps.showClose &&
          contents.push(
            <span class="k-modal-close" onClick={close}>
              <Icon type={Close} strokeWidth={50} />
            </span>
          );
        ps.title !== null &&
          contents.push(
            <div class="k-modal-header" ref={refHeader}>
              <div class="k-modal-header-inner">{ps.title}</div>
            </div>
          );
        contents.push(<div class="k-modal-body">{slots.default?.()}</div>);

        //footer
        if (ps.footer !== null) {
          let footer = slots.footer?.();
          if (!footer) {
            footer = [
              <Button onClick={cancel}>{cancelText}</Button>,
              <Button onClick={ok} type="primary" loading={ps.loading}>
                {okText}
              </Button>,
            ];
          }
          const footerNode = footer ? <div class="k-modal-footer">{footer}</div> : null;

          contents.push(footerNode);
        }
        contentNode = <div class="k-modal-content">{contents}</div>;
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
          "k-modal-maximized": ps.maximized,
          "k-modal-centered": ps.centered,
          "k-modal-has-footer": ps.footer !== null,
        },
      ];
      return rendered.value ? (
        <div class={classes} v-transfer={ps.transfer}>
          {maskNode}
          <div class="k-modal-wrap" v-show={showInner.value} onClick={clickMaskToClose}>
            <Transition name="k-modal-zoom">
              <div class="k-modal-inner" ref={refModal} v-show={visible.value} style={style}>
                {contentNode}
              </div>
            </Transition>
          </div>
        </div>
      ) : null;
    };
  },
});
