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
    vertical: Boolean,
    wrap: Boolean,
    size: {
      type: [String, Number, Array],
      default: 'small',
      // validator(value) {
      //   return typeof value == 'number' || Array.isArray(value) ? true : ["small", "middle", "large"].indexOf(value) >= 0;
      // }
    }
  },
  render() {
    let { align, vertical, $slots, size, wrap } = this
    const props = {
      class: ['k-space', {
        [`k-space-vertical`]: vertical,
        [`k-space-lg`]: size == 'large',
        [`k-space-md`]: size == 'middle ',
        [`k-space-wrap`]: wrap,
        [`k-space-align-${align}`]: align,
      }]
    }
    if (Array.isArray(size)) {
      props.style = { gap: `${size[1]}px ${size[0]}px` }
    } else if (size && !/small|large/.test(size)) {
      props.style = { gap: `${size}px` }
    }
    // let mrs = { small: 8, middle: 16, large: 24 }

    // let mr = typeof size == 'number' ? size : mrs[size]

    // const childs = getChild(this.$slots.default)

    // let style = {}

    // if (direction == 'vertical') {
    //   style.marginBottom = `${mr}px`
    // } else {
    //   style.marginRight = `${mr}px`
    // }
    return <div {...props}>{$slots.default}</div>
    // return (
    //   <div class={classes}>
    //     {
    //       childs.map((child, i) => {
    //         return <div class="k-space-item" style={i != childs.length - 1 ? style : null}>{child}</div>
    //       })
    //     }
    //   </div>
    // )
  }
}