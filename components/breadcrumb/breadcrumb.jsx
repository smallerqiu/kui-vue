import { getChild } from '../_tool/utils'
export default {
  name: 'Breadcrumb',
  render() {
    return (
      <div class="k-breadcrumb">
        {getChild(this.$slots.default)}
      </div>
    )
  }
}
