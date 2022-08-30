<script>
import Base from './base.md'
import Info from './info.md'
import Bordered from './bordered.md'
import Size from './size.md'
import Layout from './layout.md'
import LayoutBordered from './layout-bordered.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Bordered />
        <Size />
        <Layout />
        <LayoutBordered />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 