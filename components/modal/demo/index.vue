<script>
import Info from './info.md' 
import Base from './base.md' 
import Custom from './custom.md' 
import More from './more.md' 
import Global from './global.md' 
import Confrim from './confrim.md' 
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-modal">
        <Info />
        <Base />
        <Custom />
        <More />
        <Global />
        <Confrim />
        <CN />
      </div>
    )
  }
}

</script>