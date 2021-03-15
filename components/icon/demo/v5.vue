<script>
import Base from './base'
import Info from './info'
import Search from './search-v5.vue'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo"/>
        <Base />
        <CN class="typo"/>
        <Search />
      </div>
    )
  }
}
</script>