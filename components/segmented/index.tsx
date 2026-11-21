import { useInitialValue } from "../utils/model-value";
import {
  computed,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
  type ExtractPropTypes,
  type HTMLAttributes,
  type PropType,
  type VNodeChild,
} from "vue";
import type { BooleanType, ShapeType, SizeType } from "../const/types";
import {
  markFormFieldComponent,
  resolveFormControlAttrs,
  useFormAppearance,
  useFormField,
} from "../form/context";
import Icon, { type IconType } from "../icon";

export type SegmentedValue = string | number;
export interface SegmentedOption {
  label?: VNodeChild;
  value: SegmentedValue;
  icon?: IconType[];
  disabled?: boolean;
  [key: string]: unknown;
}
export type SegmentedOptionInput = SegmentedValue | SegmentedOption;

const isOptionObject = (option: SegmentedOptionInput): option is SegmentedOption =>
  typeof option === "object" && option !== null;

// A bare string or number is both the value and the visible content. Normalising
// up front keeps the rest of the component on one shape.
const normalizeOptions = (options: SegmentedOptionInput[]): SegmentedOption[] =>
  options.map((option) => (isOptionObject(option) ? option : { label: option, value: option }));

const segmentedProps = {
  modelValue: [String, Number] as PropType<SegmentedValue>,
  value: [String, Number] as PropType<SegmentedValue>,
  options: { type: Array as PropType<SegmentedOptionInput[]>, default: () => [] },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  block: Boolean as BooleanType,
  direction: { type: String as PropType<"horizontal" | "vertical">, default: "horizontal" },
  size: { type: String as PropType<SizeType>, default: "medium" },
  shape: { type: String as PropType<ShapeType>, default: "round" },
};

export type SegmentedProps = ExtractPropTypes<typeof segmentedProps>;
type SegmentedPublicProps<T extends SegmentedValue> = Omit<
  Partial<SegmentedProps>,
  "modelValue" | "value"
> &
  Omit<HTMLAttributes, "onChange"> & {
    modelValue?: T;
    value?: T;
    "onUpdate:modelValue"?: (value: T) => void;
    onChange?: (value: T) => void;
  };
type SegmentedComponent = {
  new <T extends SegmentedValue = SegmentedValue>(
    props: SegmentedPublicProps<T>,
  ): { $props: SegmentedPublicProps<T> };
};

