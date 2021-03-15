import Icon from '../icon'
export default {
  props: {
    type: { type: String, default: "info" },
    title: String,
    name: String,
    content: String,
    closable: Boolean,
    noticeType: { type: String, default: "message" },
    onClose: { type: Function, default: () => { } }
  },
  render() {
    let { noticeType, type, content, title, onClose, closable } = this
    const classes = [`k-${noticeType}-box`, `k-${noticeType}-${type}`, {
      'k-notice-has-icon': noticeType == 'notice' && type != 'default'
    }];
    let childNode;
    let icons = {
      info: "information-circle",
      error: "close-circle",
      success: "checkmark-circle",
      warning: "alert-circle"
    };
    let iconNode = type != 'default' ? <Icon type={icons[type]} class={`k-${noticeType}-icon`} /> : null
    if (noticeType == 'message') {

      childNode = (
        <div class="k-message-content">
          {iconNode}
          <span>{content}</span>
          {closable ? <Icon class="k-message-close" type="close" onClick={onClose} /> : null}
        </div>
      )
    } else {
      childNode = (
        <div class="k-notice-content">
          {iconNode}
          <div class="k-notice-title">{title}</div>
          <div class="k-notoce-desc">{content}</div>
          <Icon class="k-notice-close" type="close" onClick={onClose} />
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