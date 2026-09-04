import type { ExtractPropTypes, PropType, VNodeChild } from "vue";
import { defineComponent } from "vue";
import type { BooleanType, ShapeType, SizeType } from "../const/types";
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
  shape: { type: String as PropType<ShapeType>, default: "round" },
  size: { type: String as PropType<SizeType>, default: "medium" },
};

export type StatCardProps = ExtractPropTypes<typeof statCardProps>;

const StatCard = defineComponent({
  name: "StatCard",
  props: statCardProps,
  setup(props, { slots, attrs }) {
    return () => {
      const { class: customClass, ...restAttrs } = attrs;
      return (
        <div
          {...restAttrs}
          class={[
            "k-stat-card",
            customClass,
            {
              "k-stat-card-bordered": props.bordered,
              [`k-stat-card-${props.theme}`]: props.theme,
              [`k-stat-card-${props.shape}`]: props.shape,
              [`k-stat-card-${props.size}`]: props.size,
            },
          ]}
        >
          {(props.title != null || slots.title) && (
            <div class="k-stat-card-title">{slots.title?.() || props.title}</div>
          )}
          <div class="k-stat-card-items">
            {(props.items || []).map((item, index) => {
              return (
                <div
                  key={`${typeof (item.key ?? index)}:${String(item.key ?? index)}`}
                  class={["k-stat-card-item", { "k-stat-card-item-reverse": props.reverse }]}
                >
                  <div class="k-stat-card-item-value">
                    <StatNumber
                      v-slots={{
                        prefix: () => item.prefix ?? slots.prefix?.({ item, index }),
                        suffix: () => item.suffix ?? slots.suffix?.({ item, index }),
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
                  {item.desc != null && <div class="k-stat-card-item-desc">{item.desc}</div>}
                  {item.trend != null && item.trend !== false && (
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
