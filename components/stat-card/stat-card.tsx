import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent } from "vue";
import type { BooleanType } from "../const/types";
import StatNumber from "./stat-number";
import type { StatNumberItem } from "./types";

const statCardProps = {
  title: String,
  precision: { type: Number, default: 0 },
  items: { type: Array as PropType<StatNumberItem[]>, default: () => [] },
  separator: String,
  statNumberType: String as PropType<"rollup" | "countup">,
  reverse: Boolean as BooleanType,
  bordered: { type: Boolean as BooleanType, default: false },
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
          class={["k-stat-card", customClass, { "k-stat-card-bordered": props.bordered }]}
        >
          {props.title && <div class="k-stat-card-title">{props.title}</div>}
          <div class="k-stat-card-items">
            {(props.items || []).map((item, index) => {
              return (
                <div
                  key={index}
                  class={["k-stat-card-item", { "k-stat-card-item-reverse": props.reverse }]}
                >
                  <div class="k-stat-card-item-value">
                    <StatNumber
                      v-slots={{
                        prefix: () => item.prefix || slots.prefix,
                        suffix: () => item.suffix || slots.suffix,
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
                  <div class="k-stat-card-item-desc">{item.desc}</div>
                  {item.trend !== undefined && (
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
