import Input from "../input/input";
import Icon from "../icon";
import { add, subtract, toFixed, isValidNumber, isEmpty } from "../utils/number";
import { ChevronUp } from "kui-icons";
import { ref, defineComponent, watch, nextTick } from "vue";
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
    keyboard: { type: Boolean, default: true },
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
    const getValue = (v, edge) => {
      let input = "";
      let output = "";

      let { min, max, precision, formatter, parser } = ps;

      if (!isValidNumber(v)) {
        if (isEmpty(v)) {
          input = "";
          output = "";
        } else {
          input = String(v);
          output = formatter ? parser?.(String(v)) || v : String(v);
        }
      } else {
        input = String(v);
        output = v;
      }
      if (formatter) {
        const value = parser?.(String(input)) || input;
        input = formatter(String(value));
      }
      if (edge) {
        if (precision > 0) {
          output = toFixed(output, precision);
        }
        if (output > max) {
          output = max;
          input = formatter?.(String(max)) || max;
        } else if (output < min) {
          output = min;
          input = formatter?.(String(min)) || min;
        }
      }
      // console.log(`origin: ${v}`, `input: ${input}`, `output: ${output}`);
      return { input, output };
    };
    // output is the trueth value
    // input is the show text
    const { input, output } = getValue(ps.value);

    const inputValue = ref(input);
    const outputValue = ref(output);

    const calcValue = (e, isUp) => {
      if (ps.disabled) return;
      const { step } = ps;
      if (!isValidNumber(outputValue.value) || isEmpty(outputValue.value)) {
        outputValue.value = 0;
      }
      let value = isUp == 1 ? add(String(outputValue.value), String(step)) : subtract(String(outputValue.value), String(step));
      const { input, output } = getValue(value, true);

      inputValue.value = input;
      outputValue.value = output;

      emit("update:value", output);
      e.preventDefault();
    };

    const onKeyDown = (e) => {
      if (!ps.keyboard) return;
      if (e.key === "ArrowUp") {
        calcValue(e, 1);
      } else if (e.key === "ArrowDown") {
        calcValue(e, 0);
      }
    };
    const onUpdate = (e) => {
      const v = e.target.value;
      const { input, output } = getValue(v, false);
      // console.log("update", `origin: ${v}`, `input: ${input}`, `output: ${output}`);
      inputValue.value = input;
      e.target.value = input;

      if (!isValidNumber(output) && !isEmpty(v)) {
        return;
      }
      const { max, min } = ps;
      if ((output && output > max) || (output && output < min)) {
        return;
      }
      outputValue.value = output;
      emit("update:value", output);
      e.preventDefault()
    };
    watch(
      () => ps.value,
      (v) => {
        const { input, output } = getValue(v, false);

        inputValue.value = input;
        outputValue.value = output;
      }
    );
    const blurHandle = (e) => {
      const { input, output } = getValue(outputValue.value, true);

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
        "onUpdate:value": (e) => {},
        onInput: (e) => {
          onUpdate(e);
        },
        onBlur: (e) => blurHandle(e),
        onKeydown: (e) => onKeyDown(e),
      };
      const suffixNode = slots.suffix?.() || (suffix ? <div class="k-input-number-suffix">{suffix}</div> : null);
      return (
        <Input
          {...props}
          v-slots={{
            // suffix: () => suffixNode,
            controls: () =>
              ps.controls ? (
                <div class="k-input-number-controls">
                  <span class="k-input-number-control" onClick={(e) => calcValue(e, 1)}>
                    <Icon type={ChevronUp} />
                  </span>
                  <span class="k-input-number-control" onClick={(e) => calcValue(e)}>
                    <Icon type={ChevronUp} />
                  </span>
                </div>
              ) : null,
          }}
        />
      );
    };
  },
});
