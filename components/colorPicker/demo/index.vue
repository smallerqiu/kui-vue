<script lang="jsx">
import Info from './info.md'
import Base from './base.md'
import Shape from './shape.md'
import Mode from './mode.md'
import Size from './size.md'
import Disabled from './disabled.md'
import DisabledAlpha from './disabledAlpha.md'
import Colors from './colors.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Size />
        <Disabled />
        <DisabledAlpha />
        <Shape />
        <Mode />
        <Colors />
        <CN />
      </div>
    )
  }
}
</script>