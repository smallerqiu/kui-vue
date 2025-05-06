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
    const defaultValue = ref(getValue(ps.value));
    const getValue = (v) => {
      let { min, max, precision, formatter, parser } = ps;
      if (parser) {
        v = parser(v);
      }
      if (v !== undefined && v !== "" && v !== null) {
        v = v.replace(/[^0-9.-]/g, "");
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
    const updateValue = (isUp) => {
      if (ps.disabled) return;
      let { step = 1, parser, formatter } = ps;

      let v = getValue(defaultValue.value) || 0;

      if (parser) {
        v = parser(v);
      }
      v = isUp == 1 ? plus(v, step) : minus(v, step);

      let value = getValue(v);
      defaultValue.value = value;
      if (parser) {
        value = parser(value);
      }
      emit("update:value", value);
    };
    const change = (x) => {
      let { formatter, parser } = ps;
      let input = x;

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
          slot={{
            suffix: () => suffixNode,
            controls: () => (
              <div class="k-input-number-controls">
                <span class="k-input-number-control" onClick={() => updateValue(1)}>
                  <Icon type={ChevronUp} />
                </span>
                <span class="k-input-number-control" onClick={updateValue}>
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
