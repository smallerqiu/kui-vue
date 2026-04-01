import { createInstance } from "../notice/instance";

let messageInstance: Record<string, any> | null | undefined = null;

export interface MessageOptions {
  content?: string;
  duration?: number;
  icon?: string;
  color?: string;
  onClose?: () => void;
}
let Message: any = {
  name: "message",
  show(options: MessageOptions = {}) {
    if (!messageInstance) {
      messageInstance = createInstance("message");
    }
    const props = Object.assign(options, { noticeType: "message" });
    messageInstance?.show(props);
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
  Message[type] = (content: string, duration: number, onClose: () => void) => {
    return Message.show({ type, content, duration, onClose });
  };
});

export default Message;
