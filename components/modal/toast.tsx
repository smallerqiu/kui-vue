import { CircleAlert, CircleCheck, CircleQuestionMark, CircleX, Info } from "kui-icons";
import { computed, defineComponent, inject, isRef, ref, type PropType, type Ref } from "vue";
import { Button } from "../button";
import Icon, { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import Modal from "./modal";
export default defineComponent({
  name: "Toast",
  props: {
    title: String,
    okText: String,
    cancelText: String,
    content: String,
    color: String,
    icon: Array as PropType<IconType[]>,
    onOk: Function,
    onCancel: Function,
    type: {
      type: String as PropType<"info" | "success" | "error" | "warning" | "confirm">,
      default: "info",
    },
  },
  setup(ps, { expose, emit }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });
    const loading = ref(false);
    const visible = ref(false);
    let destroyRequested = false;
    const isPromise = (obj: unknown): obj is PromiseLike<unknown> => {
      return (
        typeof obj === "object" &&
        obj !== null &&
        "then" in obj &&
        typeof (obj as { then?: unknown }).then === "function"
      );
    };
    const show = () => {
      visible.value = true;
    };
    const requestDestroy = () => {
      if (destroyRequested) return;
      destroyRequested = true;
      emit("destroy");
    };
    const hide = () => {
      visible.value = false;
      requestDestroy();
    };

    expose({
      show,
      hide,
    });
    const ok = () => {
      const { onOk } = ps;
      const fun = onOk ? onOk() : {};
      if (isPromise(fun)) {
        loading.value = true;
        Promise.resolve(fun)
          .then(() => {
            hide();
          })
          .catch(() => {});
      } else {
        hide();
      }
    };
    const cancel = () => {
      const { onCancel } = ps;
      if (typeof onCancel == "function") onCancel();
      hide();
    };

    return () => {
      //icons
      const { title, content, color, type, icon, cancelText, okText } = ps;
      const icons = {
        info: Info,
        error: CircleX,
        success: CircleCheck,
        warning: CircleAlert,
        confirm: CircleQuestionMark,
      };
      //header
      const header = (
        <div class="k-toast-header">
          {type || icon ? (
            <Icon class="k-toast-icon" type={icon || icons[type]} color={color} />
          ) : null}
          <div class="k-toast-title">{title}</div>
        </div>
      );

      //body
      const body = <div class="k-toast-content">{content}</div>;
      //footer
      const footerNode = [
        <Button type="primary" loading={loading.value} onClick={ok}>
          {okText || locale.value?.k.common.ok}
        </Button>,
      ];

      if (type == "confirm") {
        footerNode.unshift(
          <Button onClick={cancel}> {cancelText || locale.value?.k.common.cancel}</Button>,
        );
      }
      const footer = <div class="k-toast-footer">{footerNode}</div>;

      const classes = [
        "k-toast",
        {
          [`k-toast-${type}`]: icons[type] != undefined,
        },
      ];
      return (
        <Modal
          class={classes}
          v-model={visible.value}
          maskClosable={false}
          onOpenChange={(opened) => {
            if (!opened) requestDestroy();
          }}
          v-slots={{
            content: () => [header, body, footer],
          }}
        ></Modal>
      );
    };
  },
});
