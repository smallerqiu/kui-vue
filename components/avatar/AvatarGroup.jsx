import { getChild, cloneVNode } from '../_tool/utils'

export default {
  props: {
    maxCount: Number,
    shape: String,
    size: [String, Number]
  },
  render() {
    let child = getChild(this.$slots.default)
    let { shape, size } = this
    return (
      <div class="k-avatar-group">
        {
          child.map(c => {
            return cloneVNode(c, { props: { shape, size } })
          })
        }
      </div>
    )
  }
}