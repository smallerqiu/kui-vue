<script>
import Base from './base.md'
import Info from './info.md'
import Disabled from './disabled.md'
import Options from './options.md'
import Group from './group.md'
import GroupVertical from './group-vertical.md'
import CheckAll from './check-all.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-checkbox">
        <Info />
        <Base />
        <Disabled />
        <Options />
        <Group />
        <GroupVertical />
        <CheckAll />
        <CN />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-checkbox {
  .k-btn {
    margin-left: 8px;
  }
}
</style>