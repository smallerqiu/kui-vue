<script>
import Info from './info.md'
import Base from './base.md'
import TreeNode from './treenode.md'
import Checkable from './checkable.md'
import CustomRender from './custom-render.md'
import Disabled from './disabled.md'
import Sync from './sync.md'
import Icon from './icon.md'
import Directory from './directory.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-tree">
        <Info />
        <Base />
        <TreeNode />
        <Checkable />
        <CustomRender />
        <Disabled />
        <Sync />
        <Icon />
        <Directory />
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