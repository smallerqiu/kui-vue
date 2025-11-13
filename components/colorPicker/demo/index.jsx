import Info from './info.md'
import Base from './basic.md'
import CustomTriggle from './customTriggle.md'
import Mode from './mode.md'
import Size from './size.md'
import Placement from './placement.md'
import Disabled from './disabled.md'
import DisabledAlpha from './disabledAlpha.md'
import Presets from './presets.md'
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
        <CustomTriggle />
        <Placement />
        <Mode />
        <Presets />
        <CN />
      </div>
    )
  }
}