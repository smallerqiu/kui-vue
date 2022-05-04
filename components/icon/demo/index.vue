<script>
import Base from './base'
import Stroke from './stroke'
import Info from './info'
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