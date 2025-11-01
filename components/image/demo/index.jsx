import Info from './info.md'
import Base from './base.md'
import Origin from './origin.md'
import Errors from './errors.md'
import Group from './group.md'
import Extra from './extra.md'
import ExtraGlobal from './extra_global.md'
import Global from './global.md'
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
        <Global />
        <ExtraGlobal />
        <CN />
      </div>
    )
  }
}