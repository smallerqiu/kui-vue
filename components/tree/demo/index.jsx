import Info from './info.md'
import Basic from './basic.md'
import Checkable from './checkable.md'
import CustomRender from './custom-render.md'
import Disabled from './disabled.md'
import Sync from './sync.md'
import Icon from './icon.md'
import Directory from './directory.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-tree">
        <Info />
        <Basic />
        <Checkable />
        <CustomRender />
        <Disabled />
        <Sync />
        <Icon />
        <Directory />
        <CN />
      </div>
    )
  }
}