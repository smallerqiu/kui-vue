import { CircleAlert, CircleCheck, CircleQuestionMark, CircleX, Info } from "kui-icons";
import { computed, defineComponent, inject, ref, type PropType } from "vue";
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
    const injectedLocale = inject<Record<string, any>>("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });
    const loading = ref(false);
    const visible = ref(false);
    const isPromise = (obj: any): boolean => {
      return typeof obj === "object" && typeof obj.then === "function";
    };
    const show = () => {
      visible.value = true;
    };
    const hide = () => {
      visible.value = false;
      emit("destroy");
    };

    expose({
      show,
      hide,
    });
    const ok = () => {
      let { onOk } = ps;
      let fun = onOk ? onOk() : {};
      if (isPromise(fun)) {
        loading.value = true;
        fun
          .then(() => {
            hide();
          })
          .catch(() => {});
      } else {
        hide();
      }
    };
    const cancel = () => {
      let { onCancel } = ps;
      typeof onCancel == "function" && onCancel();
      hide();
    };

    return () => {
      //icons
      let { title, content, color, type, icon, cancelText, okText } = ps;
      let icons = {
        info: Info,
        error: CircleX,
        success: CircleCheck,
        warning: CircleAlert,
        confirm: CircleQuestionMark,
      };
      //header
      let header = (
        <div class="k-toast-header">
          {type || icon ? (
            <Icon class="k-toast-icon" type={icon || icons[type]} color={color} />
          ) : null}
          <div class="k-toast-title">{title}</div>
        </div>
      );

      //body
      let body = <div class="k-toast-content">{content}</div>;
      //footer
      let footerNode = [
        <Button type="primary" loading={loading.value} onClick={ok}>
          {okText || locale.value?.k.common.ok}
        </Button>,
      ];

      if (type == "confirm") {
        footerNode.unshift(
          <Button onClick={cancel}> {cancelText || locale.value?.k.common.cancel}</Button>
        );
      }
      let footer = <div class="k-toast-footer">{footerNode}</div>;

      let classes = [
        "k-modal k-toast",
        {
          [`k-toast-${type}`]: icons[type] != undefined,
        },
      ];
      return (
        <Modal
          class={classes}
          v-model={visible.value}
          maskClosable={false}
          v-slots={{
            content: () => [header, body, footer],
          }}
        ></Modal>
      );
    };
  },
});
