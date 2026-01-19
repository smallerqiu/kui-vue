import { ref, defineComponent, watch, inject, computed } from "vue";
import Big from "big.js";
import Input from "../input/input";
import Icon from "../icon";
import { withInstall } from "../utils/vue";
import { ChevronUp, ChevronDown } from "kui-icons";
import { sizeMap, filterSize } from "../utils/size";
import { normalize, isValidBig } from "../utils/number";
const InputNumber = defineComponent({
  inheritAttrs: false,
  name: "InputNumber",
  props: {
    value: [Array, Number, String],
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity },
    disabled: Boolean,
    clearable: Boolean,
    readonly: Boolean,
    formatter: Function,
    parser: Function,
    size: {
      type: String,
      validator(value) {
        return sizeMap.indexOf(value) >= 0;
      },
    },
    precision: Number,
    suffix: String,
    prefix: String,
    controls: { type: Boolean, default: true },
    keyboard: { type: Boolean, default: true },
    step: {
      type: Number,
      default: 1,
    },
    theme: { type: String, default: "light" },
    icon: [String, Array],
    id: String,
  },
  setup(props, { slots, attrs, emit, listeners }) {
    const parentSize = inject("size", null);
    const innerValue = ref("");
    const userInput = ref(null);

    const clamp = (val) => {
      if (!isValidBig(val)) {
        return val === "" ? "" : innerValue.value;
      }

      try {
        let b = new Big(val);

        if (props.max !== Infinity && b.gt(props.max)) b = new Big(props.max);
        if (props.min !== -Infinity && b.lt(props.min)) b = new Big(props.min);

        return props.precision !== undefined
          ? b.toFixed(props.precision)
          : b.toFixed();
      } catch (e) {
        return innerValue.value;
      }
    };

    watch(
      () => props.value,
      (val) => {
        const next = normalize(val, props.precision);
        if (next !== innerValue.value) {
          innerValue.value = next;
        }
      },
      { immediate: true }
    );
    const emitValue = (value) => {
      emit("input", value);
      emit("change", value);
    };
    const displayValue = computed(() => {
      if (userInput.value !== null) return userInput.value;

      if (innerValue.value === "") return "";
      return props.formatter
        ? props.formatter(innerValue.value)
        : innerValue.value;
    });

    const triggerUpdate = (val) => {
      const parsed = props.parser ? props.parser(val) : val;
      const clampedStr = clamp(parsed);
      innerValue.value = clampedStr;
      userInput.value = null;
      const output = clampedStr === "" ? undefined : Number(clampedStr);
      emitValue(output);
    };

    const handleInput = (val) => {
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

    const handleBlur = (event) => {
      triggerUpdate(
        userInput.value !== null ? userInput.value : innerValue.value
      );
      emit("blur", event);
    };

    const stepAction = (type) => {
      if (props.disabled || props.readonly) return;

      const current = isValidBig(innerValue.value) ? innerValue.value : 0;
      const next =
        type === "up"
          ? new Big(current).plus(props.step)
          : new Big(current).minus(props.step);

      triggerUpdate(next.toFixed());
    };
    return () => {
      // const { suffix } = ps;

      const inputProps = {
        attrs: { ...attrs, readonly: props.readonly },
        props: {
          inputType: "input-number",
          value: displayValue.value,
          clearable: false,
          size: props.size || filterSize(parentSize),
          disabled: props.disabled,
          suffix: props.suffix,
          prefix: props.prefix,
          icon: props.icon,
          theme: props.theme,
        },
        on: {
          ...listeners,
          input: handleInput,
          blur: handleBlur,
          keydown: (e) => {
            if (e.key === "ArrowUp") {
              e.preventDefault();
              stepAction("up");
            }
            if (e.key === "ArrowDown") {
              e.preventDefault();
              stepAction("down");
            }
          },
        },
      };
      return (
        <Input
          {...inputProps}
          scopedSlots={{
            suffix: () => slots.suffix?.(),
            prefix: () => slots.prefix?.(),
            controls: () =>
              props.controls && !props.readonly && !props.disabled ? (
                <div class="k-input-number-controls">
                  <span
                    class="k-input-number-control"
                    onClick={() => stepAction("up")}
                  >
                    <Icon type={ChevronUp} />
                  </span>
                  <span
                    class="k-input-number-control"
                    onClick={() => stepAction("down")}
                  >
                    <Icon type={ChevronDown} />
                  </span>
                </div>
              ) : null,
          }}
        />
      );
    };
  },
});
export default withInstall(InputNumber);
