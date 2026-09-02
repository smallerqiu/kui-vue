import { defineComponent, type ExtractPropTypes, type PropType, type VNodeChild } from "vue";
import Icon, { type IconType } from "../icon";

const timelineItemProps = {
  color: String,
  icon: Array as PropType<IconType[]>,
  time: [String, Number, Object, Array, Function] as PropType<VNodeChild>,
  extra: [String, Number, Object, Array, Function] as PropType<VNodeChild>,
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
      const extraNode = props.extra ?? slots.extra?.();

      return (
        <li class="k-time-line-item">
          <div {...itemProps}>{iconNode}</div>
          <div class="k-time-line-item-content">
            {slots.default?.()}
            {extraNode != null && <div class="k-time-line-item-extra">{extraNode}</div>}
            {time != null && <div class="k-time-line-item-time">{time}</div>}
          </div>
        </li>
      );
    };
  },
});
export default TimeLineItem;
