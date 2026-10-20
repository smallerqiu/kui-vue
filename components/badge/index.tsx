import {
  defineComponent,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type VNode,
} from "vue";
import type { BadgeStatusType, BooleanType } from "../const/types";
import RollUp from "../stat-card/rollup";
const badgeProps = {
  count: [String, Number],
  dot: Boolean as BooleanType,
  pill: Boolean as BooleanType,
  color: String,
  // The status dot is a mode the caller asks for, so `status` carries no default: `!hasChildren` alone
  // would paint a grey dot on every plain `<Badge />`, and on every `<Badge :count="0" />`, whose count
  // never becomes a display value — a dot that says nothing where the author meant nothing.
  status: String as PropType<BadgeStatusType>,
  text: String as PropType<string | VNode>,
  active: Boolean as BooleanType,
  maxCount: { type: Number, default: 99 },
};

export type BadgeProps = ExtractPropTypes<typeof badgeProps>;

const Badge = defineComponent({
  name: "Badge",
  props: badgeProps,
  setup(props, { slots }) {
    return () => {
      const { maxCount, count, dot, pill, color, status, text } = props;

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
              "k-badge-status-active": props.active,
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

        supNode = (
          <sup {...supProps}>
            {!dot ? (
              typeof displayCount === "number" && Number.isFinite(displayCount) ? (
                <RollUp modelValue={displayCount} text={String(displayCount)} />
              ) : (
                displayCount
              )
            ) : null}
          </sup>
        );
      }

      const rootProps = {
        class: ["k-badge", { "k-badge-pill": pill }],
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

export type { BadgeStatusType } from "../const/types";
