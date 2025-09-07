<script lang="jsx">
import Base from './base.md'
import Stroke from './stroke.md'
import Info from './info.md'
import Use from './use.md'
import Search from './search.vue'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Search />
        <Use />
        <Base />
        <Stroke />
        <CN />
      </div>
    )
  }
}
</script>