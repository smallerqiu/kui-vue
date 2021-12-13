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
  data() {
    return {
      defaultValue: this.value || 0,
      timer: null,
    }
  },
  methods: {
    change(e) {
      let value = e.target.value * 1
      this.defaultValue = value
      this.$emit('input', value)

      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.$emit('change', value)
      }, 300);
    }
  },
  render() {
    let { min, max, step, disabled, direction } = this
    let props = {
      class: 'k-slider-bar',
      attrs: {
        min, max, step,
        value: this.defaultValue,
        type: 'range',
        disabled,
      },
      style: {
        'background': `linear-gradient(to right, #3a95ff ${(this.defaultValue - min) / (max - min) * 100}%, rgba(255, 255, 255, 0.3) 0%)`
      },
      on: {
        input: this.change
      }
    }
    // todo: 懒得写, 用input range 替代, 等需求复杂了, 再继续写更多
    return <div class={['k-slider', { 'k-slider-disabled': disabled }]}><input {...props} /></div>
  }

} 