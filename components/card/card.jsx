import Icon from "../icon";
import { defineComponent } from "vue";
import { withInstall } from '../utils/vue';
const Card = defineComponent({
  name: "Card",
  props: {
    bordered: { type: Boolean, default: true },
    title: String,
    icon: [String, Array],
  },
  setup(props, { slots }) {
    return () => {
      const { title, icon, bordered } = props;
      const classes = [
        "k-card",
        {
          ["k-card-bordered"]: bordered,
        },
      ];
      const extraSlot = slots.extra?.();
      // console.log(extraSlot)
      const titleSlot = slots.title?.();
      const selfSlot = slots.default?.();
      const extraNode = extraSlot ? <div class="k-card-extra">{extraSlot}</div> : null;
      const iconNode = icon ? <Icon type={icon} class="k-card-title-icon" /> : null;
      const titleNode = title ? <span class="k-card-title">{title}</span> : titleSlot || null;
      return (
        <div class={classes}>
          <div class="k-card-head">
            {iconNode}
            {titleNode}
            {extraNode}
          </div>
          {selfSlot ? <div class="k-card-body">{selfSlot}</div> : null}
        </div>
      );
    };
  },
});
export default withInstall(Card);
