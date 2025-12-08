import Info from './info.md'
import Basic from './basic.md'
import Disabled from './disabled.md'
import Size from './size.md'
import Outline from './outline.md'
import Light from './light.md'
import WithIcon from './with-icon.md'
import Loading from './loading.md'
import Block from './block.md'
import Color from './color.md'
import Group from './group.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info />
        <Basic />
        <Outline />
        <Color />
        <Light />
        <WithIcon />
        <Size />
        <Disabled />
        <Loading />
        <Block />
        <Group />
        <CN />
      </div>
    )
  }
}