import { defineComponent } from "vue";
import { getChildren } from "../utils/vnode.jsx";
import CountUp from "./countup.jsx";
import RollUp from "./rollup.jsx";
const StatNumber = defineComponent({
  name: "StatNumber",
  props: {
    modelValue: {
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
    const prefixNode = props.prefix || getChildren(slots.prefix?.());
    const suffixNode = props.suffix || getChildren(slots.suffix?.());
    console.log(prefixNode);
    return () => {
      const items = {
        modelValue: props.modelValue,
        separator: props.separator,
        duration: props.duration,
        precision: props.precision,
      };

      console.log(prefixNode);
      return (
        <div class="k-stat-number">
          {prefixNode?.length > 0 && <span class="k-stat-number-prefix">{prefixNode}</span>}
          {props.type === "rollup" ? <RollUp {...items} /> : <CountUp {...items} />}
          {suffixNode?.length > 0 && <span class="k-stat-number-suffix">{suffixNode}</span>}
        </div>
      );
    };
  },
});

export default StatNumber;
