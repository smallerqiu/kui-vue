<script lang="jsx">
import Info from './info.md'
import Base from './base.md'
// import Custom from './custom.md'
import Rightmenu from './rightmenu.md'
import DropdownButton from './dropdownbutton.md'
import Divider from './divider.md'
import Placement from './placement.md'
import Arrow from './arrow.md'
import Cascading from './cascading.md'
import CN from '../index.md'
export default {
  setup() {
    return () => {
      return <div class="demo-dropdown">
        <Info />
        <Base />
        <Rightmenu />
        <DropdownButton />
        <Divider />
        <Placement />
        <Arrow />
        <Cascading />
        <CN /> 
      </div>
    }
  }
}
</script>