<script>
import Info from './info'
import Base from './base'
import Mode from './mode.md'
import Size from './size.md'
import Colors from './colors.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Mode />
        <Size />
        <Colors />
        <CN class="typo"/>
      </div>
    )
  }
}
</script> 