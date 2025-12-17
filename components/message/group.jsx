import Notice from "./inner";
import { getTransitionProp } from "../base/transition";
let count = 0;
function getUuid() {
  const timestamp = Date.now();
  return `k-message-${timestamp}-${count++}`;
}
import { defineComponent, /*TransitionGroup,*/ ref } from "vue";
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
      if ((closable === true && noticeType == "message") || noticeType == "notice") {
        options.onClose = () => callback(key);
      }
      group.value.push(options);
    };
    const destroy = () => {
      group.value = [];
    };

    expose({ show, destroy });

    return () => {
      const { type } = ps;

      // let transitionProps = { name: `k-${type}-slide` }; for 3
      let transitionProps = { attrs: { name: `k-${type}-slide` } };
      if (type == "notice") {
        transitionProps = getTransitionProp(`k-${type}-slide`);
        // delete transitionProps.onEnter; //for 3
        // delete transitionProps.onBeforeEnter;
        // transitionProps.onBeforeLeave = (el) => {
        delete transitionProps.on.enter;
        delete transitionProps.on.beforeEnter;
        transitionProps.on.beforeLeave = (el) => {
          el.style.height = window.getComputedStyle(el).height;
          el.style.opacity = 1;
        };
      }

      let children = group.value.map((item, i) => {
        // let props = { ...item }; //for 3
        const ps = { ...item };
        delete ps.key;
        const props = {
          key: item.key,
          props: { ...ps }
        }
        return <Notice {...props} />;
      });
      return (
        <transition-group tag="div" class={`k-${type}`} {...transitionProps}>
          {...children}
        </transition-group>
      );
    };
  },
});
