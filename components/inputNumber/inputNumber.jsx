import { ref, defineComponent, watch, inject, computed } from "vue";
import Big from "big.js";
import Input from "../input/input";
import Icon from "../icon";
import { withInstall } from "../utils/vue";
import { ChevronUp, ChevronDown } from "kui-icons";
import { sizeMap, filterSize } from "../utils/size";
import {
  isRealNum,
  normalize,
  safeNormalize,
  isValidBig,
} from "../utils/number";

const InputNumber = defineComponent({
  name: "InputNumber",
  props: {
    modelValue: [Number, String],
    value: [Number, String],
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity },
    step: { type: Number, default: 1 },
    precision: Number,
    formatter: Function,
    parser: Function,
    disabled: Boolean,
    readonly: Boolean,
    controls: { type: Boolean, default: true },
    suffix: String,
    prefix: String,
    icon: [String, Array],
    size: {
      type: String,
      validator(value) {
        return sizeMap.indexOf(value) >= 0;
      },
    },
    placeholder: String,
  },
  emits: ["update:modelValue", "change", "blur"],

  setup(props, { slots, attrs, emit }) {
    const parentSize = inject("size", null);

    // 内部存储的合法字符串值
    const innerValue = ref("");
    // 用户正在输入时的原始字符串（如 "001"）
    const userInput = ref(null);

    // 边界与精度处理函数
    const clamp = (val) => {
      if (!isValidBig(val)) {
        // 如果输入为空，返回空；如果是 "-" 这种中间态，返回当前值或空，防止报错
        return val === "" ? "" : innerValue.value;
      }

      try {
        let b = new Big(val);

        // 关键点 2: 比较前再次确保边界值也是有效的数字
        if (props.max !== Infinity && b.gt(props.max)) b = new Big(props.max);
        if (props.min !== -Infinity && b.lt(props.min)) b = new Big(props.min);

        return props.precision !== undefined
          ? b.toFixed(props.precision)
          : b.toFixed();
      } catch (e) {
        return innerValue.value; // 发生意外错误时兜底，返回上一次合法值
      }
    };

    // 监听外部 modelValue 变化
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

    // 计算最终显示在 Input 里的字符串
    const displayValue = computed(() => {
      // 如果用户正在输入，显示用户的原始输入
      if (userInput.value !== null) return userInput.value;

      if (innerValue.value === "") return "";
      return props.formatter
        ? props.formatter(innerValue.value)
        : innerValue.value;
    });

    const triggerUpdate = (val) => {
      const clampedStr = clamp(val);
      innerValue.value = clampedStr;
      userInput.value = null;

      const output = clampedStr === "" ? undefined : Number(clampedStr);
      emit("update:modelValue", output);
      emit("change", output);
    };

    const handleInput = (val) => {
      userInput.value = val; // 允许用户输入 "-", "00", "." 等中间状态

      const parsed = props.parser ? props.parser(val) : val;

      // 只有当解析出的是完整合法的数字时，才更新内部 innerValue
      if (isValidBig(parsed)) {
        innerValue.value = safeNormalize(parsed, props.precision);
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

      const current = isRealNum(innerValue.value) ? innerValue.value : 0;
      const b = new Big(current);
      const step = new Big(props.step);

      const next = type === "up" ? b.plus(step) : b.minus(step);
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
        size: props.size || filterSize(parentSize),
        icon: props.icon,
        theme: props.theme,
        inputType: "input-number",
        "onUpdate:modelValue": handleInput,
        onBlur: handleBlur,
        onKeydown: (e) => {
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

      return (
        <Input
          {...inputProps}
          v-slots={{
            suffix: () => slots.suffix?.(),
            prefix: () => slots.prefix?.(),
            controls: () =>
              props.controls &&
              !props.readonly && (
                <div class="k-input-number-controls">
                  <span class="control-btn" onClick={() => stepAction("up")}>
                    <Icon type={ChevronUp} />
                  </span>
                  <span class="control-btn" onClick={() => stepAction("down")}>
                    <Icon type={ChevronDown} />
                  </span>
                </div>
              ),
          }}
        />
      );
    };
  },
});

export default withInstall(InputNumber);
