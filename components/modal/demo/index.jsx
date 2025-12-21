import Info from './info.md'
import Basic from './basic.md'
import Custom from './custom.md'
import More from './more.md'
import Global from './global.md'
import Confirm from './confirm.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-modal">
        <Info />
        <Basic />
        <Custom />
        <More />
        <Global />
        <Confirm />
        <CN />
      </div>
    )
  }
}