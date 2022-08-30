<script>
import Base from './base.md'
import Stroke from './stroke.md'
import Info from './info.md'
import Search from './search.vue'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo"/>
        <Base />
        <Stroke />
        <CN class="typo"/>
        <Search />
      </div>
    )
  }
}
</script>