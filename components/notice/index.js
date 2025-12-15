// import { inject } from "vue";
import newInstance from "../message/instance";
import { withInstall } from "../utils/vue";
import { getCurrentInstance } from "vue";
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
      noticeInstance = null;
      document.body.removeChild(document.querySelector(".k-notice"));
    }
  },
  useNotice() {
    // return inject("notice"); //for 3
    const instance = getCurrentInstance();
    const proxy = instance ? instance.proxy : null;
    // console.log(proxy);
    const noticeWrapper = {};

    ["info", "success", "warning", "error", "open"].forEach((type) => {
      noticeWrapper[type] = (props = {}) => {
        return Notice.open({ type, ...props }, proxy);
      };
    });

    noticeWrapper.destroy = noticeWrapper.destroy;

    return noticeWrapper;
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
