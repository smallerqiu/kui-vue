<script>
import Info from './info'
import Base from './base.md'
import Placement from './placement.md'
import Color from './color.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-tooltip">
        <Info class="typo" />
        <Base />
        <Placement />
        <Color />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-tooltip {
  .k-btn {
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 70px;
  }
}
.demo-tooltip-color .k-btn {
  margin:0 8px 8px 0;
  min-width: auto;
}
</style>