import {
  cloneVNode,
  computed,
  defineComponent,
  getCurrentInstance,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import type {
  BooleanType,
  DirectionType,
  RadioType,
  ShapeType,
  SizeType,
  ThemeType,
} from "../const/types";
import { getChildren } from "../utils/vnode";
import Radio from "./radio";
import RadioButton from "./radio-button";
import type { ChangeEvent, RadioOption } from "./types";

const radioGroupProps = {
  modelValue: { type: [String, Number], default: "" },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  direction: {
    type: String as PropType<DirectionType>,
    default: "horizontal",
  },
  size: {
    type: String as PropType<SizeType>,
  },
  theme: { type: String as PropType<ThemeType> },
  shape: String as PropType<ShapeType>,
  options: Array as PropType<RadioOption[]>,
  type: String as PropType<RadioType>,
  onChange: Function as PropType<(value: string | number) => void>,
};

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>;

const RadioGroup = defineComponent({
  name: "RadioGroup",
  props: radioGroupProps,
  setup(props, { slots, emit }) {
    const name = `k-radio-group-${getCurrentInstance()?.uid ?? "default"}`;
    const rootRef = ref<HTMLElement | null>(null);
    const observerRef = ref<ResizeObserver | null>(null);
    const animationFrame = ref<number | null>(null);
    const currentValue = ref(props.modelValue);
    const itemRefs = new Map<string | number, HTMLElement>();
    const isVertical = computed(() => props.direction === "vertical");
    const segStyle = ref(
      isVertical.value ? { height: "0px", top: "0px" } : { width: "0px", left: "0px" },
    );
    const segmentReady = ref(false);
    const setItemRef = (el: unknown, value: string | number) => {
      if (!el) {
        itemRefs.delete(value);
        return;
      }
      if (typeof el !== "object") return;
      const element = "$el" in el ? el.$el : el;
      if (element instanceof HTMLElement) itemRefs.set(value, element);
    };
    const updateSeg = () => {
      if (props.theme !== "card" || props.type !== "button") return;
      nextTick(() => {
        updateSize();
        if (!segmentReady.value) {
          if (animationFrame.value !== null) cancelAnimationFrame(animationFrame.value);
          animationFrame.value = requestAnimationFrame(() => {
            segmentReady.value = true;
            animationFrame.value = null;
          });
        }
      });
    };
    const updateSize = () => {
      const activeEl = itemRefs.get(currentValue.value);
      if (activeEl) {
        segStyle.value = isVertical.value
          ? { height: `${activeEl.offsetHeight - 4}px`, top: `${activeEl.offsetTop + 2}px` }
          : {
              width: `${activeEl.offsetWidth - 4}px`,
              left: `${activeEl.offsetLeft + 2}px`,
            };
      }
    };
    onMounted(() => {
      observerRef.value = new ResizeObserver(() => {
        updateSize();
      });
      if (rootRef.value) observerRef.value.observe(rootRef.value);
      updateSeg();
    });
    onUnmounted(() => {
      if (observerRef.value) observerRef.value.disconnect();
      if (animationFrame.value !== null) cancelAnimationFrame(animationFrame.value);
    });
    const onChange = ({ value }: ChangeEvent) => {
      if (props.readonly || value === undefined) return;
      currentValue.value = value;
      updateSeg();
      emit("update:modelValue", value);
      emit("change", value);
    };
    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
        updateSeg();
      },
    );
    watch(() => [props.direction, props.theme, props.type], updateSeg);
    return () => {
      const isButton = props.type === "button";
      const isCard = props.theme === "card";
      const Component = isButton ? RadioButton : Radio;
      const nodes: VNodeChild[] = props.options
        ? props.options.map((option) => (
            <Component
              ref={(el) => setItemRef(el, option.value)}
              key={option.value}
              label={option.label}
              value={option.value}
              name={isButton ? undefined : name}
              onChange={onChange}
              checked={currentValue.value === option.value}
              disabled={props.disabled || option.disabled}
              readonly={props.readonly}
              icon={option.icon}
              size={props.size}
              theme={props.theme}
              shape={props.shape}
            />
          ))
        : getChildren(slots.default?.()).map((child) => {
            const value = child.props?.value as string | number | undefined;
            return cloneVNode(
              child,
              {
                ...(value !== undefined ? { ref: (el: unknown) => setItemRef(el, value) } : {}),
                name: isButton ? undefined : name,
                checked: value !== undefined && currentValue.value === value,
                disabled: props.disabled || Boolean(child.props?.disabled),
                readonly: props.readonly || Boolean(child.props?.readonly),
                size: props.size,
                theme: props.theme,
                shape: props.shape,
                onChange: [child.props?.onChange, onChange].filter(Boolean),
              },
              true,
            );
          });
      const classes = [
        "k-radio-group",
        {
          "k-radio-button-group": isButton,
          "k-radio-button-changed": segmentReady.value && isCard && isButton,
          "k-radio-group-circle": props.shape === "circle",
          "k-radio-group-fill": props.theme === "fill" && isButton,
          "k-radio-group-card": isCard && isButton,
          "k-radio-group-vertical": props.direction === "vertical",
        },
      ];

      return (
        <div
          class={classes}
          ref={rootRef}
          role="radiogroup"
          aria-disabled={props.disabled || undefined}
          aria-readonly={props.readonly || undefined}
          onKeydown={(event: KeyboardEvent) => {
            if (
              !isButton ||
              !["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)
            )
              return;
            const buttons = [
              ...(rootRef.value?.querySelectorAll<HTMLElement>('[role="radio"]:not([disabled])') ??
                []),
            ];
            if (!buttons.length) return;
            event.preventDefault();
            const index = buttons.indexOf(event.target as HTMLElement);
            const offset = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
            const next = buttons[(Math.max(index, 0) + offset + buttons.length) % buttons.length];
            next?.focus();
            next?.click();
          }}
        >
          {nodes}
          {isCard && isButton && (
            <div
              class={["k-radio-group-card-seg", segmentReady.value && "is-ready"]}
              style={segStyle.value}
            />
          )}
        </div>
      );
    };
  },
});
export default RadioGroup;
