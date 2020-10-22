<script>
import Info from './info'
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
      <div class="demo-select">
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