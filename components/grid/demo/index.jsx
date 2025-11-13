import Info from './info.md'
import Base from './basic.md'
import Gutter from './gutter.md'
import Offset from './offset.md'
import Align from './align.md'
import Flex from './flex.md'
import Fill from './fill.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Gutter />
        <Offset />
        <Align />
        <Flex />
        <Fill />
        <CN />
      </div>
    )
  }
}