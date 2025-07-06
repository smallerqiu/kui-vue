import Icon from "../icon";
import { Close, InformationCircle, CloseCircle, CheckmarkCircle, AlertCircle } from "kui-icons";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    type: { type: String, default: "info" },
    title: String,
    name: String,
    content: [String, Object],
    icon: [String, Array],
    color: String,
    closable: Boolean,
    noticeType: { type: String, default: "message" },
    onClose: { type: Function, default: () => {} },
  },
  setup(ps) {
    return () => {
      let { noticeType, type, content, title, onClose, closable, icon, color } = ps;
      const classes = [
        `k-${noticeType}-box`,
        `k-${noticeType}-${type}`,
        {
          "k-notice-has-icon": noticeType == "notice" && type != "default",
        },
      ];
      let icons = {
        info: InformationCircle,
        error: CloseCircle,
        success: CheckmarkCircle,
        warning: AlertCircle,
      };
      const children = [];
      if (type != "default") {
        children.push(<Icon type={icon || icons[type]} color={color} class={`k-${noticeType}-icon`} />);
      }
      if (noticeType == "message") {
        children.push(<span>{content}</span>);
        if (closable) {
          children.push(<Icon class="k-message-close" type={Close} onClick={onClose} />);
        }
      } else {
        children.push(<div class="k-notice-title">{title}</div>);
        children.push(<div class="k-notoce-desc">{content}</div>);
        children.push(<Icon class="k-notice-close" type={Close} onClick={onClose} />);
      }
      return (
        <div class={classes}>
          <div class={`k-${noticeType}-content`}>{...children}</div>
        </div>
      );
    };
  },
});
