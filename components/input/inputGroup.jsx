import { getChildren } from '../utils/element'
// import cloneVNode from '../utils/clone'
import { cloneVNode } from '../utils/vue';
import { withInstall } from '../utils/vue'
const InputGroup = {
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
        return (typeof value == 'number' || Array.isArray(value)) ? true : ["small", "middle", "large", 'default'].indexOf(value) >= 0;
      }
    },
  },
  render() {
    let { $slots, size, compact, block } = this
    const props = {
      style: {},
      class: ['k-input-group', {
        [`k-input-group-compact`]: compact,
        [`k-input-group-block`]: block,
        [`k-input-group-lg`]: size == 'large',
        [`k-input-group-sm`]: size == 'small',
      }],
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
    if (compact) {
      children = getChildren(this.$slots.default)
      let newChildren = []
      for (let i = 0; i < children.length; i++) {
        let child = cloneVNode(children[i], {
          props: {
            size
          },
          class: {
            [`k-input-group-first-item`]: i == 0,
            [`k-input-group-item`]: i > 0 && i < children.length - 1,
            [`k-input-group-last-item`]: i == children.length - 1,
          }
        }, true)
        newChildren.push(child)
      }
      children = newChildren

    }
    // console.log(props)
    return <div {...props}>{children}</div>
  }
}
export default withInstall(InputGroup)