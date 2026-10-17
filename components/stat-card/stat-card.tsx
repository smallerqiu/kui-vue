import type { ExtractPropTypes, PropType, VNodeChild } from "vue";
import { computed, defineComponent } from "vue";
import { resolvePaintedTheme, useConfigAppearance } from "../config/context";
import type { BooleanType, SizeType, SurfaceShapeType, SurfaceThemeType } from "../const/types";
import { getChildren, hasRenderableContent } from "../utils/vnode";
import StatNumber from "./stat-number";
import { statItemKey } from "./utils/stat-item-key";
import type { StatNumberItem } from "./types";

const statCardProps = {
  title: [String, Number, Boolean, Object, Array] as PropType<VNodeChild>,
  precision: { type: Number, default: 0 },
  items: { type: Array as PropType<StatNumberItem[]>, default: () => [] },
  separator: String,
  statNumberType: String as PropType<"rollup" | "countup">,
  reverse: Boolean as BooleanType,
  bordered: { type: Boolean as BooleanType, default: false },
  theme: { type: String as PropType<SurfaceThemeType>, default: "fill" },
  shape: { type: String as PropType<SurfaceShapeType>, default: "round" },
  size: { type: String as PropType<SizeType>, default: "medium" },
  // `Boolean` in a type list makes Vue cast an absent value to `false`, and `false`
  // then wins every `??` fallback further down. These are content slots rather than
  // flags, so they take anything and stay `undefined` when the caller passes nothing.
  prefix: { type: null as unknown as PropType<VNodeChild> },
  suffix: { type: null as unknown as PropType<VNodeChild> },
};

export type StatCardProps = ExtractPropTypes<typeof statCardProps>;

// The tiers `stat-card/styles/index.less` paints. `underlined` is absent because an underline is the
// whole affordance of a field you type into and a stat panel has nothing to underline (theme 口径
// §五.1). Anything outside this set resolves to `fill` — the tier it reaches when no `theme` is
// written — rather than shipping a class no LESS rule answers.
const PAINTED_THEMES = ["fill", "outline", "plain", "solid", "dashed"] as const;

const StatCard = defineComponent({
  name: "StatCard",
  props: statCardProps,
  setup(props, { slots, attrs }) {
    const appearance = useConfigAppearance(props);
    // Resolved here rather than at the class name so the guard sits after inheritance, not only on the
    // written prop: a `ConfigProvider theme="underlined"` has to land on `fill` too.
    const paintedTheme = computed(
      () => resolvePaintedTheme(appearance.theme.value, PAINTED_THEMES) ?? "fill",
    );
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
              [`k-stat-card-${paintedTheme.value}`]: paintedTheme.value,
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
