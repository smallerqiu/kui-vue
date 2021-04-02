<script>
import Info from './info' 
import Base from './base' 
import Origin from './origin' 
import Errors from './errors' 
import Group from './group' 
import Globle from './globle' 
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Origin />
        <Errors />
        <Group />
        <Globle />
        <CN class="typo" />
      </div>
    )
  }
}

</script> 