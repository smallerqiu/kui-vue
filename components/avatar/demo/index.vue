<script>
import Info from './info.md'
import Base from './base.md'
import Types from './types.md'
import Change from './change.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-avatar">
        <Info class="typo" />
        <Base />
        <Types />
        <Change />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-avatar{
  .k-avatar{
    margin: 0 10px 10px 0;
  }
}
</style>