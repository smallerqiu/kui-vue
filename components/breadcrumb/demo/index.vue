<script>
import Info from './info'
import Base from './base'
import Icon from './icon'
import Separator from './separator'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Icon />
        <Separator />
        <api><CN/></api>
      </div>
    )
  }
}
</script> 