<script>
import Info from './info'
import Base from './base.md'
import Checkable from './checkable.md'
import CustomRender from './custom-render.md'
import Disabled from './disabled.md'
import Sync from './sync.md'
import Icon from './icon.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Checkable />
        <CustomRender />
        <Disabled />
        <Sync />
        <Icon />
        <CN class="typo" />
      </div>
    )
  }
}
</script>
<style  lang="less">
.demo-tree .k-tree-item {
  display: flex;
}
.demo-tree .k-tree-item .k-tree-title {
  flex: 1;
}
.demo-tree .k-tree-item .tree-item-actions {
  display: flex;
}
.demo-tree .k-tree-item .tree-item-actions .tree-title-text {
  flex: 1;
}
</style>