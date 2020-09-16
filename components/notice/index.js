import Notices from '../message/notices.jsx'

let noticeInstance;

const getInstance = (type) => {
  noticeInstance = noticeInstance || Notices.newInstance({ type })
  return noticeInstance
};

let Notice = {
  name: 'Notice',
  open(options = {}) {
    options = Object.assign({ type: 'default', noticeType: 'notice' }, options)
    options.noticeType = 'notice'
    // options.type = null
    getInstance('notice').add(options);
  },
  destroy() {
    if (noticeInstance) {
      noticeInstance.destroy()
      noticeInstance = null;
      document.body.removeChild(document.getElementsByClassName('k-notice'));
    }
  }
};

['info', 'success', 'warning', 'error'].forEach(type => {
  Notice[type] = (options) => {
    return Notice.open({ type, ...options })
  }
});

export default Notice;