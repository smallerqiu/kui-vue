import newInstance from '../message/instance'

let noticeInstance;

let Notice = {
  name: 'Notice',
  open(options = {}) {
    options = Object.assign({ type: 'default' }, options)
    if (options.icon) {
      delete options.type
    }
    options.noticeType = 'notice'
    if (!noticeInstance) {
      noticeInstance = newInstance({ type: 'notice' })
    }
    noticeInstance.show(options);
  },
  destroy() {
    if (noticeInstance) {
      noticeInstance.destroy()
      noticeInstance = null;
      document.body.removeChild(document.querySelector('.k-notice'));
    }
  }
};

['info', 'success', 'warning', 'error'].forEach(type => {
  Notice[type] = (options) => {
    return Notice.open({ type, ...options })
  }
});

export default Notice;