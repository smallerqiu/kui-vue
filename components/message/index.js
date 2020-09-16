import Notices from './notices.jsx'

let messageInstance;

const getInstance = (type) => {
  messageInstance = messageInstance || Notices.newInstance({ type })
  return messageInstance
};

let Message = {
  name: 'Message',
  config(options = {}) {
    options.noticeType = 'message'
    getInstance('message').add(options);
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy()
      messageInstance = null;
      document.body.removeChild(document.getElementsByClassName('k-message'));
    }
  }
};
['info', 'success', 'warning', 'error'].forEach(type => {
  Message[type] = (content, duration, onClose) => {
    return Message.config({ type, content, duration, onClose })
  }
})

export default Message;