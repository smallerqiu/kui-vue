import { inject } from "vue";

import newInstance from "./instance";

let messageInstance;

let Message = {
  name: "message",
  config(options = {}) {
    options.noticeType = "message";
    if (!messageInstance) {
      messageInstance = newInstance({ type: "message" });
    }
    messageInstance?.show(options);
  },
  destroy() {
    if (messageInstance) {
      messageInstance.destroy();
      messageInstance = null;
      document.body.removeChild(document.querySelector(".k-message"));
    }
  },
  useMessage() {
    return inject("message");
  },
  install(app) {
    // const message = createMessage();
    app.provide('message', this);
    // 可选：同时挂到 globalProperties 兼容 this.$Message
    // app.config.globalProperties.$Message = message;
  }
};
["info", "success", "warning", "error"].forEach((type) => {
  Message[type] = (content, duration, onClose) => {
    return Message.config({ type, content, duration, onClose });
  };
});

export default Message;
