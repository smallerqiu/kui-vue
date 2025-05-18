<script lang="jsx">
import Info from './info.md'
import Base from './base.md'
import Theme from './theme.md'
import Icons from './icon.md'
import Size from './size.md'
import Clearable from './clearable.md'
import NoBordered from './nobordered.md'
import Multiple from './multiple.md'
import Filterable from './filterable.md'
import Search from './search.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div class="demo-select">
        <Info />
        <Base />
        <Theme />
        <Icons />
       <Size />
         <Clearable />
        <NoBordered />
         <Multiple />
        <Filterable />
       <Search />
        <CN />
      </div>
    )
  }
}
</script>