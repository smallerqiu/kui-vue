import Info from './info.md'
import Basic from './basic.md'
import Multiple from './multiple.md'
import Checkable from './checkable.md'
import Async from './sync.md'

import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-tree">
        <Info />
        <Basic />
        <Multiple />
        <Checkable />
        <Async />
        <CN />
      </div>
    )
  }
}