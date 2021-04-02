<script>
import Info from './info' 
import Base from './base' 
import Custom from './custom' 
import Use from './use' 
import Nodesc from './nodesc' 
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Custom />
        <Use />
        <Nodesc />
        <CN class="typo" />
      </div>
    )
  }
}

</script> 