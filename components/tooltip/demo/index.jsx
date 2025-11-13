import Info from './info.md'
import Base from './basic.md'
import Placement from './placement.md'
import Color from './color.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div class="demo-tooltip">
        <Info />
        <Base />
        <Placement />
        <Color />
        <CN />
      </div>
    )
  }
}