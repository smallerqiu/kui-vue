<script>
import Info from './info' 
import Base from './base' 
import Color from './color' 
import Dynamic from './dynamic' 
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Color />
        <Dynamic />
        <api><CN/></api>
      </div>
    )
  }
}

</script> 