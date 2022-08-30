<script>
import Base from './base.md'
import Info from './info.md'
import Disabled from './disabled.md'
import Group from './group.md'
import Options from './options.md'
import GroupVertical from './group-vertical.md'
import Button from './button.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-radio">
        <Info class="typo" />
        <Base />
        <Disabled />
        <Options />
        <Group />
        <GroupVertical />
        <Button />
        <CN class="typo"/>
      </div>
    )
  }
}
</script> 