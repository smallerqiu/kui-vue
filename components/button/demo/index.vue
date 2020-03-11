<script>
import Info from './info'
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
      <div class="demo-button">
        <Info class="typo" />
        <Base />
        <Disabled />
        <Size />
        <WithIcon />
        <Loading />
        <Group />
        <CN class="typo"/>
      </div>
    )
  }
}
</script>
<style lang="less">
.demo-button {
  .k-btn,
  .k-btn-group {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .k-btn-group .k-btn {
    margin-right: 0px;
    margin-bottom: 0px;
  }
}
</style>