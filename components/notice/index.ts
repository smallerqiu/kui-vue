import { createInstance } from "./instance";

let noticeInstance: Record<string, any> | null | undefined = null;

export interface NoticeOptions {
  title?: string;
  content?: string;
  duration?: number;
  icon?: string;
  color?: string;
  onClose?: () => void;
}
let notice: any = {
  name: "notice",
  open(options: NoticeOptions = {}) {
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
    return this.open({ type: "info", ...options });
  },
  success(options: NoticeOptions) {
    return this.open({ type: "success", ...options });
  },
  warning(options: NoticeOptions) {
    return this.open({ type: "warning", ...options });
  },
  error(options: NoticeOptions) {
    return this.open({ type: "error", ...options });
  },
};

export default notice;
