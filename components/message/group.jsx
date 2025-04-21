import Notice from "./inner";
import { getTranstionProp } from "../base/transition";

let count = 0;
const timestamp = Date.now();
function getUuid() {
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
      options.name = key;
      options.duration = isNaN(Number(duration)) ? 3.5 : duration;
      let timer;
      let callback = () => {
        typeof close === "function" && close();
        group.value = group.value.filter((item) => item.name !== key);
        clearTimeout(timer);
        timer = null;
      };
      options.duration > 0 && (timer = setTimeout(callback, options.duration * 1000));
      if ((closable === true && noticeType == "message") || noticeType == "notice") options.onClose = callback;
      group.value.push(options);
    };
    const destroy = () => {
      group.value = [];
    };

    expose({ show, destroy });

    const { type } = ps;
    let transition = getTranstionProp();
    delete transition.onEnter;
    delete transition.onBeforeEnter;
    transition.onBeforeLeave = (el) => {
      el.style.height = window.getComputedStyle(el).height;
      el.style.opacity = 1;
    };
    let childs = group.value.map((item, i) => {
      let props = { props: { ...item } };
      let key = item.name || getUuid();
      return <Notice {...props} key={key} />;
    });
    return (
      <TransitionGroup tag="div" class={`k-${type}`} name={`k-${type}-slide`} {...transition}>
        {childs}
      </TransitionGroup>
    );
  },
});
