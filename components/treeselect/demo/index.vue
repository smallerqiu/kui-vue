<script>
import Info from './info.md'
import Base from './base.md'
import Multiple from './multiple.md'
import Checkable from './checkable.md'
import Aync from './sync.md'

import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-tree">
        <Info />
        <Base />
        <Multiple />
        <Checkable />
        <Aync />
        <CN />
      </div>
    )
  }
}
</script>
<style lang="less">
.demo-tree {
  .k-content {
    overflow: auto hidden;
  }
}
</style>