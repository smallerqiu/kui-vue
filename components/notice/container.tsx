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
    const options = ref<any[]>([]);

    const show = (option: ContentProps) => {
      let { duration = 3.5, onClose, closable, noticeType, grouping } = option;

      // 相同 grouping 的通知只更新内容，不新增条目
      if (grouping) {
        const existingItem = options.value.find((item) => item.grouping === grouping);
        if (existingItem) {
          existingItem.content = option.content;
          existingItem.type = option.type;
          if (option.icon !== undefined) existingItem.icon = option.icon;
          if (option.color !== undefined) existingItem.color = option.color;
          // 重置自动关闭计时器
          clearTimeout(existingItem.__timer);
          if (duration > 0) {
            existingItem.__timer = setTimeout(existingItem.__callback, duration * 1000);
          }
          return existingItem.__callback;
        }
      }

      const key = getUuid();
      let timer: NodeJS.Timeout | undefined = undefined;
      let callback = () => {
        typeof onClose === "function" && onClose();
        options.value = options.value.filter((item) => item.key !== key);
        clearTimeout(timer);
      };
      duration > 0 && (timer = setTimeout(callback, duration * 1000));
      if ((closable === true && noticeType == "message") || noticeType == "notice") {
        option.onClose = () => callback();
      }
      options.value.push({ ...option, key, __timer: timer, __callback: callback });

      return callback;
    };
    const clean = () => {
      options.value = [];
    };

    expose({ show, clean });

    return () => {
      const { type } = ps;

      let transitionProps = { name: `k-${type}-slide`, class: `k-${type}` } as TransitionProps;
      if (type == "notice") {
        const p = getTransitionProp(`k-${type}-slide`);
        delete p.onEnter;
        delete p.onBeforeEnter;
        transitionProps = { ...p, ...transitionProps };
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
