import Icon from '../icon'
import { Close, InformationCircle, CloseCircle, CheckmarkCircle, AlertCircle } from 'kui-icons'
export default {
  props: {
    type: { type: String, default: "info" },
    title: String,
    name: String,
    content: [String, Object],
    icon: [String, Array],
    color: String,
    closable: Boolean,
    noticeType: { type: String, default: "message" },
    onClose: { type: Function, default: () => { } }
  },
  render() {
    let { noticeType, type, content, title, onClose, closable, icon, color } = this
    const classes = [`k-${noticeType}-box`, `k-${noticeType}-${type}`, {
      'k-notice-has-icon': noticeType == 'notice' && type != 'default'
    }];
    let childNode;
    let icons = {
      info: InformationCircle,
      error: CloseCircle,
      success: CheckmarkCircle,
      warning: AlertCircle
    };
    let iconNode = type != 'default' ? <Icon type={icon || icons[type]} color={color} class={`k-${noticeType}-icon`} /> : null
    if (noticeType == 'message') {

      childNode = (
        <div class="k-message-content">
          {iconNode}
          <span>{content}</span>
          {closable ? <Icon class="k-message-close" type={Close} onClick={onClose} /> : null}
        </div>
      )
    } else {
      childNode = (
        <div class="k-notice-content">
          {iconNode}
          <div class="k-notice-title">{title}</div>
          <div class="k-notoce-desc">{content}</div>
          <Icon class="k-notice-close" type={Close} onClick={onClose} />
        </div>
      )
    }
    return (
      <div class={classes}>
        {childNode}
      </div >
    )
  }
}