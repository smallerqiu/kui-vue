import { createInstance } from "../notice/instance";

let messageInstance: Record<string, any> | null | undefined = null;

export interface MessageOptions {
  type?: "info" | "success" | "warning" | "error";
  content?: string;
  duration?: number;
  closable?: boolean;
  icon?: string;
  color?: string;
  onClose?: () => void;
}
export interface MessageApi {
  name: "message";
  info(content: string, duration?: number, onClose?: () => void): void;
  success(content: string, duration?: number, onClose?: () => void): void;
  warning(content: string, duration?: number, onClose?: () => void): void;
  error(content: string, duration?: number, onClose?: () => void): void;
  show(options: MessageOptions): void;
  destroy(): void;
}
const message: MessageApi = {
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
  info(content: string, duration: number, onClose: () => void) {
    return this.show({ type: "info", content, duration, onClose });
  },
  error(content: string, duration: number, onClose: () => void) {
    return this.show({ type: "error", content, duration, onClose });
  },
  success(content: string, duration: number, onClose: () => void) {
    return this.show({ type: "success", content, duration, onClose });
  },
  warning(content: string, duration: number, onClose: () => void) {
    return this.show({ type: "warning", content, duration, onClose });
  },
};

export default message;
