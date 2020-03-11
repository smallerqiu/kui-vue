<script>
import Info from './info.md'
import Base from './base.md'
import Custom from './custom.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Custom />
        <CN class="typo" />
        <div style="height:500px;text-align:center;color:#ddd;line-height:500px;">我是打酱油的,请忽略我...</div>
      </div>
    )
  }
}
</script> 