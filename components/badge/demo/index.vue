<script>
import Base from './base.md'
import Info from './info.md'
import Dot from './dot.md'
import Max from './max.md'
import Dynamic from './dynamic.md'
import Mark from './mark.md'
import Status from './status.md'
import Color from './color.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-dot">
        <Info />
        <Base />
        <Dot />
        <Max />
        <Mark />
        <Dynamic />
        <Status />
        <Color />
        <CN />
      </div>
    )
  }
}

</script>
<style>
.demo-dot .box {
  width: 40px;
  height: 40px;
  background: #7f7f7f55;
  border-radius: 10px;
}

.demo-dot .k-badge {
  margin-right: 20px;
}
</style>