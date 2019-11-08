<script>
import Info from './info.md'
import Base from './base.md'
import Gutter from './gutter.md'
import Offset from './offset.md'
import API from '../index.md'
export default {
  mounted() {

  },
  render() {
    return (
      <div>
        <Info />
        <Base />
        <Gutter />
        <Offset />
        <API />
      </div>
    )
  }
}
</script>
<style lang="less">
.demo-grid {
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
  .pd {
    .k-col {
      background: none !important;
      div {
        padding: 10px 0;
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