import { newInstance } from "../message/instance";
import { withInstall } from "../utils/vue";
let noticeInstance;

let Notice = {
  name: "notice",
  open(options = {}, context = null) {
    options = Object.assign({ type: null }, options);
    if (options.icon) {
      delete options.type;
    }
    options.noticeType = "notice";
    if (!noticeInstance) {
      noticeInstance = newInstance({ type: "notice", key: "notice" }, context);
    }
    noticeInstance.show(options);
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
  Notice[type] = (options) => {
    return Notice.open({ type, ...options });
  };
});

export default withInstall(Notice);
