<script>
import Info from './info'
import Base from './base.md'
import Checkable from './checkable.md'
import Disabled from './disabled.md'
import Sync from './sync.md'
import Icon from './icon.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Checkable />
        <Disabled />
        <Sync />
        <Icon />
        <CN class="typo" />
      </div>
    )
  }
}
</script>