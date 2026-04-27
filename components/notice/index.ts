import type { VNode } from "vue";
import type { NoticeType } from "../const/types";
import type { IconType } from "../icon";
import { createInstance } from "./instance";

let noticeInstance: Record<string, any> | null | undefined = null;

export interface NoticeOptions {
  type?: NoticeType;
  title?: string;
  content?: string | VNode;
  duration?: number;
  icon?: IconType[];
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
const notice: NoticeApi = {
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
    return this.open({ ...options, type: "success" });
  },
  warning(options: NoticeOptions) {
    return this.open({ ...options, type: "warning" });
  },
  error(options: NoticeOptions) {
    return this.open({ ...options, type: "error" });
  },
};

export default notice;
