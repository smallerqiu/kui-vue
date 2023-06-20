<script>
import Info from './info.md'
import Base from './base.md'
import Icon from './icon.md'
import Types from './types.md'
import Close from './close.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-message">
        <Info />
        <Base />
        <Icon />
        <Types />
        <Close />
        <CN />
      </div>
    )
  }
}
</script>
<style lang="less">
.demo-message {
  .k-btn{
    margin-right: 10px;
    margin-bottom: 10px;
    min-width: 70px;
  }
}
</style>