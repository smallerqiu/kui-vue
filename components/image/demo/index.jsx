import Info from './info.md'
import Base from './basic.md'
import Origin from './origin.md'
import Errors from './errors.md'
import Group from './group.md'
import Extra from './extra.md'
import ExtraGloble from './extra_globle.md'
import Globle from './globle.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-image">
        <Info />
        <Base />
        <Origin />
        <Errors />
        <Group />
        <Extra />
        <Globle />
        <ExtraGloble />
        <CN />
      </div>
    )
  }
}