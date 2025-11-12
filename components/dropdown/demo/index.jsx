import Info from './info.md'
import Basic from './basic.md'
import RightMenu from './rightmenu.md'
import Divider from './divider.md'
import Placement from './placement.md'
import Cascading from './cascading.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info />
        <Basic />
        <RightMenu />
        <DropdownButton />
        <Divider />
        <Placement />
        <Arrow />
        <Cascading />
        <CN /> 
      </div>
    )
  }
}