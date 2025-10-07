import { getChild } from '../utils/element'
import cloneVNode from '../utils/clone'
import { withInstall } from '../utils/vue'
const AvatarGroup = {
  name: 'AvatarGroup',
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
export default withInstall(AvatarGroup)