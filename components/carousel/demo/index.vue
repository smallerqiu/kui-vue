<script>
import Info from './info.md'
import Base from './base.md'
import Vertical from './vertical.md'
import AutoPlay from './autoplay.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-carousel">
        <Info class="typo" />
        <Base />
        <Vertical />
        <AutoPlay />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-carousel {
  .k-carousel {
    height: 230px;
    .k-carousel-item {
      background: #6c98d6;
      line-height: 230px;
      text-align: center;
      font-size: 30px;
      font-weight: bold;
      color: #fff;
    }
  }
}
</style>