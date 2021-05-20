<script>
import Info from './info'
import Base from './base.md'
import Circle from './circle.md'
import Dynamic from './dynamic.md'
import Dashboard from './dashboard.md'
import Color from './color.md'
import Size from './size.md'

import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-progress">
        <Info class="typo" />
        <Base />
        <Circle />
        <Dashboard />
        <Dynamic />
        <Color />
        <Size />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-progress .k-progress {
  margin: 0 10px 10px 0;
}
</style>