<script>
import Info from './info' 
import Base from './base' 
import Custom from './custom' 
import More from './more' 
import Global from './global' 
import Confrim from './confrim' 
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Custom />
        <More />
        <Global />
        <Confrim />
        <CN class="typo" />
      </div>
    )
  }
}

</script> 