<script>
import Base from './base'
import Disabled from './disabled'
import Size from './size'
import WithIcon from './with-icon.md'
import Loading from './loading.md'
import Group from './group.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Base />
        <Disabled />
        <Size />
        <WithIcon />
        <Loading />
        <Group/>
        <api><CN /></api>
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