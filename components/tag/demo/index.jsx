import Info from './info.md'
import Base from './basic.md'
import Size from './size.md'
import Icons from './icon.md'
import Color from './color.md'
import Dynamic from './dynamic.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Size />
        <Icons />
        <Color />
        <Dynamic />
        <CN />
      </div>
    )
  }
}