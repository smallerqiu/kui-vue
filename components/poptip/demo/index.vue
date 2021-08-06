<script>
import Info from './info'
import Base from './base.md'
import Trigger from './trigger.md'
import Closeinside from './closeinside.md'
import Placement from './placement.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-poptip">
        <Info class="typo" />
        <Base />
        <Trigger />
        <Closeinside />
        <Placement />
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