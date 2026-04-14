import { AlertCircle, CheckmarkCircle, Close, CloseCircle, InformationCircle } from "kui-icons";
import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import { Button } from "../button";
import type { BooleanType } from "../const/types";
import Icon, { type IconType } from "../icon";

export const contentProps = {
  type: { type: String as PropType<"info" | "error" | "success" | "warning">, default: "info" },
  title: String,
  content: [String, Object],
  icon:  Array as PropType<IconType[]>,
  color: String,
  duration: Number,
  closable: Boolean as BooleanType,
  onClose: Function as PropType<() => void>,
  noticeType: { type: String as PropType<"message" | "notice">, default: "message" },
};

export type ContentProps = ExtractPropTypes<typeof contentProps>;

export default defineComponent({
  props: contentProps,
  emits: ["close"],
  setup(props, { emit }) {
    const onClose = () => {
      emit("close");
    };
    return () => {
      let { noticeType, type, content, title, closable, icon, color } = props;
      const classes = [
        `k-${noticeType}-box`,
        {
          [`k-${noticeType}-${type}`]: type,
          "k-notice-has-icon": noticeType == "notice" && type,
        },
      ];
      let icons = {
        info: InformationCircle,
        error: CloseCircle,
        success: CheckmarkCircle,
        warning: AlertCircle,
      };
      const children = [];
      if (type in icons) {
        children.push(
          <Icon type={icon || icons[type]} color={color} class={`k-${noticeType}-icon`} />
        );
      }
      if (noticeType == "message") {
        children.push(<span>{content}</span>);
        if (closable) {
          children.push(
            <Button
              class="k-message-close"
              size="small"
              type="text"
              icon={Close}
              onClick={onClose}
            />
          );
        }
      } else {
        children.push(<div class="k-notice-title">{title}</div>);
        children.push(<div class="k-notice-desc">{content}</div>);
        children.push(
          <Button class="k-notice-close" size="small" type="text" icon={Close} onClick={onClose} />
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
