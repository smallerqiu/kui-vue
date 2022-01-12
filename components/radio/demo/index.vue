<script>
import Base from './base'
import Info from './info'
import Disabled from './disabled'
import Group from './group'
import Options from './options'
import GroupVertical from './group-vertical'
import Button from './button'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="switch-demo">
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
