import { defineComponent, type ExtractPropTypes, type PropType, type VNodeChild } from "vue";
export type StepStatus = "wait" | "process" | "finish" | "error";
export interface StepItem {
  title: VNodeChild;
  description?: VNodeChild;
  icon?: VNodeChild;
  status?: StepStatus;
  disabled?: boolean;
}
const stepProps = {
  title: [String, Number, Object] as PropType<VNodeChild>,
  description: [String, Number, Object] as PropType<VNodeChild>,
  icon: [String, Number, Object] as PropType<VNodeChild>,
  status: String as PropType<StepStatus>,
  disabled: Boolean,
};
export type StepProps = ExtractPropTypes<typeof stepProps>;
export const Step = defineComponent({ name: "Step", props: stepProps, setup: () => () => null });
const propsDef = {
  current: { type: Number, default: 0 },
  direction: { type: String as PropType<"horizontal" | "vertical">, default: "horizontal" },
  status: { type: String as PropType<"process" | "error">, default: "process" },
  items: Array as PropType<StepItem[]>,
  onChange: Function as PropType<(current: number) => void>,
};
export type StepsProps = ExtractPropTypes<typeof propsDef>;
export default defineComponent({
  name: "Steps",
  props: propsDef,
  setup(props, { slots, emit }) {
    return () => {
      const data =
        props.items ??
        (slots.default?.() ?? [])
          .filter((node) => node.type === Step)
          .map((node) => node.props as StepItem);
      return (
        <div class={["k-steps", `k-steps-${props.direction}`]}>
          {data.map((item, index) => {
            const state =
              item.status ??
              (index < props.current ? "finish" : index === props.current ? props.status : "wait");
            return (
              <div
                class={[
                  "k-step",
                  `k-step-${state}`,
                  { "k-step-clickable": !!props.onChange && !item.disabled },
                ]}
                onClick={() => !item.disabled && emit("change", index)}
              >
                <div class="k-step-main">
                  <span class="k-step-dot">
                    {item.icon ?? (state === "finish" ? "✓" : index + 1)}
                  </span>
                  <div class="k-step-content">
                    <div class="k-step-title">{item.title}</div>
                    {item.description && <div class="k-step-description">{item.description}</div>}
                  </div>
                </div>
                <span class="k-step-line" />
              </div>
            );
          })}
        </div>
      );
    };
  },
});
