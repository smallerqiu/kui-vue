<script>
import Base from './base'
import Info from './info'
import Disabled from './disabled'
import Group from './group'
import Button from './button'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="switch-demo">
        <Info class="typo" />
        <Base />
        <Disabled />
        <Group />
        <Button />
        <api><CN /></api>
      </div>
    )
  }
}

</script> 
