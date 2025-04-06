<script lang="jsx">
import Info from './info.md'
import Base from './base.md'
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
</script>