import { Button } from "../button";
import transfer from "../directives/transfer";
import { Close } from "kui-icons";
import { getMousePoint } from "../config/context";
import {
  defineComponent,
  ref,
  watch,
  onMounted,
  nextTick,
  computed,
  Transition,
  onBeforeMount,
  inject,
} from "vue";
import zhCN from "../locale/zh-CN";
import { withInstall } from "../utils/vue";
const Modal = defineComponent({
  name: "Modal",
  directives: { transfer },
  props: {
    // show: Boolean, //for 3
    modelValue: Boolean, //for 2
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
    escKey: { type: Boolean, default: true },
  },
  setup(ps, { slots, emit }) { 
    const visible = ref(ps.modelValue);
    const rendered = ref(false); 
    const showInner = ref(ps.modelValue);
    const left = ref(0);
    const currentTop = ref(ps.top);
    const isMousePressed = ref(false);
    const mousedownIn = ref(false);
    const startPos = ref({ x: 0, y: 0 });
    const refModal = ref();
    const refHeader = ref();
    const injectedLocale = inject("locale", zhCN);
    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });
    const escToClose = (event) => {
      if (event.key === "Escape") {
        close();
      }
    };

    onBeforeMount(() => {
      document.removeEventListener("mousedown", mousedown);
      ps.escKey && document.removeEventListener("keydown", escToClose);
    });
    onMounted(() => {
      document.addEventListener("mousedown", mousedown);
      ps.escKey && document.addEventListener("keydown", escToClose);

      if (ps.draggable) {
        left.value = (document.body.offsetWidth - (ps.width || 480)) / 2;
      } 
      if (ps.modelValue) {
        toggle(true);
      }
    });
    watch( 
      () => ps.modelValue,
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
        let { x, y } = getMousePoint()
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
      if (
        !ps.loading &&
        ps.maskClosable &&
        !refModal.value.contains(e.target) &&
        !mousedownIn.value
      ) {
        close();
      }
    };
    const mousemove = (e) => {
      if (isMousePressed.value && ps.draggable) {
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
      isMousePressed.value = false;
      document.removeEventListener("mousemove", mousemove);
      document.removeEventListener("mouseup", mouseup);
    };
    const mousedown = (e) => {
      if (
        e.button == 0 &&
        ps.draggable === true &&
        refHeader.value &&
        refHeader.value.contains(e.target)
      ) {
        isMousePressed.value = true;
        startPos.value = { x: e.clientX, y: e.clientY };
        mousemove(e);
        document.addEventListener("mousemove", mousemove);
        document.addEventListener("mouseup", mouseup);
      }

      mousedownIn.value =
        visible.value && refModal.value && refModal.value.contains(e.target);
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
      let okText = ps.okText || locale?.value.k.common.ok;
      let cancelText = ps.cancelText || locale?.value.k.common.cancel;
      //content
      let contentNode = slots.content?.();
      if (!contentNode) {
        const contents = [];
        ps.showClose &&
          contents.push(
            <Button
              icon={Close}
              size="small"
              onClick={close}
              class="k-modal-close"
              type="text"
            ></Button>
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
          const footerNode = footer ? (
            <div class="k-modal-footer">{footer}</div>
          ) : null;

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
          "k-modal-maximized": ps.maximized,
          "k-modal-centered": ps.centered,
          "k-modal-has-footer": ps.footer !== null,
        },
      ];
      return rendered.value ? (
        <div class={classes} v-transfer={ps.transfer}>
          {maskNode}
          <div
            class="k-modal-wrap"
            tabindex="-1"
            role="dialog"
            v-show={showInner.value}
            onClick={clickMaskToClose}
          >
            <Transition name="k-modal-zoom">
              <div
                class="k-modal-inner"
                ref={refModal}
                v-show={visible.value}
                style={style}
              >
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
export default withInstall(Modal);
