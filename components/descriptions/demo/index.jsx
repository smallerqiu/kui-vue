import Base from './basic.md'
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