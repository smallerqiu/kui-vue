<script>
import Info from './info'
import Base from './base'
import Icon from './icon'
import Types from './types'
import Close from './close'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Icon />
        <Types />
        <Close />
        <CN class="typo"/>
      </div>
    )
  }
}
</script>