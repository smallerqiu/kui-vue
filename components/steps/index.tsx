import { Check, X } from "kui-icons";
import { defineComponent, type ExtractPropTypes, type PropType, type VNodeChild } from "vue";
import Icon from "../icon";
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
  inheritAttrs: false,
  props: propsDef,
  setup(props, { slots, emit, attrs }) {
    return () => {
      const data =
        props.items ??
        (slots.default?.() ?? [])
          .filter((node) => node.type === Step)
          .map((node) => node.props as StepItem);
      return (
        <div {...attrs} class={["k-steps", `k-steps-${props.direction}`, attrs.class]} role="list">
          {data.map((item, index) => {
            const state =
              item.status ??
              (index < props.current ? "finish" : index === props.current ? props.status : "wait");
            return (
              <div
                key={index}
                class={[
                  "k-step",
                  `k-step-${state}`,
                  {
                    "k-step-clickable": !!props.onChange && !item.disabled,
                    "k-step-disabled": item.disabled,
                  },
                ]}
                role="listitem"
              >
                <div
                  class="k-step-main"
                  role={props.onChange ? "button" : undefined}
                  tabindex={props.onChange && !item.disabled ? 0 : undefined}
                  aria-current={index === props.current ? "step" : undefined}
                  aria-disabled={item.disabled || undefined}
                  onClick={() => !item.disabled && emit("change", index)}
                  onKeydown={(event) => {
                    if (!item.disabled && (event.key === "Enter" || event.key === " ")) {
                      event.preventDefault();
                      emit("change", index);
                    }
                  }}
                >
                  <span class="k-step-dot">
                    {item.icon ??
                      (state === "finish" ? (
                        <Icon type={Check} />
                      ) : state === "error" ? (
                        <Icon type={X} />
                      ) : (
                        index + 1
                      ))}
                  </span>
                  <div class="k-step-content">
                    <div class="k-step-title">{item.title}</div>
                    {item.description != null && (
                      <div class="k-step-description">{item.description}</div>
                    )}
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
