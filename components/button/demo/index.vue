<script>
import Base from './base'
import Disabled from './disabled'
import Size from './size'
import WithIcon from './with-icon.md'
import Group from './group.md'
import Api from '../index.md'
export default {
  mounted() {

  },
  render() {
    return (
      <div>
        <Base />
        <Disabled />
        <Size />
        <WithIcon />
        <Group />
        <Api />
      </div>
    )
  }
}

</script>
<style>
.k-demo .k-button {
  margin-bottom: 10px;
}
</style>