import { defineComponent } from "vue";
import { withInstall } from "../utils/vue.js";
import StatNumber from "./statNumber.jsx";

const StatCard = defineComponent({
  name: "StatCard",
  props: {
    title: String,
    items: { type: Array, default: () => [] },
    statNumberType: String,
    bordered: { type: Boolean, default: false },
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div
          class={["k-stat-card", { "k-stat-card-bordered": props.bordered }]}
        >
          <div class="k-stat-card-title">{props.title}</div>
          <div class="k-stat-card-items">
            {(props.items || []).map((item, index) => {
              return (
                <div key={index} class="k-stat-card-item">
                  <div class="k-stat-card-item-value">
                    <StatNumber
                      v-slots={{
                        prefix: () => item.prefix || slots.prefix,
                        suffix: () => item.suffix || slots.suffix,
                      }}
                      modelValue={item.value}
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
