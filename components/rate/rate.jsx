import Tooltip from "../tooltip"
import Star from './star'
export default {
  name: 'Rate',
  props: {
    value: { type: Number, default: 0 },
    allowClear: { type: Boolean, default: true },
    allowHalf: Boolean,
    character: [String, Function],
    icon: [String, Function],
    count: { type: Number, default: 5 },
    disabled: Boolean,
    tooltips: Array,
    showScore: Boolean
  },
  data() {
    return {
      defaultValue: this.value,
      tempValue: this.value,
    }
  },
  watch: {
    value(v) {
      this.defaultValue = v
      this.tempValue = v
    }
  },
  render() {
    let { count, tempValue, allowHalf, character, disabled, tooltips = [], icon, showScore } = this
    const stars = []
    if (Number(count) == NaN || count <= 0) {
      count = 5
    }
    if (count > 15) count = 15

    for (let i = 0; i < count; i++) {
      let v = parseInt(tempValue * 100 - i * 100)
      let percent = tempValue > i && tempValue < i + 1 ? v : 0
      // let show_percent = percent != 50 && disabled && percent > 0
      let half = (tempValue > i && tempValue < i + 1 && allowHalf) || (percent == 50)
      // console.log(i, percent, show_percent, half)
      let props = {
        props: {
          allowHalf,
          full: tempValue > i && !half,
          half,
          icon, character,
          disabled,
          value: i,
          percent,
          tooltips: tooltips[i],
        },
        key: i,
        on: {
          click: this.click,
          mouseenter: this.mouseenter,
          mouseleave: this.mouseleave,
        }
      }
      stars.push(<Star  {...props} />)
    }
    let props = {
      class: "k-rate",
      on: { mouseleave: this.reset }
    }
    return (
      <div {...props}>
        {stars}
        {disabled && showScore ? <span class="k-rate-score">{this.value}</span> : null}
      </div>
    )
  },
  methods: {
    reset() {
      this.tempValue = this.defaultValue
    },
    click(index) {
      index = index + 1
      // console.log(index, this.defaultValue)
      if (this.defaultValue && this.allowClear && index == this.defaultValue) {
        index = 0
      }
      if (this.defaultValue != index) {
        this.$emit('change', index)
      }
      this.defaultValue = index
      this.tempValue = index

      this.$emit('input', index)
    },
    mouseenter(index) {
      // index = index + 1
      this.tempValue = index + 1
    },
    mouseleave(index) {
      // console.log(this.value)
    }
  }
}