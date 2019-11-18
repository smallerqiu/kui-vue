<script>
import Base from './base'
import Info from './info'
import CheckAll from './check-all'
import Disabled from './disabled'
import Group from './group'
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
        <api><CN /></api>
      </div>
    )
  }
}
</script> 