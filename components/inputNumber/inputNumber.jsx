import BaseInput from '../base/input'
import Icon from '../icon'
import { plus, minus, round, toNumber } from '../_tool/number'
export default {
  props: {
    value: [Array, Number, String],
    min: { type: Number },
    max: { type: Number },
    disabled: Boolean,
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
  },
  watch: {
    value(v) {
      this.defaultValue = v //this.getVal(v)
      // console.log('watch', this.defaultValue)
    }
  },
  data() {
    return {
      defaultValue: this.getVal(this.value),
    }
  },
  methods: {
    getVal(v) {
      let { min, max, precision, formatter, parser } = this
      if (parser) {
        v = parser(v + '')
      }
      if (v !== undefined && v !== '' && v !== null) {
        if (isNaN(Number(v))) {
          v = (v + '').replace(/[^\d]+/g, '')
          console.log(v)
        }
        if (v === '') return ''
        v = toNumber(v + '')
      } else {
        return ''
      }


      if (max !== undefined && v >= max) v = max
      else if (min !== undefined && v <= min) v = min

      if (precision > 0) {
        v = round(v, precision)
      }

      if (formatter) {
        v = formatter(v + '')
      }
      // if (parser) {
      //   v = parser(v + '')
      // }
      // console.log(v)

      return v
    },
    setVal(up) {
      if (this.disabled) return;
      let { step = 1, defaultValue, parser } = this

      let v = this.getVal(defaultValue) || 0

      if (parser) {
        v = parser(v + '')
      }
      v = up == 1 ? plus(v, step) : minus(v, step)
      v = this.getVal(v)
      this.defaultValue = v

      this.$emit('input', v)
      this.$emit('change', v)
    },
    change(x) {
      // let x = e.target.value + ''
      let { formatter, parser } = this
     
      if (parser) {
        x = parser(x + '')
      }
      console.log(x)
      return;
      // if (formatter) {
      //   x = formatter(x + '')
      // }
      // e.target.value = x + ''
      this.defaultValue = x + ''
      if (parser) {
        x = parser(x + '')
      }
      this.$emit('input', x)
      this.$emit('change', x)
    },
    blurHandle(e) {
      let v = this.getVal(e.target.value)
console.log(v)
      this.defaultValue = v + ''

      let x = v
      if (this.parser) {
        x = this.parser(x + '') * 1
      }
      // console.log('blur', v, x)

      this.$emit('input', x)
      this.$emit('blur', e)
      this.$emit('change', x);
    }
  },
  provide() {
    return {
      Input: this
    }
  },
  render() {
    let { defaultValue, controls } = this
    const props = {
      props: {
        ...this.$props,
        inputType: 'input-number',
        value: defaultValue + ''
      },
      attrs: { ...this.$attrs },
      on: {
        ...this.$listeners,
        'input': (e) => this.change(e),
        'blur': (e) => this.blurHandle(e),
        // 'change': (e) => this.change(e),
      },
    }
    const { suffix } = this
    const suffixNode = this.$slots.suffix || (suffix ? <div class="k-input-number-suffix">{suffix}</div> : null)
    return <BaseInput {...props}>
      <template slot="suffix">
        {suffixNode}
        {controls ? <div class="k-input-number-controls">
          <span class="k-input-number-control" onClick={() => this.setVal(1)}><Icon type="chevron-up" /></span>
          <span class="k-input-number-control" onClick={this.setVal}><Icon type="chevron-down" /></span>
        </div> : null}
      </template>
    </BaseInput>
  }
} 