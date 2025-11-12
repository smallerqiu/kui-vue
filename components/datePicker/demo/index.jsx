import Info from './info.md'
import Basic from './basic.md'
import Theme from './theme.md'
// import Inside from './inside.md'
import Presets from './presets.md'
import Disabled from './disabled.md'
import NoBorder from './noborder.md'
import DisabledDate from './disabled-date.md'
import Size from './size.md'
import Mode from './mode.md'
import Format from './format.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info />
        <Basic />
        <Mode />
        <Theme />
        {/* <Inside /> */}
        <Presets />
        <Disabled />
        <NoBorder />
        <Format />
        <Size />
        <DisabledDate />
        <CN />
      </div>
    )
  }
}