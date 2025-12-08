import Info from './info.md'
import Basic from './basic.md'
import ValueType from './valueType.md'
import Range from './range.md'
import Theme from './theme.md'
import Presets from './presets.md'
import Disabled from './disabled.md'
import DisabledDate from './disabled-date.md'
import Size from './size.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info />
        <Basic />
        <ValueType />
        <Range />
        <DisabledDate />
        <Disabled />
        <Presets />
        <Theme />
        <Size />
        <CN />
      </div>
    )
  }
}