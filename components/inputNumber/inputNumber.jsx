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
    theme: String,
  },
  watch: {
    value(v) {
      if (this.formatter) {
        v = this.formatter(v + '')
      }
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
          v = (v + '').replace(/^([^-]+)(?=-\S*)/, '') // 移除第一个负号之前的所有字符
            .replace(/(?<!^)-/g, '')         // 移除第一个负号之外的所有负号
            .replace(/[^0-9.-]/g, '')        // 移除数字 小数点 负号之外的所有字符
            .replace(/(?<!^[\d-]+)\./g, '')   // 移除第一个小数点之外的所有句点
          // .replace(/^0*(-?\d+)(\.(\d{1,2}))?\S*?$/, '$1$2') // 保留两位小数
          // console.log(v)
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

      return v
    },
    setVal(up) {
      if (this.disabled) return;
      let { step = 1, defaultValue, parser, formatter } = this

      let v = this.getVal(defaultValue) || 0

      if (parser) {
        v = parser(v + '')
      }
      v = up == 1 ? plus(v, step) : minus(v, step)

      let a = this.getVal(v)

      // console.log('a', a)

      this.defaultValue = a + ''


      if (parser) {
        a = parser(a)
      }


      this.$emit('input', a)
      this.$emit('change', a)
    },
    change(x) {
      let { formatter, parser } = this
      let input = x + '', output = x;

      if (formatter) {
        input = formatter(x + '')
      }
      // if (formatter) {
      //   x = formatter(x + '')
      // }
      this.defaultValue = input

      // output = toNumber(output + '')

      this.$emit('input', output)
      this.$emit('change', output)
    },
    blurHandle(e) {
      let v = this.getVal(e.target.value)
      // console.log(v)
      this.defaultValue = v + ''
      // console.log('blur1', v)

      let output = v
      if (this.parser) {
        output = this.parser(output + '')
      }
      // console.log('blur2', output)
      if (output !== '') {
        output = toNumber(output + '')
      }
      // console.log('blur3', output)

      this.$emit('input', output)
      this.$emit('blur', e)
      this.$emit('change', output);
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