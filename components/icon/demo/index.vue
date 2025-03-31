<script lang="jsx">
import Base from './base.md'
import Stroke from './stroke.md'
import Info from './info.md'
import Search from './search.vue'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Stroke />
        <CN />
        <Search />
      </div>
    )
  }
}
</script>