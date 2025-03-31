<script lang="jsx">
import Info from './info.md'
import Base from './base.md'
import Default from './default.md'
import WithText from './with-text.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Default />
        <WithText />
        <CN />
      </div>
    )
  }
}

</script>