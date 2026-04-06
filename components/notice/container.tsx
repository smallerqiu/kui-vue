import { defineComponent, ref, TransitionGroup, type TransitionProps } from "vue";
import { getTransitionProp } from "../base/transition";
import Content, { type ContentProps } from "./content";
let count = 0;
function getUuid() {
  const timestamp = Date.now();
  return `k-message-${timestamp}-${count++}`;
}
export default defineComponent({
  props: { type: String },
  setup(ps, { expose }) {
    const options = ref<ContentProps[]>([]);

    const show = (option: ContentProps) => {
      let { duration=3.5, onClose, closable, noticeType } = option;
      let key = getUuid();
      option.key = key;
      let timer: NodeJS.Timeout;
      let callback = (key: string) => {
        typeof onClose === "function" && onClose();
        options.value = options.value.filter((item) => item.key !== key);
        clearTimeout(timer);
      };
      duration > 0 && (timer = setTimeout(callback, duration * 1000, key));
      if ((closable === true && noticeType == "message") || noticeType == "notice") {
        option.onClose = () => callback(key);
      }
      options.value.push(option);
    };
    const clean = () => {
      options.value = [];
    };

    expose({ show, clean });

    return () => {
      const { type } = ps;

      let transitionProps = { name: `k-${type}-slide` } as TransitionProps;
      if (type == "notice") {
        transitionProps = getTransitionProp(`k-${type}-slide`);
        delete transitionProps.onEnter;
        delete transitionProps.onBeforeEnter;
      }

      let children = options.value.map((item) => {
        let props = { ...item };
        return <Content {...props} />;
      });
      return (
        <TransitionGroup tag="div" {...transitionProps}>
          {...children}
        </TransitionGroup>
      );
    };
  },
});
