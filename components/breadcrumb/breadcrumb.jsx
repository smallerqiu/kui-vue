import { withInstall } from '../utils/vue'
import { getChildren } from '../utils/element'

const Breadcrumb = {
  name: 'Breadcrumb',
  render() {
    return (
      <div class="k-breadcrumb">
        {getChildren(this.$slots.default)}
      </div>
    )
  }
}
export default withInstall(Breadcrumb);
