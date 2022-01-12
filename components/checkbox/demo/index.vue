<script>
import Base from './base'
import Info from './info'
import Disabled from './disabled'
import Options from './options'
import Group from './group'
import GroupVertical from './group-vertical'
import CheckAll from './check-all'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Disabled />
        <Options />
        <Group />
        <GroupVertical />
        <CheckAll />
        <CN class="typo"/>
      </div>
    )
  }
}
</script> 