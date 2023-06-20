<script>
import Info from './info.md'
import Base from './base.md'
import Disabled from './disabled.md'
import Size from './size.md'
import Solid from './solid.md'
import Normal from './normal.md'
import Light from './light.md'
import WithIcon from './with-icon.md'
import Loading from './loading.md'
import Block from './block.md'
import Group from './group.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-button">
        <Info />
        <Base />
        <Solid />
        <Light />
        <Normal />
        <WithIcon />
        <Size />
        <Disabled />
        <Loading />
        <Block />
        <Group />
        <CN />
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
  .k-btn-group,
  .k-radio-group {
    .k-btn {
      margin-right: 0px;
      margin-bottom: 0px;
    }
  }
}
</style>