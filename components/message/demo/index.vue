<script lang="jsx">
import Info from './info.md'
import Base from './base.md'
import Icon from './icon.md'
import Types from './types.md'
import Close from './close.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div class="demo-message">
        <Info />
        <Base />
        <Icon />
        <Types />
        <Close />
        <CN />
      </div>
    )
  }
}
</script>