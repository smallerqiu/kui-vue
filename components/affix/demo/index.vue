<script lang="jsx">
import Info from './info.md'
import Base from './base.md'
import Callback from './callback.md'
import Container from './container.md'
import Bottom from './bottom.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Callback />
        <Container />
        <Bottom />
        <CN />
      </div>
    )
  }
}
</script>