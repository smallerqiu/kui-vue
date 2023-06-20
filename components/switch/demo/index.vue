<script>
import Base from './base.md'
import Info from './info.md'
import Text from './text.md'
import Disabled from './disabled.md'
import Size from './size.md'
import Loading from './loading.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-switch">
        <Info />
        <Base />
        <Text />
        <Disabled />
        <Size />
        <Loading />
        <CN />
      </div>
    )
  }
}

</script> 
<style lang="less">
.demo-switch .k-switch {
  margin: 0 10px 10px 0;
}
</style>