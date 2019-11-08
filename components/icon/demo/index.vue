<script>
import Base from './base'
import Info from './info'
import Search from './search.vue'
import Api from '../index.md'
export default {
  mounted() {

  },
  render() {
    return (
      <div>
        <Info />
        <Base />
        <Api />
        <Search />
      </div>
    )
  }
}
</script>