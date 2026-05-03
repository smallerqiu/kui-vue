import type { NoticeType } from "../const/types";
import type { IconType } from "../icon";
import type { ContentProps } from "../notice/content";
import { createInstance, type NoticeInstance } from "../notice/instance";

let messageInstance: NoticeInstance | null = null;

export interface MessageOptions {
  type?: NoticeType;
  content?: string;
  duration?: number;
  closable?: boolean;
  icon?: IconType[];
  color?: string;
  onClose?: () => void;
}
export interface MessageApi {
  name: "message";
  info(content: string, duration?: number, onClose?: () => void): void;
  success(content: string, duration?: number, onClose?: () => void): void;
  warning(content: string, duration?: number, onClose?: () => void): void;
  error(content: string, duration?: number, onClose?: () => void): void;
  loading(content: string, duration?: number): () => void;
  show(options: MessageOptions): () => void;
  destroy(): void;
}
const message: MessageApi = {
  name: "message",
  show(options: MessageOptions = {}) {
    if (!messageInstance) {
      messageInstance = createInstance("message");
    }
    const props = Object.assign(options, { noticeType: "message" }) as ContentProps;
    return messageInstance?.show(props);
  },
  destroy() {
    if (messageInstance) {
      messageInstance.clean();
      messageInstance.destroy();
      messageInstance = null;
    }
  },
  info(content: string, duration?: number, onClose?: () => void) {
    return this.show({ type: "info", content, duration, onClose });
  },
  error(content: string, duration?: number, onClose?: () => void) {
    return this.show({ type: "error", content, duration, onClose });
  },
  success(content: string, duration?: number, onClose?: () => void) {
    return this.show({ type: "success", content, duration, onClose });
  },
  warning(content: string, duration?: number, onClose?: () => void) {
    return this.show({ type: "warning", content, duration, onClose });
  },
  loading(content: string, duration?: number) {
    return this.show({ type: "loading", content, duration });
  },
};

export default message;
