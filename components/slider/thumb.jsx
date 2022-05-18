import Tooltip from "../tooltip"
import { getMaxDigit, toNumber } from '../_tool/number'
export default {
  props: {
    vertical: Boolean,
    disabled: Boolean,
    range: Boolean,
    reverse: Boolean,
    max: Number,
    step: Number,
    value: [Number, Array],
    tipFormatter: [Function, Object],
    type: String,
    tooltipVisible: Boolean
  },
  inject: {
    bar: { default: null },
  },
  data() {
    return {
      index: 1,
      showTip: false
    }
  },
  computed: {
    rect() {
      return this.bar.$refs.rail.getBoundingClientRect()
    }
  },
  methods: {
    mouseMove(e) {
      if (this.isMouseDown) {
        let { clientX, clientY } = e
        let { width, height, left, right, top, bottom } = this.rect
        let { value, range, step, max, vertical, reverse } = this, v = value;

        let percent = 0;
        if (reverse) {
          percent = vertical ? ((height - (clientY - top)) / height) : ((width - (clientX - left)) / width)
        } else {
          percent = vertical ? ((clientY - top) / height) : ((clientX - left) / width)
        }
        if (percent >= 1) percent = 1
        else if (percent <= 0) percent = 0
        // this.defaultValue = value


        if (this.type == 'right') {
          let x1 = 0;
          if (range) {
            let [x, y] = value
            v = y
            x1 = x
          } else {
            v = value
          }

          let digit = getMaxDigit(step, v)
          v = (((percent * max) / step) * step).toFixed(digit)

          v = toNumber(v)
          if (range) {
            v = Math.max(v, x1)
            v = [x1, v]
          }
        } else {
          let [x, y] = value
          let digit = getMaxDigit(step, x)
          v = ((percent * max / step) * step).toFixed(digit)
          v = toNumber(v)

          v = Math.min(v, y)
          v = [v, y]
        }
        this.$emit('input', v)
      }
    },
    mouseUp(e) {
      this.isMouseDown = false
      this.index = 1
      if (this.tooltipVisible === true) {
        this.showTip = true
      } else {
        this.showTip = false
      }
      document.removeEventListener('mousemove', this.mouseMove)
      document.removeEventListener('mouseup', this.mouseUp)
    },
    onMouseDown(e) {
      if (this.disabled) return;
      this.isMouseDown = true
      this.showTip = true
      this.index = 2
      this.mouseMove(e)
      document.addEventListener('mousemove', this.mouseMove)
      document.addEventListener('mouseup', this.mouseUp)
    }
  },
  render() {
    let { vertical, value, index, disabled, max, tipFormatter, range, type, reverse, tooltipVisible } = this
    const props = {
      class: 'k-slider-thumb',
      style: {
        // left: `${percent}%`,
        zIndex: index
      },
      on: {
        mousedown: this.onMouseDown,
        mouseenter: () => {
          if (!disabled) this.showTip = true
        },
        mouseleave: (e) => {
          if (this.tooltipVisible == true) {
            this.showTip = true
            return
          }
          if (!this.isMouseDown) {
            this.showTip = false
          }
        }
      }
    }
    let percent;
    if (type == 'right') {
      percent = ((range ? value[1] : value) / max) * 100
    } else {
      percent = (value[0] / max) * 100
    }
    let sty = {}
    if (vertical) {
      sty = reverse ? { bottom: `${percent}%`, transform: 'translateY(50%)' } :
        { top: `${percent}%` }
    } else {
      sty = reverse ? { right: `${percent}%`, transform: 'translateX(50%)' } :
        { left: `${percent}%` }
    }
    props.style = Object.assign(props.style, sty)

    if (tipFormatter === null || tooltipVisible === null) return <div {...props}></div>

    let tip = ''
    if (type == 'right') {
      tip = this.range ? value[1] : value
    } else {
      tip = value[0]
    }
    tip = tip.toString()

    if (tipFormatter !== undefined) {
      tip = tipFormatter(tip)
    }
    const tipProps = {
      props: {
        title: tip,
        value: this.showTip,
        show: tooltipVisible,
        trigger: 'nromal',
      },
      on: {
        input: value => this.showTip = value
      }
    }
    return <Tooltip {...tipProps}><div {...props}></div></Tooltip >
  }
}