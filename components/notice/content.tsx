import { CircleAlert, CircleCheck, CircleX, Info, Loading, X } from "kui-icons";
import { defineComponent, h, type ExtractPropTypes, type PropType, type VNode } from "vue";
import { Button } from "../button";
import type { BooleanType, NoticeType } from "../const/types";
import Icon, { type IconType } from "../icon";

export const contentProps = {
  type: { type: String as PropType<NoticeType> },
  title: String,
  content: [String, Object] as PropType<string | VNode>,
  icon: Array as PropType<IconType[]>,
  color: String,
  duration: Number,
  closable: Boolean as BooleanType,
  noticeType: { type: String as PropType<"message" | "notice">, default: "message" },
  grouping: String,
};

export type ContentProps = ExtractPropTypes<typeof contentProps>;

const NoticeContent = defineComponent({
  props: contentProps,
  emits: {
    close: () => true,
  },
  setup(props, { emit }) {
    const onClose = () => {
      emit("close");
    };
    return () => {
      const { noticeType, type, content, title, closable, icon, color } = props;
      const icons = {
        info: Info,
        error: CircleX,
        success: CircleCheck,
        warning: CircleAlert,
        loading: Loading,
      };
      const AlertIcon = icon ? icon : type ? icons[type] : null;
      const classes = [
        `k-${noticeType}-box`,
        {
          [`k-${noticeType}-${type}`]: type,
          "k-notice-has-icon": AlertIcon && noticeType == "notice",
        },
      ];

      const children = [];
      if (AlertIcon) {
        children.push(
          <Icon
            type={AlertIcon}
            color={color}
            class={`k-${noticeType}-icon`}
            spin={type == "loading"}
          />,
        );
      }
      if (noticeType == "message") {
        children.push(<span>{content}</span>);
        if (closable) {
          children.push(
            <Button class="k-message-close" size="small" type="text" icon={X} onClick={onClose} />,
          );
        }
      } else {
        children.push(<div class="k-notice-title">{title}</div>);
        children.push(<div class="k-notice-desc">{content}</div>);
        children.push(
          <Button class="k-notice-close" size="small" type="text" icon={X} onClick={onClose} />,
        );
      }
      return (
        <div class={classes}>
          <div class={`k-${noticeType}-content`}>{...children}</div>
        </div>
      );
    };
  },
});

export const MessagePanel = defineComponent({
  name: "MessagePanel",
  inheritAttrs: false,
  props: contentProps,
  setup:
    (props, { attrs, slots }) =>
    () =>
      h(NoticeContent, { ...attrs, ...props, noticeType: "message", closable: false }, slots),
});

export const NoticePanel = defineComponent({
  name: "NoticePanel",
  inheritAttrs: false,
  props: contentProps,
  setup:
    (props, { attrs, slots }) =>
    () =>
      h(NoticeContent, { ...attrs, ...props, noticeType: "notice", closable: false }, slots),
});

export default NoticeContent;
