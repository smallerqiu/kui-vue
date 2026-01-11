import newInstance from "./instance";
import { withInstall } from "../utils/vue";

let messageInstance;

let Message = {
  name: "message",
  show(options = {}) {
    options.noticeType = "message";
    if (!messageInstance) {
      messageInstance = newInstance({ props: { type: "message" } });
    }
    // console.log(messageInstance, options);
    messageInstance?.show(options);
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      document.body.removeChild(messageInstance.$el);
      messageInstance = null;
    }
  },
  install(app) {
    // app.provide("message", Message);
    // 可选：同时挂到 globalProperties 兼容 this.$message
    // app.config.globalProperties.$message = Message; //for 3
    app.prototype.$message = Message;
  },
};
["info", "success", "warning", "error"].forEach((type) => {
  Message[type] = (content, duration, onClose) => {
    return Message.show({ type, content, duration, onClose });
  };
});

export default withInstall(Message);
