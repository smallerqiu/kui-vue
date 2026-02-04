import { newInstance } from "./instance";
import { withInstall } from "../utils/vue";

let messageInstance;

let Message = {
  name: "message",
  show(options = {}) {
    options.noticeType = "message";
    if (!messageInstance) {
      messageInstance = newInstance({ type: "message", key: "message" });
    }
    // console.log(messageInstance, options);
    messageInstance?.show(options);
  },
  destroy() {
    if (messageInstance) {
      messageInstance.clean();
      messageInstance.destroy();
      messageInstance = null;
    }
  },
};
["info", "success", "warning", "error"].forEach((type) => {
  Message[type] = (content, duration, onClose) => {
    return Message.show({ type, content, duration, onClose });
  };
});

export default withInstall(Message);
