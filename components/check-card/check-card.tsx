import { Check } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { BooleanType, ShapeType, SizeType } from "../const/types";
import Icon, { type IconType } from "../icon";
import { checkCardGroupKey } from "./context";
import type { CheckCardChangeEvent, CheckCardTheme, CheckCardValue } from "./types";

const checkCardProps = {
  modelValue: { type: Boolean, default: false },
  value: [String, Number] as PropType<CheckCardValue>,
  title: [String, Number] as PropType<string | number>,
  description: String,
  symbol: Array as PropType<IconType[]>,
  checkedSymbol: Array as PropType<IconType[]>,
  showIndicator: { type: Boolean as BooleanType, default: true },
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  theme: { type: String as PropType<CheckCardTheme>, default: "outline" },
  size: { type: String as PropType<SizeType>, default: "medium" },
  shape: { type: String as PropType<ShapeType>, default: "round" },
  onChange: Function as PropType<(event: CheckCardChangeEvent) => void>,
};

export type CheckCardProps = ExtractPropTypes<typeof checkCardProps>;

const CheckCard = defineComponent({
  name: "CheckCard",
  inheritAttrs: false,
  props: checkCardProps,
  emits: ["update:modelValue", "change"],
  setup(props, { attrs, emit, slots }) {
    const group = inject(checkCardGroupKey, null);
    const rootRef = ref<HTMLElement>();
    const grouped = computed(() => Boolean(group && props.value !== undefined));
    const checked = computed(() =>
      grouped.value ? group?.modelValue.value === props.value : props.modelValue
    );
    const disabled = computed(() => Boolean(props.disabled || group?.disabled.value));
    const readonly = computed(() => Boolean(props.readonly || group?.readonly.value));
    const theme = computed(() => group?.theme.value ?? props.theme);
    const size = computed(() => group?.size.value ?? props.size);
    const shape = computed(() => group?.shape.value ?? props.shape);

    const register = () => {
      if (!group || props.value === undefined || !rootRef.value) return;
      group.register(props.value, { element: rootRef.value, disabled: disabled.value });
    };
    onMounted(register);
    onUpdated(register);
    onUnmounted(() => {
      if (group && props.value !== undefined) group.unregister(props.value);
    });

    const select = () => {
      if (disabled.value || readonly.value) return;
      if (grouped.value && props.value !== undefined) {
        if (checked.value) return;
        group?.select(props.value);
        emit("change", { checked: true, value: props.value } satisfies CheckCardChangeEvent);
        return;
      }
      const next = !checked.value;
      emit("update:modelValue", next);
      emit("change", { checked: next, value: props.value } satisfies CheckCardChangeEvent);
    };
    const onKeydown = (event: KeyboardEvent) => {
      if (disabled.value || readonly.value) return;
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        select();
        return;
      }
      if (!grouped.value || props.value === undefined) return;
      if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) {
        event.preventDefault();
        group?.selectRelative(
          props.value,
          event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1
        );
      }
    };

    return () => {
      const symbolType = checked.value ? (props.checkedSymbol ?? props.symbol) : props.symbol;
      const symbolNode =
        slots.symbol?.({ checked: checked.value }) ??
        (symbolType ? <Icon class="k-check-card-symbol-icon" type={symbolType} /> : null);
      const titleNode = slots.title?.({ checked: checked.value }) ?? props.title;
      const descriptionNode = slots.description?.({ checked: checked.value }) ?? props.description;
      return (
        <div
          {...attrs}
          ref={rootRef}
          class={[
            "k-check-card",
            `k-check-card-${theme.value}`,
            `k-check-card-${size.value}`,
            `k-check-card-${shape.value}`,
            {
              "is-checked": checked.value,
              "is-disabled": disabled.value,
              "is-readonly": readonly.value,
              "has-symbol": Boolean(symbolNode),
            },
            attrs.class,
          ]}
          role={grouped.value ? "radio" : "checkbox"}
          aria-checked={checked.value}
          aria-disabled={disabled.value}
          aria-readonly={readonly.value || undefined}
          tabindex={disabled.value ? -1 : checked.value || !grouped.value ? 0 : -1}
          onClick={select}
          onKeydown={onKeydown}
        >
          {symbolNode && <div class="k-check-card-symbol">{symbolNode}</div>}
          <div class="k-check-card-content">
            {titleNode !== undefined && titleNode !== null && (
              <div class="k-check-card-title">{titleNode}</div>
            )}
            {descriptionNode !== undefined && descriptionNode !== null && (
              <div class="k-check-card-description">{descriptionNode}</div>
            )}
            {slots.default?.({ checked: checked.value })}
          </div>
          {props.showIndicator && (
            <span class="k-check-card-indicator" aria-hidden="true">
              {checked.value && <Icon type={Check} />}
            </span>
          )}
        </div>
      );
    };
  },
});

export default CheckCard;
