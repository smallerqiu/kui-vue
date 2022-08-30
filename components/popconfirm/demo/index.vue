<script>
import Info from './info.md'
import Base from './base.md'
import Local from './local.md'
import Placement from './placement.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-popconfirm">
        <Info class="typo" />
        <Base />
        <Local />
        <Placement />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-popconfirm {
  .k-btn{
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 70px;
  }
}
</style>