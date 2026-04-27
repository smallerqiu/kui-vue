import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType } from "../const/types";
import Icon, { type IconType } from "../icon";

const cardProps = {
  bordered: { type: Boolean as BooleanType, default: false },
  title: String,
  icon: [Array] as PropType<IconType[]>,
};

export type CardProps = ExtractPropTypes<typeof cardProps>;

const Card = defineComponent({
  name: "Card",
  props: cardProps,
  setup(props, { slots, attrs }) {
    return () => {
      const { title, icon, bordered } = props;

      const extraSlot = slots.extra?.();
      const titleSlot = slots.title?.();
      const selfSlot = slots.default?.();

      const extraNode = extraSlot ? <div class="k-card-extra">{extraSlot}</div> : null;
      const iconNode = icon ? <Icon type={icon} class="k-card-title-icon" /> : null;
      const titleNode = title ? <span class="k-card-title">{title}</span> : titleSlot || null;

      const rootProps = {
        ...attrs,
        class: [
          "k-card",
          {
            "k-card-bordered": bordered,
          },
        ],
      };

      return (
        <div {...rootProps}>
          {titleNode && (
            <div class="k-card-head">
              {iconNode}
              {titleNode}
              {extraNode}
            </div>
          )}
          {selfSlot ? <div class="k-card-body k-scroll">{selfSlot}</div> : null}
        </div>
      );
    };
  },
}) 

export default Card;