import { withInstall } from '../utils/vue'
import { getChild } from '../utils/element'

const Breadcrumb = {
  name: 'Breadcrumb',
  render() {
    return (
      <div class="k-breadcrumb">
        {getChild(this.$slots.default)}
      </div>
    )
  }
}
export default withInstall(Breadcrumb);
