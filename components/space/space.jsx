import { getChild } from '../_tool/utils'
export default {
  name: 'Space',
  props: {
    align: {
      type: String,
      default: 'center',
      validator(value) {
        return value ? ["start", "end", "center", "baseline"].indexOf(value) >= 0 : true;
      }
    },
    direction: {
      type: String,
      default: 'horizontal',
      validator(value) {
        return ["vertical", "horizontal"].indexOf(value) >= 0;
      }
    },
    size: {
      type: [String, Number],
      default: 'small',
      validator(value) {
        return typeof value == 'number' ? true : ["small", "middle", "large"].indexOf(value) >= 0;
      }
    }
  },
  render() {
    let { align, direction, $slots, size } = this
    const classes = ['k-space', {
      [`k-space-${direction}`]: direction,
      [`k-space-align-${align}`]: align,
    }]
    let mrs = { small: 8, middle: 16, large: 24 }

    let mr = typeof size == 'number' ? size : mrs[size]

    const childs = getChild(this.$slots.default)

    let style = {}

    if (direction == 'vertical') {
      style.marginBottom = `${mr}px`
    } else {
      style.marginRight = `${mr}px`
    }

    return (
      <div class={classes}>
        {
          childs.map((child, i) => {
            return <div class="k-space-item" style={i != childs.length - 1 ? style : null}>{child}</div>
          })
        }
      </div>
    )
  }
}