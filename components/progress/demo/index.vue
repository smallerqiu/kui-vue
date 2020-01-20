<script>
import Info from './info'
import Base from './base.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-poptip">
        <Info class="typo" />
        <Base />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-poptip {
  .k-btn{
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 70px;
  }
}
</style>