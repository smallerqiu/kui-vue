<script>
import Info from './info.md'
import Base from './base.md'
import Types from './types.md'
import Icon from './icon.md'
import Close from './close.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-notice">
        <Info />
        <Base />
        <Types />
        <Icon />
        <Close />
        <CN />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-notice {
  .k-btn{
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 70px;
  }
}
</style>