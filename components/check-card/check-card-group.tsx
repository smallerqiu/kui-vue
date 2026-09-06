import {
  computed,
  defineComponent,
  provide,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import type { BooleanType, DirectionType, ShapeType, SizeType } from "../const/types";
import CheckCard from "./check-card";
import { checkCardGroupKey, type CheckCardRegistryItem } from "./context";
import type { CheckCardOption, CheckCardTheme, CheckCardValue } from "./types";

const checkCardGroupProps = {
  modelValue: [String, Number] as PropType<CheckCardValue>,
  options: Array as PropType<CheckCardOption[]>,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  direction: { type: String as PropType<DirectionType>, default: "horizontal" },
  theme: { type: String as PropType<CheckCardTheme>, default: "outline" },
  size: { type: String as PropType<SizeType>, default: "medium" },
  shape: { type: String as PropType<ShapeType>, default: "round" },
  onChange: Function as PropType<(value: CheckCardValue) => void>,
};

export type CheckCardGroupProps = ExtractPropTypes<typeof checkCardGroupProps>;

const CheckCardGroup = defineComponent({
  name: "CheckCardGroup",
  props: checkCardGroupProps,
  emits: ["update:modelValue", "change"],
  setup(props, { emit, slots }) {
    const registry = new Map<CheckCardValue, CheckCardRegistryItem>();
    const localValue = ref(props.modelValue);
    watch(
      () => props.modelValue,
      (value) => {
        localValue.value = value;
      },
    );
    const select = (value: CheckCardValue) => {
      if (props.disabled || props.readonly || localValue.value === value) return;
      localValue.value = value;
      emit("update:modelValue", value);
      emit("change", value);
    };
    const selectRelative = (value: CheckCardValue, offset: number) => {
      if (props.readonly) return;
      const entries = [...registry.entries()].filter(([, item]) => !item.disabled);
      if (!entries.length) return;
      const currentIndex = entries.findIndex(([key]) => key === value);
      const nextIndex = (Math.max(currentIndex, 0) + offset + entries.length) % entries.length;
      const next = entries[nextIndex];
      if (!next) return;
      select(next[0]);
      next[1].element.focus();
    };
    provide(checkCardGroupKey, {
      modelValue: computed(() => localValue.value),
      disabled: computed(() => Boolean(props.disabled)),
      readonly: computed(() => Boolean(props.readonly)),
      theme: computed(() => props.theme),
      size: computed(() => props.size),
      shape: computed(() => props.shape),
      select,
      selectRelative,
      register: (value, item) => registry.set(value, item),
      unregister: (value) => registry.delete(value),
    });

    return () => (
      <div
        class={[
          "k-check-card-group",
          `k-check-card-group-${props.direction}`,
          props.disabled && "is-disabled",
          props.readonly && "is-readonly",
        ]}
        role="radiogroup"
        aria-disabled={props.disabled || undefined}
        aria-readonly={props.readonly || undefined}
      >
        {props.options?.map((option) => (
          <CheckCard
            key={option.value}
            value={option.value}
            title={option.title}
            description={option.description}
            disabled={option.disabled}
            readonly={option.readonly}
            symbol={option.symbol}
            checkedSymbol={option.checkedSymbol}
          />
        )) ?? slots.default?.()}
      </div>
    );
  },
});

export default CheckCardGroup;
