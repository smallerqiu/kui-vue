import { defineComponent, type CSSProperties, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType } from "../const/types";
export type BadgeStatusType = "default" | "success" | "error" | "warning";
const badgeProps = {
  count: [String, Number],
  dot: Boolean as BooleanType,
  color: String,
  status: {
    type: String as PropType<BadgeStatusType>,
    default: "default",
  },
  text: String,
  maxCount: { type: Number, default: 99 },
};

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;

const Badge = defineComponent({
  name: "Badge",
  props: badgeProps,
  setup(props, { slots }) {
    return () => {
      const { maxCount, count, dot, color, status, text } = props;

      const children = slots.default?.();
      const hasChildren = !!(children && children.length > 0);

      let displayCount: string | number | null = null;
      if (typeof count === "number" && count > 0) {
        displayCount = count > maxCount ? `${maxCount}+` : count;
      } else if (typeof count === "string" && count.length > 0) {
        displayCount = count;
      }

      const isStatusType = !hasChildren && (status || color) && !dot;

      const statusNodes = [];
      if (isStatusType && !displayCount) {
        const isHexColor = color && /^#/.test(color);

        const dotProps = {
          class: [
            "k-badge-status-dot",
            {
              [`k-badge-status-${status}`]: !!status,
              [`k-badge-status-${color}`]: color && !isHexColor,
            },
          ],
          style: {
            backgroundColor: isHexColor ? color : undefined,
          } as CSSProperties,
        };

        statusNodes.push(<span {...dotProps} />);

        if (text) {
          statusNodes.push(<span class="k-badge-status-text">{text}</span>);
        }
      }

      const showSup = displayCount !== null || dot;
      let supNode = null;

      if (showSup) {
        const supProps = {
          class: [
            {
              "k-badge-count": !dot && displayCount !== null,
              "k-badge-dot": dot,
              "k-badge-no-child": !hasChildren,
              [`k-badge-${status}`]: !!status && !color,
            },
          ],
          style: {
            backgroundColor: color,
          } as CSSProperties,
        };

        supNode = <sup {...supProps}>{!dot ? displayCount : null}</sup>;
      }

      const rootProps = {
        class: "k-badge",
      };

      return (
        <div {...rootProps}>
          {children}
          {supNode}
          {statusNodes}
        </div>
      );
    };
  },
});

export default Badge;
