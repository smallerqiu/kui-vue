import type { VNode } from "vue";
import type { NoticeType } from "../const/types";
import type { IconType } from "../icon";
import type { ContentProps } from "../notice/content";
import { createInstance, type NoticeInstance } from "../notice/instance";

let messageInstance: NoticeInstance | null = null;

export interface MessageOptions {
  type?: NoticeType;
  content?: string | VNode;
  duration?: number;
  closable?: boolean;
  icon?: IconType[];
  color?: string;
  onClose?: () => void;
  /** 相同 grouping 的通知会复用同一条目，只更新内容和重置计时器，不会新增 */
  grouping?: string;
}
export interface MessageApi {
  name: "message";
  info(content: string | VNode, duration?: number, onClose?: () => void): void;
  success(content: string | VNode, duration?: number, onClose?: () => void): void;
  warning(content: string | VNode, duration?: number, onClose?: () => void): void;
  error(content: string | VNode, duration?: number, onClose?: () => void): void;
  loading(content: string | VNode, duration?: number): () => void;
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
  info(content: string | VNode, duration?: number, onClose?: () => void) {
    return this.show({ type: "info", content, duration, onClose });
  },
  error(content: string | VNode, duration?: number, onClose?: () => void) {
    return this.show({ type: "error", content, duration, onClose });
  },
  success(content: string | VNode, duration?: number, onClose?: () => void) {
    return this.show({ type: "success", content, duration, onClose });
  },
  warning(content: string | VNode, duration?: number, onClose?: () => void) {
    return this.show({ type: "warning", content, duration, onClose });
  },
  loading(content: string | VNode, duration?: number) {
    return this.show({ type: "loading", content, duration });
  },
};

export default message;
