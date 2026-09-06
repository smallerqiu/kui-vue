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
import { type BooleanType, type ShapeType, type SizeType, type ThemeType } from "../const/types";
import Icon, { type IconType } from "../icon";
import { Input } from "../input";
import { isValidBig, normalize } from "../utils/number";

const inputNumberProps = {
  modelValue: [Number, String] as PropType<number | string>,
  min: { type: Number, default: -Infinity },
  max: { type: Number, default: Infinity },
  step: { type: [Number, String] as PropType<number | string>, default: 1 },
  precision: Number,
  formatter: Function as PropType<(value: string | number) => string>,
  parser: Function as PropType<(value: string) => string | number>,
  disabled: Boolean as BooleanType,
  readonly: Boolean as BooleanType,
  controls: { type: Boolean as BooleanType, default: true },
  /** 是否允许通过上下方向键调整数值，文档已声明但此前未实现 */
  keyboard: { type: Boolean as BooleanType, default: true },
  suffix: String,
  prefix: String,
  theme: { type: String as PropType<ThemeType>, default: "fill" },
  shape: { type: String as PropType<ShapeType> },
  icon: [Array] as PropType<IconType[]>,
  size: {
    type: String as PropType<SizeType>,
  },
  placeholder: String,
  onChange: Function as PropType<(value: number | undefined) => void>,
};

export type InputNumberProps = ExtractPropTypes<typeof inputNumberProps>;

const InputNumber = defineComponent({
  inheritAttrs: false,
  name: "InputNumber",
  props: inputNumberProps,

  setup(props, { slots, attrs, emit }) {
    const parentSize = inject<SizeType | undefined>("size", undefined);
    const innerValue = ref("");
    const userInput = ref<string | null>(null);
    const safePrecision = computed(() =>
      props.precision === undefined ? undefined : Math.max(0, Math.trunc(props.precision)),
    );

    const clamp = (val: string | number) => {
      if (!isValidBig(val)) {
        return val === "" ? "" : innerValue.value;
      }

      try {
        let b = new Big(val);

        if (props.max !== Infinity && b.gt(props.max)) b = new Big(props.max);
        if (props.min !== -Infinity && b.lt(props.min)) b = new Big(props.min);

        return safePrecision.value !== undefined ? b.toFixed(safePrecision.value) : b.toFixed();
      } catch {
        return innerValue.value;
      }
    };

    watch(
      () => props.modelValue,
      (val) => {
        const next = normalize(val, safePrecision.value);
        if (next !== innerValue.value) {
          innerValue.value = next;
        }
      },
      { immediate: true },
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
      }
    };

    const handleBlur = (event: FocusEvent) => {
      triggerUpdate(userInput.value !== null ? userInput.value : innerValue.value);
      emit("blur", event);
    };

    const stepAction = (type: "up" | "down") => {
      if (props.disabled || props.readonly) return;

      const current = isValidBig(innerValue.value) ? innerValue.value : 0;
      let step = new Big(1);
      try {
        const candidate = new Big(props.step);
        if (candidate.gt(0)) step = candidate;
      } catch {
        // Invalid steps fall back to 1.
      }
      const next = type === "up" ? new Big(current).plus(step) : new Big(current).minus(step);

      triggerUpdate(next.toFixed());
    };

    return () => {
      const canStepUp =
        props.max === Infinity ||
        !isValidBig(innerValue.value) ||
        new Big(innerValue.value).lt(props.max);
      const canStepDown =
        props.min === -Infinity ||
        !isValidBig(innerValue.value) ||
        new Big(innerValue.value).gt(props.min);
      const inputProps = {
        ...attrs,
        modelValue: displayValue.value,
        disabled: props.disabled,
        readonly: props.readonly,
        clearable: false,
        placeholder: props.placeholder,
        suffix: props.suffix,
        prefix: props.prefix,
        size: props.size || parentSize,
        icon: props.icon,
        shape: props.shape,
        theme: props.theme,
        inputType: "input-number",
        role: "spinbutton",
        inputmode: "decimal",
        "aria-valuemin": props.min === -Infinity ? undefined : props.min,
        "aria-valuemax": props.max === Infinity ? undefined : props.max,
        "aria-valuenow": isValidBig(innerValue.value) ? Number(innerValue.value) : undefined,
        "aria-valuetext": props.formatter && innerValue.value ? displayValue.value : undefined,
        "onUpdate:modelValue": handleInput,
        onBlur: handleBlur,
        onKeydown: (e: KeyboardEvent) => {
          emit("keydown", e);
          if (e.defaultPrevented) return;
          if (props.keyboard === false) return;
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
            <button
              type="button"
              class="k-input-number-control"
              disabled={!canStepUp}
              aria-label="Increase value"
              onClick={() => stepAction("up")}
            >
              <Icon type={ChevronUp} />
            </button>
            <button
              type="button"
              class="k-input-number-control"
              disabled={!canStepDown}
              aria-label="Decrease value"
              onClick={() => stepAction("down")}
            >
              <Icon type={ChevronDown} />
            </button>
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
