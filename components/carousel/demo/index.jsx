import Info from './info.md'
import Base from './basic.md'
import Vertical from './vertical.md'
import AutoPlay from './autoplay.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div class="demo-carousel">
        <Info />
        <Base />
        <Vertical />
        <AutoPlay />
        <CN />
      </div>
    )
  }
}