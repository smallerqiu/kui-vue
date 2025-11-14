import { defineComponent } from "vue";
import { withInstall } from '../utils/vue';
const Badge = defineComponent({
  name: "Badge",
  props: {
    count: [String, Number],
    dot: Boolean,
    color: String,
    status: {
      type: String,
      // validator: (value) => {
      //   ['default', 'success', 'error', 'warning'].indexOf(value) > -1
      // },
      default: "default",
    },
    text: String,
    maxCount: { type: Number, default: 99 },
  },
  setup(props, { slots }) {
    return () => {
      const { maxCount, count, dot, color, status, text } = props;
      let innerText = null,
        statusNodes = [];
      const children = slots.default?.();

      if (typeof count === "number" && count > 0) {
        innerText = count > maxCount ? maxCount + "+" : count;
      } else if (typeof count === "string") {
        innerText = count;
      } else if ((status || color) && !dot && !children?.length) {
        const _props = {
          class: [
            "k-badge-status-dot",
            {
              [`k-badge-status-${status}`]: status,
              [`k-badge-status-${color}`]: color && !/^#/.test(color),
            },
          ],
          style: {
            backgroundColor: /^#/.test(color) ? color : null,
          },
        };
        statusNodes.push(<span {..._props}></span>);
        if (text) statusNodes.push(<span class="k-badge-status-text">{text}</span>);
      }

      const _props = {
        class: {
          "k-badge-count": count !== undefined,
          "k-badge-dot": dot,
          "k-badge-no-child": !children?.length,
          [`k-badge-${status}`]: status,
        },
        style: { backgroundColor: color },
      };
      const supNode = innerText !== null || dot ? <sup {..._props}>{innerText}</sup> : null;
      return (
        <div class="k-badge">
          {children}
          {supNode}
          {statusNodes}
        </div>
      );
    };
  },
});
export default withInstall(Badge);
