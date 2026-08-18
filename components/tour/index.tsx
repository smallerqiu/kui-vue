import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  ref,
  Teleport,
  Transition,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import { Button } from "../button";

export interface TourStep {
  target?: HTMLElement | null | (() => HTMLElement | null);
  title?: VNodeChild;
  description?: VNodeChild;
  cover?: VNodeChild;
  placement?: "top" | "right" | "bottom" | "left";
}

const propsDef = {
  modelValue: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  current: Number,
  defaultCurrent: { type: Number, default: 0 },
  steps: { type: Array as PropType<TourStep[]>, default: () => [] },
  mask: { type: Boolean, default: true },
  closable: { type: Boolean, default: true },
  onChange: Function as PropType<(current: number) => void>,
  onOpenChange: Function as PropType<(open: boolean) => void>,
  onFinish: Function as PropType<() => void>,
};
export type TourProps = ExtractPropTypes<typeof propsDef>;

export default defineComponent({
  name: "Tour",
  props: propsDef,
  setup(props, { emit }) {
    const innerOpen = ref(props.defaultOpen);
    const innerCurrent = ref(props.defaultCurrent);
    const tick = ref(0);
    const visible = computed(() => props.modelValue ?? innerOpen.value);
    const index = computed(() => props.current ?? innerCurrent.value);
    const refresh = () => (tick.value += 1);
    watch(
      () => props.modelValue,
      (value) => {
        if (value !== undefined) innerOpen.value = value;
      }
    );
    onMounted(() => {
      window.addEventListener("resize", refresh);
      window.addEventListener("scroll", refresh, true);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", refresh);
      window.removeEventListener("scroll", refresh, true);
    });
    const close = () => {
      innerOpen.value = false;
      emit("update:modelValue", false);
      emit("openChange", false);
    };
    const go = (next: number) => {
      innerCurrent.value = next;
      emit("change", next);
    };
    return () => {
      void tick.value;
      const step = props.steps[index.value];
      if (!step) return null;
      const target = typeof step.target === "function" ? step.target() : step.target;
      const rect = target?.getBoundingClientRect();
      const placement = step.placement ?? "bottom";
      const panelStyle = rect
        ? placement === "top"
          ? {
              left: `${rect.left + rect.width / 2}px`,
              top: `${rect.top - 12}px`,
              transform: "translate(-50%, -100%)",
            }
          : placement === "left"
            ? {
                left: `${rect.left - 12}px`,
                top: `${rect.top + rect.height / 2}px`,
                transform: "translate(-100%, -50%)",
              }
            : placement === "right"
              ? {
                  left: `${rect.right + 12}px`,
                  top: `${rect.top + rect.height / 2}px`,
                  transform: "translateY(-50%)",
                }
              : {
                  left: `${rect.left + rect.width / 2}px`,
                  top: `${rect.bottom + 12}px`,
                  transform: "translateX(-50%)",
                }
        : { left: "50%", top: "50%", transform: "translate(-50%, -50%)" };
      const next = () => {
        if (index.value < props.steps.length - 1) go(index.value + 1);
        else {
          emit("finish");
          close();
        }
      };
      return (
        <Teleport to="body">
          <div class="k-tour-root">
            <Transition name="k-modal-fade">
              <div v-show={visible.value} class="k-tour-overlay">
                {props.mask && <div class={["k-tour-mask", { "k-tour-mask-spotlight": !!rect }]} />}
                {props.mask && rect && (
                  <div
                    class="k-tour-focus"
                    style={{
                      left: `${rect.left - 5}px`,
                      top: `${rect.top - 5}px`,
                      width: `${rect.width + 10}px`,
                      height: `${rect.height + 10}px`,
                    }}
                  />
                )}
              </div>
            </Transition>
            <section
              v-show={visible.value}
              class={["k-tour-panel", `k-tour-${placement}`]}
              style={panelStyle}
              role="dialog"
              aria-modal="true"
            >
              {props.closable && (
                <Button
                  class="k-tour-close"
                  type="text"
                  size="small"
                  aria-label="Close"
                  onClick={close}
                >
                  ×
                </Button>
              )}
              {step.cover && <div class="k-tour-cover">{step.cover}</div>}
              {step.title && <h3>{step.title}</h3>}
              <div class="k-tour-description">{step.description}</div>
              <footer>
                <span>
                  {index.value + 1} / {props.steps.length}
                </span>
                <div class="k-tour-actions">
                  {index.value > 0 && (
                    <Button size="small" onClick={() => go(index.value - 1)}>
                      上一步
                    </Button>
                  )}
                  <Button size="small" type="primary" onClick={next}>
                    {index.value < props.steps.length - 1 ? "下一步" : "完成"}
                  </Button>
                </div>
              </footer>
            </section>
          </div>
        </Teleport>
      );
    };
  },
});
