import './notice.less'
import './message.less'
import Notices from './notices'
import Vue from 'vue';

Notices.Create = options => {
   const props = options || {};
   const Notice = new Vue({
      render(h) {
         return h(Notices, {
            props: props
         });
      }
   });

   const component = Notice.$mount();
   document.body.appendChild(component.$el);
   const notice = Notice.$children[0];
   return notice
};

let messageInstance;
let noticeInstance;

const getInstance = (type) => {
   if (type == 'message') {
      messageInstance = messageInstance || Notices.Create({ type })
      return messageInstance
   } else {
      noticeInstance = noticeInstance || Notices.Create({ type })
      return noticeInstance
   }
};
const message = (noticeType, type, title, content, duration, close) => {
   getInstance(noticeType).add({
      title, noticeType, duration, content, type, close
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
      messageInstance = null;
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