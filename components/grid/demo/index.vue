<script>
import Info from './info.md'
import Base from './base.md'
import Gutter from './gutter.md'
import Offset from './offset.md'
import Align from './align.md'
import Flex from './flex.md'
import Fill from './fill.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Gutter />
        <Offset />
        <Align />
        <Flex />
        <Fill />
        <CN class="typo"/>
      </div>
    )
  }
}
</script>
<style lang="less">
.demo-grid {
  .h-64{
    height:64px;
    line-height: 64px;
  }
  .h-96{
    height:96px;
    line-height: 96px;
  }
  .h-128{
    height:128px;
    line-height: 128px;
  }
  .h-72{
    height:72px;
    line-height: 72px;
  }
  .k-row-flex{
    padding: 10px 0;
    background: #f1f1f1;
  }
  .k-row {
    margin: 10px 0;
    .k-col {
      text-align: center;
      padding: 10px 0;
      color: #fff;
      &:nth-child(even) {
        background: rgba(0, 153, 229, 0.7);
      }
      &:nth-child(odd) {
        background: rgba(0, 153, 229, 0.9);
      }
    }
  }
  .k-row.row-gutter {
    .k-col {
      background: transparent;
      div {
        box-sizing: border-box;
        line-height: 45px;
        &:nth-child(even) {
          background: rgba(0, 153, 229, 0.7);
        }
        &:nth-child(odd) {
          background: rgba(0, 153, 229, 0.9);
        }
      }
    }
  }
}
</style>