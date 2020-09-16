<script>
import Base from './base'
import Info from './info'
import Dot from './dot'
import Max from './max'
import Dynamic from './dynamic'
import Mark from './mark'
import Status from './status'
import Color from './color'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Dot />
        <Max />
        <Mark />
        <Dynamic />
        <Status />
        <Color />
        <CN class="typo"/>
      </div>
    )
  }
}

</script> 