import Info from './info.md'
import Basic from './basic.md'
import Theme from './theme.md'
import Icons from './icon.md'
import Size from './size.md'
import Clearable from './clearable.md'
import NoBordered from './nobordered.md'
import Multiple from './multiple.md'
import Filterable from './filterable.md'
import Search from './search.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-select">
        <Info />
        <Basic />
        <Theme />
        <Icons />
        <Size />
        <Clearable />
        <NoBordered />
        <Multiple />
        <Filterable />
        <Search />
        <CN />
      </div>
    )
  }
}