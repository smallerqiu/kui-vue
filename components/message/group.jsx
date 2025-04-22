import Notice from "./inner";
import { getTranstionProp } from "../base/transition";
let count = 0;
function getUuid() {
  const timestamp = Date.now();
  return `k-message-${timestamp}-${count++}`;
}
import { defineComponent, TransitionGroup, ref } from "vue";
export default defineComponent({
  props: { type: String },
  setup(ps, { expose }) {
    const group = ref([]);

    const show = (options) => {
      let { duration, close, closable, noticeType } = options;
      let key = getUuid();
      options.key = key;
      options.duration = isNaN(Number(duration)) ? 3.5 : duration;
      let timer;
      let callback = (key) => {
        typeof close === "function" && close();
        group.value = group.value.filter((item) => item.key !== key);
        clearTimeout(timer);
        timer = null;
      };
      options.duration > 0 && (timer = setTimeout(callback, options.duration * 1000, key));
      if ((closable === true && noticeType == "message") || noticeType == "notice") options.onClose = callback;
      group.value.push(options);
    };
    const destroy = () => {
      group.value = [];
    };

    expose({ show, destroy });

    return () => {
      const { type } = ps;

      let transition = { name: `k-${type}-slide` };
      if (type == "notice") {
        transition = getTranstionProp(`k-${type}-slide`);
        delete transition.onEnter;
        delete transition.onBeforeEnter;
        transition.onBeforeLeave = (el) => {
          el.style.height = window.getComputedStyle(el).height;
          el.style.opacity = 1;
        };
      }

      let childs = group.value.map((item, i) => {
        let props = { ...item };
        delete props.duration;
        return <Notice {...props} />;
      });
      return (
        <TransitionGroup tag="div" class={`k-${type}`} {...transition}>
          {...childs}
        </TransitionGroup>
      );
    };
  },
});
