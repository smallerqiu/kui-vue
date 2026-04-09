import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import Icon from "../icon";

export const timelineItemProps = {
  color: String,
  icon: [String, Array] as PropType<any>,
  time: String,
  extra: String,
};

export type TimelineItemProps = ExtractPropTypes<typeof timelineItemProps>;

const TimeLineItem = defineComponent({
  name: "TimeLineItem",
  props: timelineItemProps,
  setup(props, { slots }) {
    return () => {
      const { icon, color, time } = props;
      const styles = { color };
      const iconNode =
        slots.dot?.() || (icon ? <Icon type={icon} /> : <span class="k-timeline-head"></span>);
      const itemProps = {
        class: ["k-timeline-dot", { "k-timeline-dot-custom": !!slots.dot || !!icon }],
        style: styles,
      };
      const extraNode = props.extra || slots.extra?.();

      return (
        <li class="k-timeline-item">
          <div {...itemProps}>{iconNode}</div>
          <div class="k-timeline-item-content">
            {slots.default?.()}
            {extraNode && <div class="k-timeline-item-extra">{extraNode}</div>}
            {time && <div class="k-timeline-item-time">{time}</div>}
          </div>
        </li>
      );
    };
  },
});
export default TimeLineItem;
