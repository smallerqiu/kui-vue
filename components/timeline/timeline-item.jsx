import { defineComponent } from "vue";
import Icon from "../icon";

const TimeLineItem = defineComponent({
  name: "TimeLineItem",
  props: {
    color: String,
    icon: [String, Array],
    time: String,
    extra: String,
  },
  setup(ps, { slots }) {
    return () => {
      let { icon, color, time } = ps;
      const styles = { color };
      const iconNode =
        slots.dot?.() || (icon ? <Icon type={icon} /> : <span class="k-time-line-head"></span>);
      const iconCls = ["k-time-line-dot"];
      let extraNode = ps.extra || slots.extra?.();
      return (
        <li class="k-time-line-item">
          <div class={iconCls} style={styles}>
            {iconNode}
          </div>
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
