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
        slots.dot?.() || (icon ? <Icon type={icon} /> : <span class="k-time-line-head"></span>);
      const itemProps = {
        class: ["k-time-line-dot", { "k-time-line-dot-custom": !!slots.dot || !!icon }],
        style: styles,
      };
      const extraNode = props.extra || slots.extra?.();

      return (
        <li class="k-time-line-item">
          <div {...itemProps}>{iconNode}</div>
          <div class="k-time-line-item-content">
            {slots.default?.()}
            {extraNode && <div class="k-time-line-item-extra">{extraNode}</div>}
            {time && <div class="k-time-line-item-time">{time}</div>}
          </div>
        </li>
      );
    };
  },
});
export default TimeLineItem;
