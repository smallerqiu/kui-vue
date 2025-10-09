import { getChildren } from '../utils/element'
import cloneVNode from '../utils/clone'
import { withInstall } from '../utils/vue'
const Space = {
  name: 'Space',
  props: {
    align: {
      type: String,
      validator(value) {
        return value ? ["start", "end", "center", "baseline"].indexOf(value) >= 0 : true;
      }
    },
    vertical: Boolean,
    wrap: Boolean,
    block: Boolean,
    compact: Boolean,
    size: {
      type: [String, Number, Array],
      // default: 'small',
      validator(value) {
        return (typeof value == 'number' || Array.isArray(value)) ? true : ["small", "middle", "large"].indexOf(value) >= 0;
      }
    }
  },
  render() {
    let { align, vertical, $slots, size, wrap, compact, block } = this
    align = (!vertical && !align) ? 'center' : align
    const props = {
      style: {},
      class: ['k-space', {
        [`k-space-vertical`]: vertical,
        [`k-space-compact`]: compact,
        [`k-space-wrap`]: wrap,
        [`k-space-block`]: block,
        [`k-space-align-${align}`]: align,
      }],
      on: {
        ...this.$listeners
      }
    }
    if (!size && !compact) {
      props.style.gap = '8px'
    }
    if (!compact) {
      if (Array.isArray(size)) {
        props.style = { gap: `${size[1]}px ${size[0]}px` }
      } else if (/small|middle|large/.test(size)) {
        let sizes = { small: 8, middle: 16, large: 24 }
        props.style.gap = sizes[size] + 'px'
      } else if (size !== undefined && size !== null) {
        props.style.gap = `${size}px`
      }
    }
    let children = $slots.default
    let split = $slots.split

    children = getChildren(this.$slots.default)
    let newChildren = []

    for (let i = 0; i < children.length; i++) {
      let pre = vertical ? 'vertical-' : ''
      let p = {
        props: {
          size
        },
        class: {
          [`k-space-${pre}first-item`]: i == 0,
          [`k-space-${pre}item`]: i > 0 && i < children.length - 1,
          [`k-space-${pre}last-item`]: i == children.length - 1,
        }
      }
      let child = compact ? cloneVNode(children[i], p) : <div {...p}>{children[i]}</div>
      // let child = cloneVNode(children[i], p) 
      newChildren.push(child)
      if (split) {
        if (i < children.length - 1) {
          newChildren.push(split)
        }
      }
    }
    children = newChildren

    return <div {...props}>{children}</div>
  }
}
export default withInstall(Space)