<script>
import Base from './base'
import Info from './info'
import Color from './color'
import Text from './text'
import Disabled from './disabled'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="switch-demo">
        <Info class="typo" />
        <Base />
        <Color />
        <Text />
        <Disabled />
        <api><CN /></api>
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