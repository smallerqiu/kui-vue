import type { ExtractPropTypes, PropType, VNodeChild } from "vue";
import { defineComponent } from "vue";
import { useConfigAppearance } from "../config/context";
import type { BooleanType, SizeType, SurfaceShapeType } from "../const/types";
import { getChildren, hasRenderableContent } from "../utils/vnode";
import StatNumber from "./stat-number";
import type { StatNumberItem } from "./types";

const statCardProps = {
  title: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
  precision: { type: Number, default: 0 },
  items: { type: Array as PropType<StatNumberItem[]>, default: () => [] },
  separator: String,
  statNumberType: String as PropType<"rollup" | "countup">,
  reverse: Boolean as BooleanType,
  bordered: { type: Boolean as BooleanType, default: false },
  theme: { type: String as PropType<"fill" | "outline" | "plain">, default: "fill" },
  shape: { type: String as PropType<SurfaceShapeType>, default: "round" },
  size: { type: String as PropType<SizeType>, default: "medium" },
  // `Boolean` in a type list makes Vue cast an absent value to `false`, and `false`
  // then wins every `??` fallback further down. These are content slots rather than
  // flags, so they take anything and stay `undefined` when the caller passes nothing.
  prefix: { type: null as unknown as PropType<VNodeChild> },
  suffix: { type: null as unknown as PropType<VNodeChild> },
};

export type StatCardProps = ExtractPropTypes<typeof statCardProps>;

/**
 * Identity of one `items` entry across renders.
 *
 * The `kui-item-` prefix keeps a keyless item's position out of the namespace of
 * caller-supplied keys: `[{key: 1}, {}]` used to hand two different metrics the
 * same key, which let the diffing move a CountUp instance from one item to the
 * other. Same rule and same strings as the React build.
 */
export function statItemKey(item: StatNumberItem, index: number): string {
  return String(item.key ?? `kui-item-${index}`);
}

const StatCard = defineComponent({
  name: "StatCard",
  props: statCardProps,
  setup(props, { slots, attrs }) {
    const appearance = useConfigAppearance(props);
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      // A slot that renders nothing at all must fall back to the prop, so the
      // comment nodes an inner `v-if` leaves behind are dropped first.
      const titleSlot = getChildren(slots.title?.());
      const title = titleSlot.length > 0 ? titleSlot : props.title;
      return (
        <div
          {...restAttrs}
          class={[
            "k-stat-card",
            customClass,
            {
              "k-stat-card-bordered": props.bordered,
              [`k-stat-card-${appearance.theme.value}`]: appearance.theme.value,
              [`k-stat-card-${appearance.surfaceShape.value}`]: appearance.surfaceShape.value,
              [`k-stat-card-${appearance.size.value}`]: appearance.size.value,
            },
          ]}
        >
          {hasRenderableContent(title) && <div class="k-stat-card-title">{title}</div>}
          <div class="k-stat-card-items">
            {(props.items || []).map((item, index) => {
              return (
                <div
                  key={statItemKey(item, index)}
                  class={["k-stat-card-item", { "k-stat-card-item-reverse": props.reverse }]}
                >
                  <div class="k-stat-card-item-value">
                    <StatNumber
                      v-slots={{
                        prefix: () => item.prefix ?? props.prefix ?? slots.prefix?.({ item, index }),
                        suffix: () => item.suffix ?? props.suffix ?? slots.suffix?.({ item, index }),
                      }}
                      modelValue={item.value}
                      autoAnimate={item.autoAnimate}
                      autoAnimateOnce={item.autoAnimateOnce}
                      duration={item.duration}
                      precision={item.precision !== undefined ? item.precision : props.precision}
                      separator={item.separator !== undefined ? item.separator : props.separator}
                      type={props.statNumberType}
                    />
                  </div>
                  {hasRenderableContent(item.desc) && (
                    <div class="k-stat-card-item-desc">{item.desc}</div>
                  )}
                  {hasRenderableContent(item.trend) && (
                    <div
                      class={[
                        "k-stat-card-item-trend",
                        `k-stat-card-item-trend-${item.trendStatus || "default"}`,
                      ]}
                    >
                      {item.trend}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      );
    };
  },
});
export default StatCard;

export type { StatNumberItem } from "./types";
