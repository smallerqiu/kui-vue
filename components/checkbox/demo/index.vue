<script>
import Base from './base'
import Info from './info'
import Disabled from './disabled'
import Group from './group'
import CheckAll from './check-all'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Disabled />
        <Group />
        <CheckAll />
        <CN class="typo"/>
      </div>
    )
  }
}
</script> 