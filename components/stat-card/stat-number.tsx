import type { ExtractPropTypes, PropType } from "vue";
import { defineComponent } from "vue";
import { getChildren } from "../utils/vnode";
import CountUp from "./countup";

export const statNumberProps = {
  modelValue: {
    type: [Number],
    required: true,
    default: 0,
  },
  separator: String,
  duration: {
    type: Number,
    default: 1,
  },
  precision: { type: Number, default: 0 },
  type: {
    type: String as PropType<"rollup" | "countup">,
    default: "countup",
  },
  prefix: String,
  suffix: String,
};

export type StatNumberProps = ExtractPropTypes<typeof statNumberProps>;

const StatNumber = defineComponent({
  name: "StatNumber",
  props: statNumberProps,
  setup(props, { slots }) {
    const prefixNode = props.prefix || getChildren(slots.prefix?.());
    const suffixNode = props.suffix || getChildren(slots.suffix?.());
    return () => {
      const items = {
        modelValue: props.modelValue,
        separator: props.separator,
        duration: props.duration,
        precision: props.precision,
        type: props.type,
      };

      return (
        <div class="k-stat-number">
          {prefixNode?.length > 0 && <span class="k-stat-number-prefix">{prefixNode}</span>}
          <CountUp {...items} />
          {suffixNode?.length > 0 && <span class="k-stat-number-suffix">{suffixNode}</span>}
        </div>
      );
    };
  },
});

export default StatNumber;
