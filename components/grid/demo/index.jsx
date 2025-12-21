import Info from './info.md'
import Basic from './basic.md'
import Gutter from './gutter.md'
import Offset from './offset.md'
import Align from './align.md'
import Flex from './flex.md'
import Fill from './fill.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-grid">
        <Info />
        <Basic />
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