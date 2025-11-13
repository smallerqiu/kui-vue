import Base from './basic.md'
import Info from './info.md'
import Dot from './dot.md'
import Max from './max.md'
import Dynamic from './dynamic.md'
import Mark from './mark.md'
import Status from './status.md'
import Color from './color.md'
import CN from '../index.md'
export default {
  setup() {
    return ()=>(
      <div class="demo-dot">
        <Info />
        <Base />
        <Dot />
        <Max />
        <Mark />
        <Dynamic />
        <Status />
        <Color />
        <CN />
      </div>
    )
  }
}