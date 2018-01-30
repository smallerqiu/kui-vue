import Notices from './notices'
import Vue from 'vue';

Notices.Instance = properties => {
   const _props = properties || {};
   const Instance = new Vue({
      render(h) {
         return h(Notices, {
            props: _props
         });
      }
   });

   const component = Instance.$mount();
   document.body.appendChild(component.$el);
   const notice = Instance.$children[0];
   return notice
};

let messageInstance;
let noticeInstance;

const getInstance = (type) => {
   if (type == 'message') {
      messageInstance = messageInstance || Notices.Instance({ type: type })
      return messageInstance
   } else {
      noticeInstance = noticeInstance || Notices.Instance({ type: type })
      return noticeInstance
   }
};
const message = (noticeType, type, title, content, duration, onClose) => {
   getInstance(noticeType).add({
      title: title,
      noticeType: noticeType,
      duration: duration,
      content: content,
      type: type,
      onClose: onClose,
   });
}

let Message = {
   name: 'Message',
   info(content, duration, onClose) {
      message('message', 'info', null, content, duration, onClose);
   },
   success(content, duration, onClose) {
      message('message', 'success', null, content, duration, onClose);
   },
   warning(content, duration, onClose) {
      message('message', 'warning', null, content, duration, onClose);
   },
   error(content, duration, onClose) {
      message('message', 'error', null, content, duration, onClose);
   },
   config(options) {
      options.noticeType = 'message'
      getInstance('message').add(options);
   },
   destroy() {
      Instance = null;
      document.body.removeChild(document.getElementsByClassName('k-message'));
   }
};
let Notice = {
   name: 'Notice',
   info(options) {
      options.type = 'info'
      options.noticeType = 'notice'
      getInstance('notice').add(options);
   },
   success(options) {
      options.type = 'success'
      options.noticeType = 'notice'
      getInstance('notice').add(options);
   },
   warning(options) {
      options.type = 'warning'
      options.noticeType = 'notice'
      getInstance('notice').add(options);
   },
   error(options) {
      options.type = 'error'
      options.noticeType = 'notice'
      getInstance('notice').add(options);
   },
   open(options) {
      options.noticeType = 'notice'
      options.type = null
      getInstance('notice').add(options);
   },
   destroy() {
      noticeInstance = null;
      document.body.removeChild(document.getElementsByClassName('k-notice'));
   }
}

export { Message, Notice };