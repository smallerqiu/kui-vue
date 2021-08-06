import newInstance from './instance'

let messageInstance;

let Message = {
  name: 'Message',
  config(options = {}) {
    options.noticeType = 'message'
    if (!messageInstance) {
      messageInstance = newInstance({ type: 'message' })
    }
    messageInstance.show(options);
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null;
      document.body.removeChild(document.querySelector('.k-message'));
    }
  }
};
['info', 'success', 'warning', 'error'].forEach(type => {
  Message[type] = (content, duration, onClose) => {
    return Message.config({ type, content, duration, onClose })
  }
})

export default Message;