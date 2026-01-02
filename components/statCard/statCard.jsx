import { defineComponent } from "vue";
import { withInstall } from "../utils/vue.js";
import StatNumber from "./statNumber.jsx";

const StatCard = defineComponent({
  name: "StatCard",
  props: {
    title: String,
    items: { type: Array, default: () => [] },
    statNumberType: String,
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class="k-stat-card">
          <div class="k-stat-card-title">{props.title}</div>
          <div class="k-stat-card-items">
            {(props.items || []).map((item, index) => {
              return (
                <div key={index} class="k-stat-card-item">
                  <div class="k-stat-card-item-value">
                    <StatNumber
                      scopedSlots={{
                        prefix: () => item.prefix || slots.prefix,
                        suffix: () => item.suffix || slots.suffix,
                      }}
                      value={item.value}
                      duration={item.duration}
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
export default withInstall(StatCard);
