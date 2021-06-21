<script>
import Info from './info'
import Base from './base.md'
import Checkable from './checkable.md'
import CustomRender from './custom-render.md'
import Disabled from './disabled.md'
import Sync from './sync.md'
import Icon from './icon.md'
import Directory from './directory.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Checkable />
        <CustomRender />
        <Disabled />
        <Sync />
        <Icon />
        <Directory />
        <CN class="typo" />
      </div>
    )
  }
}
</script>