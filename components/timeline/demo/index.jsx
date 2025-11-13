import Info from './info.md'
import Base from './basic.md'
import Icon from './icon.md'
import Mode from './mode.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Icon />
        <Mode />
        <CN />
      </div>
    )
  }
}