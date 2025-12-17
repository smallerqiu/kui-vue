import Modal from "./modal.jsx";
import Icon from "../icon";
import { Button } from "../button";
import { defineComponent, ref, inject, computed } from "vue";
import {
  InformationCircle,
  CloseCircle,
  CheckmarkCircle,
  AlertCircle,
  HelpCircle,
} from "kui-icons";
import zhCN from "../locale/zh-CN";
export default defineComponent({
  name: "Toast",
  props: {
    title: String,
    okText: String,
    cancelText: String,
    content: String,
    color: String,
    icon: [Object, Array],
    onOk: Function,
    onCancel: Function,
    type: {
      validator(value) {
        return ["info", "success", "error", "warning", "confirm"].includes(
          value
        );
      },
      default: "info",
    },
  },
  setup(ps, { expose, emit }) {
    const injectedLocale = inject("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });
    const loading = ref(false);
    const visible = ref(false);
    const isPromise = (obj) => {
      return (
        !!obj &&
        (typeof obj === "object" || typeof obj === "function") &&
        typeof obj.then === "function"
      );
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
          .then((e) => {
            hide();
          })
          .catch((e) => {});
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
        info: InformationCircle,
        error: CloseCircle,
        success: CheckmarkCircle,
        warning: AlertCircle,
        confirm: HelpCircle,
      };
      //header
      let header = (
        <div class="k-toast-header">
          {type || icon ? (
            <Icon
              class="k-toast-icon"
              type={icon || icons[type]}
              color={color}
            />
          ) : null}
          <div class="k-toast-title">{title}</div>
        </div>
      );

      //body
      let body = <div class="k-toast-content">{content}</div>;
      //footer
      let footerNode = [
        <Button type="primary" loading={loading.value} onClick={ok}>
          {okText || locale?.value.k.common.ok}
        </Button>,
      ];

      if (type == "confirm") {
        footerNode.unshift(
          <Button onClick={cancel}>
            {" "}
            {cancelText || locale?.value.k.common.cancel}
          </Button>
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
          // v-model:show={visible.value} //for 3
          value={visible.value}
          // show={visible.value}  //for 3
          maskClosable={false}
          transfer={false}
          // v-slots={{ //for 3
          scopedSlots={{
            content: () => [header, body, footer],
          }}
        ></Modal>
      );
    };
  },
});
