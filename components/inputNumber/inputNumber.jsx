import Input from "../input/input";
import Icon from "../icon";
import { add, subtract, roundDecimal } from "../utils/number";
import { ChevronUp } from "kui-icons";
import { ref, defineComponent, watch } from "vue";
export default defineComponent({
  props: {
    value: [Array, Number, String],
    min: { type: Number, default: -Infinity },
    max: { type: Number, default: Infinity },
    disabled: Boolean,
    clearable: Boolean,
    readonly: Boolean,
    formatter: Function,
    parser: Function,
    size: String,
    precision: Number,
    suffix: String,
    prefix: String,
    controls: { type: Boolean, default: true },
    step: {
      type: Number,
      default: 1,
    },
    theme: String,
    placeholder: String,
    icon: [String, Array],
    id: String,
  },
  setup(ps, { slots, attrs, emit }) {
    // console.log(add('0.0000000001', '0.0000000001'));
    const keepNumber = (v) => {
      if (v === "" || v === null || v === undefined) return "";
      let str = String(v);
      let hasDot = false;
      let result = "";
      for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (char >= "0" && char <= "9") {
          result += char;
        } else if (char === "." && !hasDot) {
          result += ".";
          hasDot = true;
        } else if (char === "-" && result === "") {
          // 只允许负号出现在开头
          result += "-";
        }
      }
      if (!/\d/.test(result)) {
        return "";
      }
      return result;
    };
    const formatValue = (v) => {
      let value = String(v);
      if (ps.parser) {
        value = ps.parser(value);
      }
      if (ps.formatter) {
        value = ps.formatter(value);
      }

      return value;
    };
    const getValue = (v) => {
      let { min, max, precision, formatter, parser } = ps;
      let input = "";
      let output = keepNumber(v);
      if (output && output >= max) output = max;
      else if (output && output <= min) output = min;

      if (precision > 0) {
        output = roundDecimal(output, precision);
      }
      input = formatValue(output);
      return { input, output };
    };
    // output is the trueth value
    // input is the show text
    const { input, output } = getValue(ps.value);

    const inputValue = ref(input);
    const outputValue = ref(output);

    const updateValue = (e, isUp) => {
      if (ps.disabled) return;
      const { step } = ps;
      console.log(add(outputValue.value,step,String(outputValue.value), String(step)))
      let value = isUp == 1 ? add(String(outputValue.value), String(step)) : subtract(String(outputValue.value), String(step));
      const { input, output } = getValue(value);

      inputValue.value = input;
      outputValue.value = output;

      emit("update:value", output);
      e.preventDefault();
    };

    const update = (v) => {
      const { input, output } = getValue(v);
      inputValue.value = formatValue(v);
      outputValue.value = output;
      emit("update:value", output);
    };
    watch(
      () => ps.value,
      (v) => {
        const { input, output } = getValue(v);

        inputValue.value = input;
        outputValue.value = output;
      }
    );
    const blurHandle = (e) => {
      const value = keepNumber(inputValue.value);
      const { input, output } = getValue(value);
      inputValue.value = input;
      outputValue.value = output;
      emit("update:value", output);
      emit("blur", e);
    };
    return () => {
      const { suffix } = ps;

      const props = {
        ...attrs,
        ...ps,
        inputType: "input-number",
        value: inputValue.value,
        clearable: false,
        "onUpdate:value": (e) => update(e),
        onBlur: (e) => blurHandle(e),
      };
      const suffixNode = slots.suffix?.() || (suffix ? <div class="k-input-number-suffix">{suffix}</div> : null);
      return (
        <Input
          {...props}
          v-slots={{
            // suffix: () => suffixNode,
            controls: () => (
              <div class="k-input-number-controls">
                <span class="k-input-number-control" onClick={(e) => updateValue(e, 1)}>
                  <Icon type={ChevronUp} />
                </span>
                <span class="k-input-number-control" onClick={(e) => updateValue(e)}>
                  <Icon type={ChevronUp} />
                </span>
              </div>
            ),
          }}
        />
      );
    };
  },
});
