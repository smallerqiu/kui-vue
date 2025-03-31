<script lang="jsx">
import Base from './base.md'
import Info from './info.md'
import Bordered from './bordered.md'
import Size from './size.md'
import Layout from './layout.md'
import LayoutBordered from './layout-bordered.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div class="demo-descriptions">
        <Info />
        <Base />
        <Bordered />
        <Size />
        <Layout />
        <LayoutBordered />
        <CN />
      </div>
    )
  }
}
</script>
<style lang="less">
.demo-descriptions {
  .k-content {
    overflow: auto hidden;
  }
}
</style>