<script>
import Base from './base'
import Info from './info'
import Search from './search.vue'
import CN from '../index.md'
export default {
  mounted() {

  },
  render() {
    return (
      <div>
        <Info />
        <Base />
        <api><CN /></api>
        <Search />
      </div>
    )
  }
}
</script>