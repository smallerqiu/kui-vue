import { defineComponent } from "vue";


const Badge = defineComponent({
  name: "Badge",
  props: {
    count: [String, Number],
    dot: Boolean,
    color: String,
    status: {
      type: String,
      default: "default",
      validator: (value) => {
        return ["default", "success", "error", "warning"].indexOf(value) > -1;
      },
    },
    text: String,
    maxCount: { type: Number, default: 99 },
  },
  setup(props, { slots }) {
    return () => {
      const { maxCount, count, dot, color, status, text } = props;

      const children = slots.default?.();

      const hasChildren = children && children.length > 0;

      let displayCount = null;
      if (typeof count === "number" && count > 0) {
        displayCount = count > maxCount ? `${maxCount}+` : count;
      } else if (typeof count === "string" && count.length > 0) {
        displayCount = count;
      }

      const isStatusType = !hasChildren && (status || color) && !dot;

      let statusNodes = [];
      if (isStatusType && !displayCount) {
        const isHexColor = color && /^#/.test(color);
        const dotCls = [
          "k-badge-status-dot",
          {
            [`k-badge-status-${status}`]: !!status,
            [`k-badge-status-${color}`]: color && !isHexColor,
          },
        ];

        const dotStyle = {
          backgroundColor: isHexColor ? color : null,
        };

        statusNodes.push(<span class={dotCls} style={dotStyle}></span>);

        if (text) {
          statusNodes.push(<span class="k-badge-status-text">{text}</span>);
        }
      }

      const showSup = displayCount !== null || dot; //&& !isStatusType;
      let supNode = null;
      if (showSup) {
        const supCls = {
          "k-badge-count": !dot && displayCount !== null,
          "k-badge-dot": dot,
          "k-badge-no-child": !hasChildren,
          [`k-badge-${status}`]: !!status && !color,
        };

        const supStyle = {
          backgroundColor: color,
        };

        supNode = (
          <sup class={supCls} style={supStyle}>
            {!dot ? displayCount : null}
          </sup>
        );
      }

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
export default Badge;
