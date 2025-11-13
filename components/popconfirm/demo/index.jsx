import Info from './info.md'
import Base from './basic.md'
import Local from './local.md'
import Placement from './placement.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div class="demo-popconfirm">
        <Info />
        <Base />
        <Local />
        <Placement />
        <CN />
      </div>
    )
  }
}