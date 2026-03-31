import { defineComponent, ref, TransitionGroup } from "vue";
import { getTransitionProp } from "../base/transition";
import Notice from "./inner";
let count = 0;
function getUuid() {
  const timestamp = Date.now();
  return `k-message-${timestamp}-${count++}`;
}
export default defineComponent({
  props: { type: String },
  setup(ps, { expose }) {
    const group = ref([]);

    const show = (options) => {
      let { duration, onClose, closable, noticeType } = options;
      let key = getUuid();
      options.key = key;
      options.duration = isNaN(Number(duration)) ? 3.5 : duration;
      let timer;
      let callback = (key) => {
        typeof onClose === "function" && onClose();
        group.value = group.value.filter((item) => item.key !== key);
        clearTimeout(timer);
        timer = null;
      };
      options.duration > 0 && (timer = setTimeout(callback, options.duration * 1000, key));
      if ((closable === true && noticeType == "message") || noticeType == "notice") {
        options.onClose = () => callback(key);
      }
      group.value.push(options);
    };
    const clean = () => {
      group.value = [];
    };

    expose({ show, clean });

    return () => {
      const { type } = ps;

      let transitionProps = { name: `k-${type}-slide` };
      if (type == "notice") {
        transitionProps = getTransitionProp(`k-${type}-slide`);
        delete transitionProps.onEnter; 
        delete transitionProps.onBeforeEnter;
        transitionProps.onBeforeLeave = (el) => {
          el.style.height = window.getComputedStyle(el).height;
          el.style.opacity = 1;
        };
      }

      let children = group.value.map((item, i) => {
        let props = { ...item }; 
        return <Notice {...props} />;
      });
      return (
        <TransitionGroup tag="div" class={`k-${type}`} {...transitionProps}>
          {...children}
        </TransitionGroup>
      );
    };
  },
});
