import { defineComponent } from "vue";
import { withInstall } from "../utils/vue.js";
import CountUp from "./countup.jsx";
import RollUp from "./rollup.jsx";
const StatNumber = defineComponent({
  name: "StatNumber",
  props: {
    value: {
      type: Number,
      required: true,
    },
    separator: String,
    duration: {
      type: Number,
      default: 1,
    },
    precision: { type: Number, default: 0 },
    type: {
      type: String,
      default: "countup",
      validator: (val) => ["rollup", "countup"].includes(val),
    },
    prefix: String,
    suffix: String,
  },
  setup(props, { slots }) {
    return () => {
      const items = {
        props: {
          value: props.value,
          separator: props.separator,
          duration: props.duration,
          precision: props.precision,
        },
      };
      const prefixNode = props.prefix || slots.prefix?.();
      const suffixNode = props.suffix || slots.suffix?.();
      return (
        <div class="k-stat-number">
          {prefixNode && <span class="k-stat-number-prefix">{prefixNode}</span>}
          {props.type === "rollup" ? (
            <RollUp {...items} />
          ) : (
            <CountUp {...items} />
          )}
          {suffixNode && <span class="k-stat-number-suffix">{suffixNode}</span>}
        </div>
      );
    };
  },
});

export default withInstall(StatNumber);
