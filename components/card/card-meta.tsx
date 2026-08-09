import {
  defineComponent,
  type DefineComponent,
  type ExtractPropTypes,
  type HTMLAttributes,
  type PropType,
  type VNodeChild,
} from "vue";
import Avatar from "../avatar/avatar";

const cardMetaProps = {
  avatar: [String, Object] as PropType<string | VNodeChild>,
  title: [String, Number, Object] as PropType<VNodeChild>,
  description: [String, Number, Object] as PropType<VNodeChild>,
};

export type CardMetaProps = Partial<ExtractPropTypes<typeof cardMetaProps>> & HTMLAttributes;

const CardMeta = defineComponent({
  name: "CardMeta",
  inheritAttrs: false,
  props: cardMetaProps,
  setup(props, { attrs, slots }) {
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      const avatar =
        slots.avatar?.() ||
        (typeof props.avatar === "string" ? <Avatar src={props.avatar} /> : props.avatar);
      const title = slots.title?.() || props.title;
      const description = slots.description?.() || props.description;

      return (
        <div {...restAttrs} class={["k-card-meta", customClass]}>
          {avatar && <div class="k-card-meta-avatar">{avatar}</div>}
          <div class="k-card-meta-content">
            {title !== undefined && title !== null && <div class="k-card-meta-title">{title}</div>}
            {description !== undefined && description !== null && (
              <div class="k-card-meta-description">{description}</div>
            )}
          </div>
        </div>
      );
    };
  },
});

export default CardMeta as DefineComponent<CardMetaProps>;
