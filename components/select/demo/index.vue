<script>
import Info from './info'
import Base from './base'
import Theme from './theme'
import Icons from './icon'
import Size from './size'
import Clearable from './clearable'
import NoBordered from './nobordered'
import Multiple from './multiple'
import Filterable from './filterable'
import Search from './search'
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