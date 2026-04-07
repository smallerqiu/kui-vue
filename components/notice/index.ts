import type { VNode } from "vue";
import { createInstance } from "./instance";

let noticeInstance: Record<string, any> | null | undefined = null;

export interface NoticeOptions {
  type?: "info" | "success" | "warning" | "error";
  title?: string;
  content?: string | VNode;
  duration?: number;
  icon?: string;
  color?: string;
  onClose?: () => void;
}
export interface NoticeApi {
  name: "notice";
  info(options: NoticeOptions): void;
  success(options: NoticeOptions): void;
  warning(options: NoticeOptions): void;
  error(options: NoticeOptions): void;
  open(options: NoticeOptions): void;
  destroy(): void;
}
let notice: NoticeApi = {
  name: "notice",
  open(options: NoticeOptions) {
    if (!noticeInstance) {
      noticeInstance = createInstance("notice");
    }
    const props = Object.assign(options, { noticeType: "notice" });
    noticeInstance?.show(props);
  },
  destroy() {
    if (noticeInstance) {
      noticeInstance.clean();
      noticeInstance.destroy();
      noticeInstance = null;
    }
  },
  info(options: NoticeOptions) {
    return this.open({ ...options, type: "info" });
  },
  success(options: NoticeOptions) {
    return this.open({ ...options, type: "info" });
  },
  warning(options: NoticeOptions) {
    return this.open({ ...options, type: "info" });
  },
  error(options: NoticeOptions) {
    return this.open({ ...options, type: "info" });
  },
};

export default notice;
