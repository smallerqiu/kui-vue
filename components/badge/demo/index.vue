<script>
import Base from './base'
import Info from './info'
import Dot from './dot'
import Max from './max'
import Dynamic from './dynamic'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Dot />
        <Max />
        <Dynamic />
        <CN class="typo"/>
      </div>
    )
  }
}

</script> 