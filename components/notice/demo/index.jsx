import Info from './info.md'
import Base from './basic.md'
import Types from './types.md'
import Icon from './icon.md'
import Close from './close.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div class="demo-notice">
        <Info />
        <Base />
        <Types />
        <Icon />
        <Close />
        <CN />
      </div>
    )
  }
}