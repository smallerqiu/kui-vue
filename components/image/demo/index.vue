<script>
import Info from './info'
import Base from './base'
import Origin from './origin'
import Errors from './errors'
import Group from './group'
import Extra from './extra'
import ExtraGloble from './extra_globle'
import Globle from './globle'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-image">
        <Info class="typo" />
        <Base />
        <Origin />
        <Errors />
        <Group />
        <Extra />
        <Globle />
        <ExtraGloble />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 
<style lang='less'>
.img-panel {
  padding: 0 50px;
  width: 256px;
  overflow: hidden;
  h2 {
    color: #fff;
    font-size: 20px;
  }
  .k-row {
    margin: 20px 0 30px;
    font-size: 13px;
    .k-icon {
      font-size: 24px;
      color: #999;
      margin-right: 20px;
      margin-top: 8px;
    }
    .title {
      color: #eee;
    }
    .sub {
      color: #999;
      margin-top: 5px;
    }
  }
}
</style>