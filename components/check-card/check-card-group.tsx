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
import { markFormFieldComponent, useFormField } from "../form/context";
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
};

export type CheckCardGroupProps = ExtractPropTypes<typeof checkCardGroupProps>;

const CheckCardGroup = defineComponent({
  name: "CheckCardGroup",
  props: checkCardGroupProps,
  emits: {
    "update:modelValue": (value: CheckCardValue) =>
      typeof value === "string" || typeof value === "number",
    change: (value: CheckCardValue) => typeof value === "string" || typeof value === "number",
  },
  setup(props, { emit, slots }) {
    const field = useFormField(true);
    const registry = new Map<CheckCardValue, CheckCardRegistryItem>();
    const localValue = ref(
      field?.prop ? (field.value.value as CheckCardValue | undefined) : props.modelValue,
    );
    watch(
      () => (field?.prop ? field.value.value : props.modelValue),
      (value) => {
        localValue.value = value as CheckCardValue | undefined;
      },
    );
    const select = (value: CheckCardValue) => {
      if (
        props.disabled ||
        field?.disabled.value ||
        props.readonly ||
        field?.readonly.value ||
        localValue.value === value
      )
        return;
      localValue.value = value;
      emit("update:modelValue", value);
      if (field?.prop) field.update(value);
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
      disabled: computed(() => Boolean(props.disabled || field?.disabled.value)),
      readonly: computed(() => Boolean(props.readonly || field?.readonly.value)),
      theme: computed(() => field?.theme.value ?? props.theme),
      size: computed(() => field?.size.value ?? props.size),
      shape: computed(() => field?.shape.value ?? props.shape),
      select,
      selectRelative,
      register: (value, item) => registry.set(value, item),
      unregister: (value) => registry.delete(value),
    });

    return () => (
      <div
        id={field?.prop ? field.id : undefined}
        class={[
          "k-check-card-group",
          `k-check-card-group-${props.direction}`,
          (props.disabled || field?.disabled.value) && "is-disabled",
          (props.readonly || field?.readonly.value) && "is-readonly",
        ]}
        role="radiogroup"
        aria-labelledby={field?.prop ? field.labelId : undefined}
        aria-describedby={field?.describedBy.value}
        aria-invalid={field?.invalid.value || undefined}
        aria-required={field?.required.value || undefined}
        aria-disabled={props.disabled || field?.disabled.value || undefined}
        aria-readonly={props.readonly || field?.readonly.value || undefined}
        onFocusout={() => field?.blur()}
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

export default markFormFieldComponent(CheckCardGroup);
