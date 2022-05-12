export default {
  props: {
    value: [String, Number],
    min: { type: [Number, String], default: 0 },
    max: { type: [Number, String], default: 100 },
    disabled: Boolean,
    step: {
      type: [Number, String],
      default: 1,
      validator: (val) => val > 0
    },
    direction: {
      //todo:
      type: String,
      default: 'horizontal',
      validator: (val) => ['horizontal', 'vertical'].indexOf(val) >= 0
    }
  },
  watch: {
    value(v) {
      this.defaultValue = (v || this.min) * 1
    }
  },
  data() {
    return {
      defaultValue: this.value || 0
    }
  },
  render() {
    let { min, max, step, disabled, direction, defaultValue, groupContext } = this
    let props = {
      class: 'k-slider-bar',
      attrs: {
        min, max, step,
        value: defaultValue,
        defaultValue,
        type: 'range',
        disabled,
      },
      style: {
        'background': `linear-gradient(to right, var(--kui-color-main) ${(defaultValue - min) / (max - min) * 100}%, rgba(255, 255, 255, 0.3) 0%)`
      },
      on: {
        input: (e) => {
          let value = e.target.value
          this.defaultValue = value
          this.$emit('input', value)
        },
        change: (e) => {
          let value = e.target.value
          this.$emit('change', value)
        }
      }
    }
    // todo: 懒得写, 用input range 替代
    return <div class={['k-slider', { 'k-slider-disabled': disabled }]}><input {...props} /></div>
  }

} 