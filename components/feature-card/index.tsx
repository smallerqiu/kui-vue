import {
  defineComponent,
  type ExtractPropTypes,
  type PropType,
  type StyleValue,
} from "vue";
import type { BooleanType, ShapeType, SizeType, ThemeType } from "../const/types";
import Icon, { type IconType } from "../icon";

const featureCardProps = {
  icon: Array as PropType<IconType[]>,
  title: String,
  desc: String,
  bordered: { type: Boolean as BooleanType, default: false },
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  shape: { type: String as PropType<ShapeType>, default: "round" },
  size: { type: String as PropType<SizeType>, default: "medium" },
  direction: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal",
  },
  clickable: Boolean as BooleanType,
  disabled: Boolean as BooleanType,
  color: String,
  iconBackground: String,
  onClick: Function as PropType<(event: MouseEvent) => void>,
};

export type FeatureCardProps = ExtractPropTypes<typeof featureCardProps>;

const FeatureCard = defineComponent({
  name: "FeatureCard",
  props: featureCardProps,
  emits: ["click"],
  setup(props, { attrs, emit, slots }) {
    const handleClick = (event: MouseEvent) => {
      if (props.disabled) {
        event.preventDefault();
        return;
      }
      emit("click", event);
    };
    const handleKeydown = (event: KeyboardEvent) => {
      if (!props.clickable || props.disabled || !["Enter", " "].includes(event.key)) return;
      event.preventDefault();
      (event.currentTarget as HTMLElement).click();
    };
    return () => {
      const { class: customClass, style: customStyle, ...restAttrs } = attrs;
      return (
        <div
          {...restAttrs}
          class={[
            "k-feature-card",
            customClass,
            {
              "k-feature-card-bordered": props.bordered,
              [`k-feature-card-${props.theme}`]: props.theme,
              [`k-feature-card-${props.shape}`]: props.shape,
              [`k-feature-card-${props.size}`]: props.size,
              [`k-feature-card-${props.direction}`]: props.direction,
              "k-feature-card-clickable": props.clickable,
              "k-feature-card-disabled": props.disabled,
            },
          ]}
          style={[
            {
              "--k-feature-card-color": props.color,
              "--k-feature-card-icon-bg": props.iconBackground,
            } as unknown as StyleValue,
            customStyle,
          ]}
          role={props.clickable ? "button" : undefined}
          tabindex={props.clickable && !props.disabled ? 0 : undefined}
          aria-disabled={props.clickable && props.disabled ? "true" : undefined}
          onClick={handleClick}
          onKeydown={handleKeydown}
        >
          {(props.icon || slots.icon) && (
            <div class="k-feature-card-icon">
              {slots.icon?.() || <Icon type={props.icon} />}
            </div>
          )}
          <div class="k-feature-card-content">
            {(props.title || slots.title) && (
              <div class="k-feature-card-title">{slots.title?.() || props.title}</div>
            )}
            {(props.desc || slots.desc) && (
              <div class="k-feature-card-desc">{slots.desc?.() || props.desc}</div>
            )}
            {slots.default?.()}
          </div>
          {slots.extra && <div class="k-feature-card-extra">{slots.extra()}</div>}
        </div>
      );
    };
  },
});

export default FeatureCard;
