import Basic from './basic.md'
import Info from './info.md'
import Disabled from './disabled.md'
import Group from './group.md'
import Options from './options.md'
import GroupVertical from './group-vertical.md'
import CheckButton from './checkButton.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-radio">
        <Info />
        <Basic />
        <Disabled />
        <Options />
        <Group />
        <GroupVertical />
        <CheckButton />
        <CN />
      </div>
    )
  }
}