const Segmented = defineComponent({
  name: "Segmented",
  props: segmentedProps,
  emits: {
    "update:modelValue": (value: SegmentedValue) => ["string", "number"].includes(typeof value),
    change: (value: SegmentedValue) => ["string", "number"].includes(typeof value),
  },
  setup(props, { attrs, emit, slots }) {
    const initialModel = useInitialValue(props);
    const field = useFormField(true);
    const appearance = useFormAppearance(props, field);
    const currentValue = computed(() =>
      field?.prop ? (field.value.value as SegmentedValue | undefined) : initialModel.value,
    );
    const items = computed(() => normalizeOptions(props.options));
    // Roving tabindex: the checked item is the tab stop. Without a checked item
    // -- or when the checked one is disabled -- the first enabled item has to
    // take the 0, otherwise every item is -1 and the group is unreachable.
    const focusValue = computed<SegmentedValue | undefined>(() => {
      const list = items.value;
      const selected = list.find((item) => item.value === currentValue.value);
      if (selected && !selected.disabled) return selected.value;
      return list.find((item) => !item.disabled)?.value;
    });
    const rootRef = ref<HTMLElement>();
    const itemRefs = new Map<SegmentedValue, HTMLElement>();
    const indicatorStyle = ref<Record<string, string>>({});
    const ready = ref(false);
    const animating = ref(false);
    const isVertical = computed(() => props.direction === "vertical");
    let observer: ResizeObserver | undefined;
    let measured:
      | {
          value: SegmentedValue | undefined;
          vertical: boolean;
          width: number;
          height: number;
          left: number;
          top: number;
        }
      | undefined;

    const updateIndicator = () => {
      const item = currentValue.value === undefined ? undefined : itemRefs.get(currentValue.value);
      if (!item || item.offsetWidth === 0 || item.offsetHeight === 0) {
        ready.value = false;
        animating.value = false;
        measured = undefined;
        indicatorStyle.value = {};
        return;
      }
      const next = {
        value: currentValue.value,
        vertical: isVertical.value,
        width: item.offsetWidth,
        height: item.offsetHeight,
        left: item.offsetLeft,
        top: item.offsetTop,
      };
      if (
        measured &&
        Object.keys(next).every(
          (key) => next[key as keyof typeof next] === measured![key as keyof typeof next],
        )
      )
        return;
      animating.value =
        !!measured && measured.vertical === next.vertical && !Object.is(measured.value, next.value);
      indicatorStyle.value = isVertical.value
        ? { height: `${next.height}px`, top: `${next.top}px` }
        : { width: `${next.width}px`, left: `${next.left}px` };
      measured = next;
      ready.value = true;
    };
    const select = (option: SegmentedOption) => {
      if (
        props.disabled ||
        field?.disabled.value ||
        props.readonly ||
        field?.readonly.value ||
        option.disabled ||
        option.value === currentValue.value
      )
        return;
      initialModel.value = option.value;
      emit("update:modelValue", option.value);
      if (field?.prop) field.update(option.value);
      emit("change", option.value);
    };
    const move = (event: KeyboardEvent) => {
      if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key))
        return;
      const available = items.value.filter((option) => !option.disabled);
      if (
        !available.length ||
        props.disabled ||
        field?.disabled.value ||
        props.readonly ||
        field?.readonly.value
      )
        return;
      event.preventDefault();
      const current = available.findIndex((option) => option.value === currentValue.value);
      const next =
        event.key === "Home"
          ? available[0]
          : event.key === "End"
            ? available.at(-1)
            : available[
                (Math.max(current, 0) +
                  (event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1) +
                  available.length) %
                  available.length
              ];
      if (next) {
        select(next);
        nextTick(() => itemRefs.get(next.value)?.focus());
      }
    };

    watch(() => [currentValue.value, props.direction, props.options], updateIndicator, {
      deep: true,
      flush: "post",
    });
    onMounted(() => {
      if (typeof ResizeObserver !== "undefined") {
        observer = new ResizeObserver(updateIndicator);
        if (rootRef.value) observer.observe(rootRef.value);
      }
      updateIndicator();
    });
    onUnmounted(() => {
      observer?.disconnect();
    });

    return () => {
      const size = appearance.size.value;
      const shape = appearance.shape.value;
      return (
        <div
          {...attrs}
          ref={rootRef}
          class={[
            "k-segmented",
            attrs.class,
            `k-segmented-${size}`,
            `k-segmented-${shape}`,
            {
              "k-segmented-block": props.block,
              "k-segmented-vertical": isVertical.value,
              "k-segmented-disabled": props.disabled || field?.disabled.value,
            },
          ]}
          role="radiogroup"
          {...resolveFormControlAttrs(attrs, field)}
          aria-orientation={isVertical.value ? "vertical" : "horizontal"}
          aria-disabled={props.disabled || field?.disabled.value || undefined}
          aria-readonly={props.readonly || field?.readonly.value || undefined}
          onFocusout={() => field?.blur()}
          onKeydown={move}
        >
          {items.value.map((option) => {
            const selected = option.value === currentValue.value;
            const label =
              slots.label?.({ option, selected }) ??
              option.label ??
              (option.icon ? undefined : option.value);
            const hasLabel =
              label !== undefined && label !== null && label !== false && label !== "";
            return (
              <button
                key={option.value}
                ref={(el) =>
                  el ? itemRefs.set(option.value, el as HTMLElement) : itemRefs.delete(option.value)
                }
                type="button"
                class={["k-segmented-item", { "k-segmented-item-active": selected }]}
                role="radio"
                aria-checked={selected}
                aria-label={!hasLabel ? String(option.value) : undefined}
                disabled={props.disabled || field?.disabled.value || option.disabled}
                tabindex={option.value === focusValue.value ? 0 : -1}
                onClick={() => select(option)}
              >
                {option.icon && <Icon type={option.icon} />}
                {hasLabel && <span>{label}</span>}
              </button>
            );
          })}
          <span
            class={[
              "k-segmented-indicator",
              ready.value && "is-ready",
              animating.value && "is-animating",
            ]}
            style={indicatorStyle.value}
          />
        </div>
      );
    };
  },
});

const FormSegmented = markFormFieldComponent(Segmented);
export default FormSegmented as SegmentedComponent;
