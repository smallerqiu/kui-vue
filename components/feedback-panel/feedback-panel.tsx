import { CircleCheck, CircleX, Info, TriangleAlert } from "kui-icons";
import { defineComponent, type ExtractPropTypes, type PropType, type VNodeChild } from "vue";
import type { FeedbackPanelKind, ShapeType, ThemeType } from "../const/types";
import Icon, { type IconType } from "../icon";

const feedbackPanelProps = {
  kind: { type: String as PropType<FeedbackPanelKind>, default: "neutral" },
  heading: [String, Number, Object] as PropType<VNodeChild>,
  description: [String, Number, Object] as PropType<VNodeChild>,
  symbol: Array as PropType<IconType[]>,
  compact: Boolean,
  theme: { type: String as PropType<ThemeType>, default: "outline" },
  shape: { type: String as PropType<ShapeType>, default: "round" },
};

export type FeedbackPanelProps = ExtractPropTypes<typeof feedbackPanelProps>;

const symbols: Record<FeedbackPanelKind, IconType[]> = {
  positive: CircleCheck,
  negative: CircleX,
  caution: TriangleAlert,
  neutral: Info,
};

const FeedbackPanel = defineComponent({
  name: "FeedbackPanel",
  inheritAttrs: false,
  props: feedbackPanelProps,
  setup(props, { attrs, slots }) {
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      const heading = slots.heading?.() || props.heading;
      const description = slots.description?.() || props.description;
      const details = slots.default?.();
      const actions = slots.actions?.();

      return (
        <section
          {...restAttrs}
          class={[
            "k-feedback-panel",
            `k-feedback-panel-${props.kind}`,
            `k-feedback-panel-theme-${props.theme}`,
            `k-feedback-panel-shape-${props.shape}`,
            { "k-feedback-panel-compact": props.compact },
            customClass,
          ]}
          aria-live="polite"
        >
          <div class="k-feedback-panel-mark" aria-hidden="true">
            <span class="k-feedback-panel-mark-inner">
              {slots.symbol?.() || <Icon type={props.symbol || symbols[props.kind]} />}
            </span>
          </div>
          <div class="k-feedback-panel-main">
            {heading !== undefined && heading !== null && (
              <div class="k-feedback-panel-heading">{heading}</div>
            )}
            {description !== undefined && description !== null && (
              <div class="k-feedback-panel-description">{description}</div>
            )}
            {details && <div class="k-feedback-panel-details">{details}</div>}
            {actions && <div class="k-feedback-panel-actions">{actions}</div>}
          </div>
        </section>
      );
    };
  },
});

export default FeedbackPanel;

export type { FeedbackPanelKind } from "../const/types";
