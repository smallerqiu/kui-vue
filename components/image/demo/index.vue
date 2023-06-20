<script>
import Info from './info.md'
import Base from './base.md'
import Origin from './origin.md'
import Errors from './errors.md'
import Group from './group.md'
import Extra from './extra.md'
import ExtraGloble from './extra_globle.md'
import Globle from './globle.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-image">
        <Info />
        <Base />
        <Origin />
        <Errors />
        <Group />
        <Extra />
        <Globle />
        <ExtraGloble />
        <CN />
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