<script>
import Info from './info'
import Base from './base'
import Size from './size'
import Clearable from './clearable'
import Multiple from './multiple'
import Search from './search'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-select">
        <Info class="typo" />
        <Base />
        <Size />
        <Clearable />
        <Multiple />
        <Search />
        <api><CN /></api>
      </div>
    )
  }
}
</script> 
<style>
.demo-select .k-select{
  margin: 0 10px 10px 0;
}
</style>