import { CircleAlert, CircleCheck, CircleX, Info, X } from "kui-icons";
import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import { Button } from "../button";
import type { BooleanType, NoticeType } from "../const/types";
import Icon, { type IconType } from "../icon";

export const contentProps = {
  type: { type: String as PropType<NoticeType> },
  title: String,
  content: [String, Object],
  icon: Array as PropType<IconType[]>,
  color: String,
  duration: Number,
  closable: Boolean as BooleanType,
  onClose: Function as PropType<() => void>,
  noticeType: { type: String as PropType<"message" | "notice">, default: "message" },
};

export type ContentProps = ExtractPropTypes<typeof contentProps>;

export default defineComponent({
  props: contentProps,
  setup(props, { emit }) {
    const onClose = () => {
      emit("close");
    };
    return () => {
      let { noticeType, type, content, title, closable, icon, color } = props;
      let icons = {
        info: Info,
        error: CircleX,
        success: CircleCheck,
        warning: CircleAlert,
      };
      const AlertIcon = icon ? icon : type ? icons[type] : null;
      const classes = [
        `k-${noticeType}-box`,
        {
          [`k-${noticeType}-${type}`]: type,
          "k-notice-has-icon": AlertIcon,
        },
      ];

      const children = [];
      if (AlertIcon) {
        children.push(<Icon type={AlertIcon} color={color} class={`k-${noticeType}-icon`} />);
      }
      if (noticeType == "message") {
        children.push(<span>{content}</span>);
        if (closable) {
          children.push(
            <Button class="k-message-close" size="small" type="text" icon={X} onClick={onClose} />
          );
        }
      } else {
        children.push(<div class="k-notice-title">{title}</div>);
        children.push(<div class="k-notice-desc">{content}</div>);
        children.push(
          <Button class="k-notice-close" size="small" type="text" icon={X} onClick={onClose} />
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
