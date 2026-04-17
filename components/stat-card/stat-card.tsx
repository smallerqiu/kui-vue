import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent } from "vue";
import type { BooleanType } from "../const/types";
import StatNumber from "./stat-number";

export interface StatNumberItem {
  value: number;
  duration?: number;
  precision?: number;
  separator?: string;
  prefix?: string;
  suffix?: string;
  desc?: string;
}

export const statCardProps = {
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
  setup(props, { slots }) {
    return () => {
      return (
        <div class={["k-stat-card", { "k-stat-card-bordered": props.bordered }]}>
          {props.title && <div class="k-stat-card-title">{props.title}</div>}
          <div class="k-stat-card-items">
            {(props.items || []).map((item: StatNumberItem, index) => {
              return (
                <div
                  key={index}
                  class={["k-stat-card-item", { "k-stat-card-item-reverse": props.reverse }]}
                >
                  <div class="k-stat-card-item-value">
                    <StatNumber
                      v-slots={{
                        prefix: () => item.prefix || slots.prefix?.(),
                        suffix: () => item.suffix || slots.suffix?.(),
                      }}
                      modelValue={item.value}
                      duration={item.duration}
                      precision={item.precision !== undefined ? item.precision : props.precision}
                      separator={item.separator !== undefined ? item.separator : props.separator}
                      type={props.statNumberType}
                    />
                  </div>
                  <div class="k-stat-card-item-desc">{item.desc}</div>
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
