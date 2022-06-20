import Icon from '../icon'
import Tooltip from '../tooltip'
import { Star } from 'kui-icons'
export default {
  name: 'Star',
  props: {
    value: { type: Number },
    character: [String, Function],
    tooltips: String,
    percent: Number,
    full: Boolean,
    half: Boolean,
    allowHalf: Boolean,
    disabled: Boolean,
    icon: [String, Function, Array],
    size: Number,
  },
  data() {
    return {
      checked: false,
      tempValue: 0
    }
  },
  render() {
    let { character, checked, full, half, allowHalf, tooltips, icon, percent, disabled, size } = this
    const props = {
      class: ['k-star', {
        'k-star-checked': checked,
        'k-star-full': full,
        'k-star-half': half,
      }],
      on: {
        mouseenter: this.mouseEnter,
        mouseleave: this.mouseLeave,
        // mousemove: this.mousemove,
        click: this.click
      }
    }
    const show_percent = disabled && percent != 50 && percent
    if (allowHalf) {
      props.on.mousemove = this.mousemove
    }
    if (typeof character == 'function') {
      character = character(this.value)
    }
    if (typeof icon == 'function') {
      icon = icon(this.value)
    }
    character = character ? <span>{character}</span> : null
    const node = <span {...props}>
      <span class={['k-star-front', {}]} style={{ width: show_percent ? percent + '%' : null }}>{character || <Icon type={icon || Star} size={size} />}</span>
      <span class="k-star-back">{character || <Icon type={icon || Star} size={size} />}</span>
    </span>
    return tooltips ? <Tooltip title={tooltips}>{node}</Tooltip> : node
  },
  methods: {
    click() {
      if (this.disabled) return;
      this.$emit('click', this.tempValue || this.value)
    },
    mouseEnter() {
      if (this.disabled) return;
      this.checked = true
      this.$emit('mouseenter', this.tempValue || this.value)
    },
    mouseLeave() {
      if (this.disabled) return;
      this.checked = false
      this.$emit('mouseleave', this.tempValue || this.value)
    },
    mousemove(e) {
      if (this.disabled || !this.allowHalf) return;
      let num = this.$vnode.key
      let { target, clientX } = e
      if (target) {
        let { left, width } = target.getBoundingClientRect()
        let center = parseInt(left) + parseInt(width) / 2
        if (clientX < center) {
          num -= 0.5
        }
      }
      this.tempValue = num
      this.$emit('mouseenter', num)
    }
  }
}