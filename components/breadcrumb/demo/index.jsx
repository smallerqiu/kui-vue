import Info from './info.md'
import Base from './basic.md'
import Icon from './icon.md'
import Separator from './separator.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Icon />
        <Separator />
        <CN />
      </div>
    )
  }
}