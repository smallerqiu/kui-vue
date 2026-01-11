// import { inject } from "vue";
import newInstance from "../message/instance";
import { withInstall } from "../utils/vue";
let noticeInstance;

let Notice = {
  name: "notice",
  open(options = {}, context = null) {
    options = Object.assign({ type: null }, options);
    if (options.icon) {
      delete options.type;
    }
    options.noticeType = "notice";
    if (!noticeInstance) {
      noticeInstance = newInstance({ props: { type: "notice" } }, context);
    }
    noticeInstance.show(options);
  },
  destroy() {
    if (noticeInstance) {
      noticeInstance.destroy();
      document.body.removeChild(noticeInstance.$el);
      noticeInstance = null;
    }
  },
  install(app) {
    // app.provide("notice", Notice);
    // 可选：同时挂到 globalProperties 兼容 this.$notice
    // app.config.globalProperties.$notice = Notice;
    app.prototype.$notice = Notice;
  },
};

["info", "success", "warning", "error"].forEach((type) => {
  Notice[type] = (options) => {
    return Notice.open({ type, ...options });
  };
});

export default withInstall(Notice);
