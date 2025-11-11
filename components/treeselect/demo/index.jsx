import Info from './info.md'
import Base from './base.md'
import Multiple from './multiple.md'
import Checkable from './checkable.md'
import Async from './sync.md'

import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-tree">
        <Info />
        <Base />
        <Multiple />
        <Checkable />
        <Async />
        <CN />
      </div>
    )
  }
}