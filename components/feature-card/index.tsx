import { defineComponent, type ExtractPropTypes, type PropType } from "vue";
import type { BooleanType } from "../const/types";
import Icon, { type IconType } from "../icon";

const featureCardProps = {
  icon: Array as PropType<IconType[]>,
  title: String,
  desc: String,
  bordered: { type: Boolean as BooleanType, default: false },
};

export type FeatureCardProps = ExtractPropTypes<typeof featureCardProps>;

const FeatureCard = defineComponent({
  name: "FeatureCard",
  props: featureCardProps,
  setup(props, { attrs }) {
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      return (
        <div
          {...restAttrs}
          class={["k-feature-card", customClass, { "k-feature-card-bordered": props.bordered }]}
        >
          {props.icon && (
            <div class="k-feature-card-icon">
              <Icon type={props.icon} />
            </div>
          )}
          <div class="k-feature-card-content">
            {props.title && <div class="k-feature-card-title">{props.title}</div>}
            {props.desc && <div class="k-feature-card-desc">{props.desc}</div>}
          </div>
        </div>
      );
    };
  },
});

export default FeatureCard;
