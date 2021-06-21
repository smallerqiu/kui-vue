<script>
import Base from './base'
import Info from './info'
import Text from './text'
import Disabled from './disabled'
import Size from './size'
import Loading from './loading'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="switch-demo">
        <Info class="typo" />
        <Base />
        <Text />
        <Disabled />
        <Size />
        <Loading />
        <CN class="typo"/>
      </div>
    )
  }
}

</script> 
<style lang="less">
.switch-demo .k-switch {
  margin: 0 10px 10px 0;
}
</style>