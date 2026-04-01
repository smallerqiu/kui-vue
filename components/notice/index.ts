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
let Notice: any = {
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
};

["info", "success", "warning", "error"].forEach((type) => {
  Notice[type] = (options: NoticeOptions) => {
    return Notice.open({ type, ...options });
  };
});

export default Notice;
