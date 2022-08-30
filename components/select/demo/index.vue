<script>
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
  render() {
    return (
      <div class="demo-select">
        <Info class="typo" />
        <Base />
        <Theme />
        <Icons />
        <Size />
        <Clearable />
        <NoBordered />
        <Multiple />
        <Filterable />
        <Search />
        <CN class="typo"/>
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-select {
  .k-select {
    margin: 0 10px 10px 0;
  }
}
</style>