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
    const getValue = (v) => {
      let { min, max, precision, formatter, parser } = ps;
      if (parser) {
        v = parser(v);
      }
      if (v !== undefined && v !== "" && v !== null) {
        v = String(v).replace(/[^0-9.-]/g, "");
        if (isNaN(Number(v))) {
          v = "";
        }
        if (v === "") return "";
        v = toNumber(v);
      } else {
        return "";
      }

      if (max !== undefined && v >= max) v = max;
      else if (min !== undefined && v <= min) v = min;

      if (precision > 0) {
        v = round(v, precision);
      }

      if (formatter) {
        v = formatter(v);
      }

      return v;
    };

    const value = getValue(ps.value);
    const defaultValue = ref(value);

    const updateValue = (e, isUp) => {
      if (ps.disabled) return;
      const { step } = ps;
      let value = isUp == 1 ? plus(defaultValue.value, step) : minus(defaultValue.value, step);
      value = getValue(value);
      defaultValue.value = value;
      emit("update:value", value);
      e.preventDefault()
    };
    const change = (e) => {
      let { formatter, parser } = ps;
      let input = e.target.value;

      if (formatter) {
        input = formatter(x);
      }
      // if (formatter) {
      //   x = formatter(x + '')
      // }
      defaultValue.value = input;
      // output = toNumber(output + '')
      emit("update:value", input);
    };
    watch(
      () => ps.value,
      (v) => {
        defaultValue.value = getValue(v);
      }
    );
    // const blurHandle = (e) => {
    //   let v = getValue(e.target.value);

    //   defaultValue.value = v;

    //   let output = v;
    //   if (parser) {
    //     output = parser(output);
    //   }

    //   if (output !== "") {
    //     output = toNumber(output);
    //   }

    //   $emit("input", output);
    //   $emit("blur", e);
    //   $emit("change", output);
    // };
    return () => {
      const { suffix } = ps;
      const props = {
        ...attrs,
        inputType: "input-number",
        value: defaultValue.value,
        onInput: (e) => change(e),
        // onBlur: (e) => blurHandle(e),
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
