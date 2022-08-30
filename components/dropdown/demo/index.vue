<script>
import Info from './info.md'
import Base from './base.md'
// import Custom from './custom.md'
import Rightmenu from './rightmenu.md'
import Divider from './divider.md'
import Placement from './placement.md'
import Cascading from './cascading.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-dropdown">
        <Info class="typo" />
        <Base />
        <Rightmenu />
        <Divider />
        <Placement />
        <Cascading />
        <CN class="typo" />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-dropdown {
  .k-btn,
  .k-select {
    margin-right: 8px;
    margin-bottom: 8px;
  }
}
</style>