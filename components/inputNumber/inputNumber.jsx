import Input from "../input/input";
import Icon from "../icon";
import { plus, minus, round, toNumber } from "../utils/number";
import { ChevronUp } from "kui-icons";
import { ref, defineComponent, watch } from "vue";
export default defineComponent({
  props: {
    value: [Array, Number, String],
    min: { type: Number },
    max: { type: Number },
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
    const restore = (v) => {
      if (v !== undefined && v !== "" && v !== null) {
        v = String(v).replace(/[^0-9.-]/g, "");
        if (isNaN(Number(v))) {
          v = "";
        }
        if (v === "") return "";
        v = toNumber(v);
        return v;
      } else {
        return "";
      }
    };
    const getValue = (v) => {
      let { min, max, precision, formatter, parser } = ps;
      let input = "";
      let output = "";
      if (max !== undefined && v >= max) output = max;
      else if (min !== undefined && v <= min) output = min;
      else output = v;

      if (precision > 0) {
        output = round(output, precision);
      }

      input = String(output);

      if (parser) {
        input = parser(String(input));
      }

      if (formatter) {
        input = formatter(String(input));
      }

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
      let value = isUp == 1 ? plus(outputValue.value, step) : minus(outputValue.value, step);

      const { input, output } = getValue(value);

      inputValue.value = input;
      outputValue.value = output;

      emit("update:value", output);
      e.preventDefault();
    };
    const update = (v) => {
      if (!/^\d+$/.test(v) && v !== "") {
        outputValue.value = v;
        return;
      }
      const value = restore(v);
      const { input, output } = getValue(value);
      // console.log(v, value, input, output);
      inputValue.value = input;
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
      const value = restore(outputValue.value);
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
        value: outputValue.value,
        clearable:false,
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
