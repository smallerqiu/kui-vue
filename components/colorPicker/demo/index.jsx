import Info from './info.md'
import Base from './base.md'
import Mode from './mode.md'
import Size from './size.md'
import Disabled from './disabled.md'
import DisabledAlpha from './disabledAlpha.md'
import CustomTrigger from './customTrigger.md'
import Placement from './placement.md'
import Presets from './presets.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info />
        <Base />
        <Size />
        <Disabled />
        <DisabledAlpha />
        <CustomTrigger />
        <Placement />
        <Mode />
        <Presets />
        <CN />
      </div>
    )
  }
}