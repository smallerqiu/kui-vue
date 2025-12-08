import newInstance from "./instance";
import { inject } from "vue";
import { withInstall } from '../utils/vue';

let messageInstance;

let Message = {
  name: "message",
  show(options = {}) {
    options.noticeType = "message";
    if (!messageInstance) {
      messageInstance = newInstance({ type: "message" });
    }
    // console.log(messageInstance, options);
    messageInstance?.show(options);
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
      document.body.removeChild(document.querySelector(".k-message"));
    }
  },
  install(app) {
    // app.provide("message", Message);
    // 可选：同时挂到 globalProperties 兼容 this.$message
    // app.config.globalProperties.$message = Message; //for 3
    app.prototype.$message = Message;
  },
  useMessage() {
    // return inject("message"); //for 3
    return Message
  },
};
["info", "success", "warning", "error"].forEach((type) => {
  Message[type] = (content, duration, onClose) => {
    return Message.show({ type, content, duration, onClose });
  };
});

export default withInstall(Message);
