import Icon from "../icon";
import { Button } from "../button";
import {
  Close,
  InformationCircle,
  CloseCircle,
  CheckmarkCircle,
  AlertCircle,
} from "kui-icons/dist/icons";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    type: { type: String, default: "info" },
    title: String,
    content: [String, Object],
    icon: [String, Array],
    color: String,
    duration: Number,
    closable: Boolean,
    noticeType: { type: String, default: "message" },
  },
  setup(ps, { emit }) {
    const onClose = () => {
      emit("close");
    };
    return () => {
      let { noticeType, type, content, title, closable, icon, color } = ps;
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
