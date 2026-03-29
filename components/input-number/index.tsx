import Big from "big.js";
import { ChevronDown, ChevronUp } from "kui-icons";
import {
  computed,
  defineComponent,
  inject,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import Icon, { type IconType } from "../icon";
import { Input } from "../input";
import { isValidBig, normalize } from "../utils/number";
import { filterSize, sizeMap } from "../utils/size";

export const inputNumberProps = {
  modelValue: [Number, String] as PropType<number | string>,
  value: [Number, String] as PropType<number | string>,
  min: { type: Number, default: -Infinity },
  max: { type: Number, default: Infinity },
  step: { type: Number, default: 1 },
  precision: Number,
  formatter: Function as PropType<(value: string | number) => string>,
  parser: Function as PropType<(value: string) => string | number>,
  disabled: Boolean,
  readonly: Boolean,
  controls: { type: Boolean, default: true },
  suffix: String,
  prefix: String,
  theme: { type: String, default: "light" },
  icon: [Array] as PropType<IconType[]>,
  size: {
    type: String as PropType<(typeof sizeMap)[number]>,
  },
  placeholder: String,
};

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;

const InputNumber = defineComponent({
  inheritAttrs: false,
  name: "InputNumber",
  props: inputNumberProps,
  emits: ["update:modelValue", "change", "blur"],

  setup(props, { slots, attrs, emit }) {
    const parentSize = inject<string | null>("size", null);
    const innerValue = ref("");
    const userInput = ref<string | null>(null);

    const clamp = (val: string | number) => {
      if (!isValidBig(val)) {
        return val === "" ? "" : innerValue.value;
      }

      try {
        let b = new Big(val);

        if (props.max !== Infinity && b.gt(props.max)) b = new Big(props.max);
        if (props.min !== -Infinity && b.lt(props.min)) b = new Big(props.min);

        return props.precision !== undefined ? b.toFixed(props.precision) : b.toFixed();
      } catch (e) {
        return innerValue.value;
      }
    };

    watch(
      () => props.modelValue,
      (val) => {
        const next = normalize(val, props.precision);
        if (next !== innerValue.value) {
          innerValue.value = next;
        }
      },
      { immediate: true }
    );

    const emitValue = (value: number | undefined) => {
      emit("update:modelValue", value);
      emit("change", value);
    };

    const displayValue = computed(() => {
      if (userInput.value !== null) return userInput.value;

      if (innerValue.value === "") return "";
      return props.formatter ? props.formatter(innerValue.value) : innerValue.value;
    });

    const triggerUpdate = (val: string | number) => {
      const parsed = props.parser ? props.parser(String(val)) : val;
      const clampedStr = clamp(String(parsed));
      innerValue.value = clampedStr;
      userInput.value = null;

      const output = clampedStr === "" ? undefined : Number(clampedStr);
      emitValue(output);
    };

    const handleInput = (val: string) => {
      userInput.value = val;
      const parsed = props.parser ? props.parser(val) : val;
      if (val === "") {
        innerValue.value = "";
        emitValue(undefined);
        return;
      }

      if (isValidBig(parsed)) {
        const bigVal = new Big(parsed);
        const normalizedStr = bigVal.toFixed();

        innerValue.value = normalizedStr;
        emitValue(Number(normalizedStr));

        if (props.formatter) {
          const formatted = props.formatter(normalizedStr);
          if (formatted !== userInput.value) {
            userInput.value = formatted;
          }
        }
      }
    };

    const handleBlur = (event: FocusEvent) => {
      triggerUpdate(userInput.value !== null ? userInput.value : innerValue.value);
      emit("blur", event);
    };

    const stepAction = (type: "up" | "down") => {
      if (props.disabled || props.readonly) return;

      const current = isValidBig(innerValue.value) ? innerValue.value : 0;
      const next =
        type === "up" ? new Big(current).plus(props.step) : new Big(current).minus(props.step);

      triggerUpdate(next.toFixed());
    };

    return () => {
      const inputProps = {
        ...attrs,
        modelValue: displayValue.value,
        disabled: props.disabled,
        readonly: props.readonly,
        clearable: false,
        placeholder: props.placeholder,
        suffix: props.suffix,
        prefix: props.prefix,
        size: props.size || filterSize(parentSize) || undefined,
        icon: props.icon,
        theme: props.theme,
        inputType: "input-number",
        "onUpdate:modelValue": handleInput,
        onBlur: handleBlur,
        onKeydown: (e: KeyboardEvent) => {
          if (e.key === "ArrowUp") {
            e.preventDefault();
            stepAction("up");
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            stepAction("down");
          }
        },
      };

      const controls =
        props.controls && !props.readonly && !props.disabled ? (
          <div class="k-input-number-controls">
            <span class="k-input-number-control" onClick={() => stepAction("up")}>
              <Icon type={ChevronUp} />
            </span>
            <span class="k-input-number-control" onClick={() => stepAction("down")}>
              <Icon type={ChevronDown} />
            </span>
          </div>
        ) : null;

      return (
        <Input
          {...inputProps}
          v-slots={{
            suffix: () => slots.suffix?.(),
            prefix: () => slots.prefix?.(),
            controls: () => controls,
          }}
        />
      );
    };
  },
});

export default InputNumber;
