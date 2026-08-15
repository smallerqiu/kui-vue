import { defineComponent, type ExtractPropTypes, type PropType, type VNodeChild } from "vue";
import type { BooleanType, ShapeType, ThemeType } from "../const/types";
import Icon, { type IconType } from "../icon";
import CardMeta from "./card-meta";

const cardProps = {
  bordered: { type: Boolean as BooleanType, default: false },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  shape: { type: String as PropType<ShapeType>, default: "round" },
  title: String,
  icon: [Array] as PropType<IconType[]>,
  cover: [String, Object] as PropType<string | VNodeChild>,
};

export type CardProps = ExtractPropTypes<typeof cardProps>;

const Card = defineComponent({
  name: "Card",
  props: cardProps,
  setup(props, { slots, attrs }) {
    return () => {
      const { title, icon, bordered, cover, theme, shape } = props;

      const extraSlot = slots.extra?.();
      const titleSlot = slots.title?.();
      const selfSlot = slots.default?.();
      const coverSlot = slots.cover?.();

      const extraNode = extraSlot ? <div class="k-card-extra">{extraSlot}</div> : null;
      const iconNode = icon ? <Icon type={icon} class="k-card-title-icon" /> : null;
      const titleNode = title ? <span class="k-card-title">{title}</span> : titleSlot || null;
      const coverNode = coverSlot?.length ? (
        coverSlot
      ) : typeof cover === "string" ? (
        <img src={cover} alt="" />
      ) : (
        cover
      );

      const rootProps = {
        ...attrs,
        class: [
          "k-card",
          {
            "k-card-bordered": bordered,
            [`k-card-${theme}`]: theme,
            [`k-card-${shape}`]: shape,
            "k-card-has-cover": !!coverNode,
          },
          attrs.class,
        ],
      };

      return (
        <div {...rootProps}>
          {coverNode && <div class="k-card-cover">{coverNode}</div>}
          {!coverNode && titleNode && (
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
});

export type { CardMetaProps } from "./card-meta";
export { CardMeta };
export default Card;
