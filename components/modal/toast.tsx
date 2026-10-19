import { CircleAlert, CircleCheck, CircleQuestionMark, CircleX, Info } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  isRef,
  ref,
  type PropType,
  type Ref,
  type VNodeChild,
} from "vue";
import { Button } from "../button";
import Icon, { type IconType } from "../icon";
import zhCN from "../locale/zh-CN";
import { DEFAULT_LOCALE } from "../config/context";
import { isPromiseLike } from "../utils/promise";
import Modal from "./modal";
import type { ModalApiProps } from "./index";
export default defineComponent({
  name: "Toast",
  props: {
    // title / content 不再限字符串：命令式 API 要能塞 VNode（react 侧是 ReactNode）
    title: [String, Number, Object, Array] as PropType<VNodeChild>,
    okText: String,
    cancelText: String,
    content: [String, Number, Object, Array] as PropType<VNodeChild>,
    color: String,
    icon: Array as PropType<IconType[]>,
    onOk: Function as PropType<NonNullable<ModalApiProps["onOk"]>>,
    onCancel: Function as PropType<NonNullable<ModalApiProps["onCancel"]>>,
    type: {
      type: String as PropType<"info" | "success" | "error" | "warning" | "confirm">,
      default: "info",
    },
  },
  emits: {
    destroy: () => true,
  },
  setup(ps, { expose, emit }) {
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", DEFAULT_LOCALE);
    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });
    const loading = ref(false);
    const visible = ref(false);
    let destroyRequested = false;
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
      const result = ps.onOk?.();
      if (!isPromiseLike(result)) {
        hide();
        return;
      }
      // onOk 返 Promise 时由这层接管：成功才关窗，失败只停 loading、窗口留着让用户改完再试。
      // 失败分支什么都不做的话按钮会一直转圈，等于告诉用户还在忙。
      loading.value = true;
      Promise.resolve(result).then(
        () => {
          loading.value = false;
          hide();
        },
        () => {
          loading.value = false;
        },
      );
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
