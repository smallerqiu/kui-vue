<script>
import Info from './info.md'
import Base from './base.md'
import Callback from './callback.md'
import Container from './container.md'
import Bottom from './bottom.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Callback />
        <Container />
        <CN class="typo" />
        <div style="height:500px;text-align:center;color:#ddd;line-height:500px;">我是打酱油的,请忽略我...</div>
        <Bottom />
      </div>
    )
  }
}
</script> 