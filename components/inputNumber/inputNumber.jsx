import BaseInput from '../base/input'
import Icon from '../icon'
import {
  add,
  subtract,
  toFixed,
  isValidNumber,
  isEmpty,
} from "../utils/number";
import { ChevronUp } from 'kui-icons'
import { withInstall } from '../utils/vue'
const InputNumber = {
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
  watch: {
    value(v) {
      this.initValue(v)
    }
  },
  data() {
    return {
      inputValue: '',
      outputValue: '',
    }
  },
  mounted() {
    this.initValue(this.value)
  },
  methods: {
    initValue(v) {
      const { input, output } = this.getValue(v, false);

      this.inputValue = input;
      this.outputValue = output;
    },
    getValue(v, edge) {
      let input = "";
      let output = "";

      let { min, max, precision, formatter, parser } = this;

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
    },
    calcValue(e, isUp) {
      let { outputValue } = this
      if (this.disabled) return;
      const { step } = this;
      if (!isValidNumber(outputValue) || isEmpty(outputValue)) {
        outputValue = 0;
      }
      let value =
        isUp == 1
          ? add(String(outputValue), String(step))
          : subtract(String(outputValue), String(step));
      const { input, output } = this.getValue(value, true);

      this.inputValue = input;
      this.outputValue = output;
      e.preventDefault();

      this.$emit("input", output);
      this.$emit("change", { target: { value: output } });
    },

    onKeyDown(e) {
      if (!this.keyboard) return;
      if (e.key === "ArrowUp") {
        this.calcValue(e, 1);
      } else if (e.key === "ArrowDown") {
        this.calcValue(e, 0);
      }
    },
    onUpdate(e) {
      const v = e.target.value;
      const { input, output } = this.getValue(v, false);
      // console.log("update", `origin: ${v}`, `input: ${input}`, `output: ${output}`);
      this.inputValue = input;
      e.target.value = input;

      if (!isValidNumber(output) && !isEmpty(v)) {
        return;
      }
      const { max, min } = this;
      if ((output && output > max) || (output && output < min)) {
        return;
      }
      this.outputValue = output;
      this.$emit("input", output);
      e.preventDefault?.();
    },
    blurHandle(e) {
      const { input, output } = this.getValue(this.outputValue, true);

      this.inputValue = input;
      this.outputValue = output;
      this.$emit("input", output);
      this.$emit("blur", e);
    }
  },
  provide() {
    return {
      InputNumber: this
    }
  },
  render() {
    let { controls } = this
    const props = {
      props: {
        ...this.$props,
        inputType: 'input-number',
        value: this.inputValue
      },
      attrs: { ...this.$attrs },
      on: {
        ...this.$listeners,
        'input': (e) => this.onUpdate({target: {value: e}}),
        'blur': (e) => this.blurHandle(e),
        'keydown': (e) => this.onKeyDown(e),
        // 'change': (e) => this.change(e),
      },
    }
    // const { suffix } = this
    // const suffixNode = this.$slots.suffix || (suffix ? <div class="k-input-number-suffix">{suffix}</div> : null)
    return <BaseInput {...props}>
      {/* <template slot="suffix">
        {suffixNode}
      </template> */}
      <template slot='controls'>
        {controls ? <div class="k-input-number-controls">
          <span class="k-input-number-control" onClick={(e) => this.calcValue(e, 1)}><Icon type={ChevronUp} /></span>
          <span class="k-input-number-control" onClick={(e) => this.calcValue(e)}><Icon type={ChevronUp} /></span>
        </div> : null}
      </template>
    </BaseInput>
  }
}
export default withInstall(InputNumber)