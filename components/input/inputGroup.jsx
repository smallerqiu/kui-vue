import { getChild } from '../_tool/utils'
import cloneVNode from '../_tool/clone'
export default {
  name: 'InputGroup',
  props: {
    block: Boolean,
    compact: {
      type: Boolean,
      default: true
    },
    size: {
      type: [String, Number, Array],
      default: 'default',
      validator(value) {
        return (typeof value == 'number' || Array.isArray(value)) ? true : ["small", "middle", "large"].indexOf(value) >= 0;
      }
    }
  },
  render() {
    let { $slots, size, compact, block } = this
    const props = {
      style: {},
      class: ['k-input-group', {
        [`k-input-group-compact`]: compact,
        [`k-input-group-block`]: block,
      }]
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
    let childs = $slots.default
    if (compact) {
      childs = getChild(this.$slots.default)
      let newChilds = []
      for (let i = 0; i < childs.length; i++) {
        let child = cloneVNode(childs[i], {
          props: {
            size
          },
          class: {
            [`k-input-group-first-item`]: i == 0,
            [`k-input-group-item`]: i > 0 && i < childs.length - 1,
            [`k-input-group-last-item`]: i == childs.length - 1,
          }
        })
        newChilds.push(child)
      }
      childs = newChilds

    }
    return <div {...props}>{childs}</div>
  }
}