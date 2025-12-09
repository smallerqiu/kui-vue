import Basic from './basic.md'
import Info from './info.md'
import WithText from './withText.md'
import Disabled from './disabled.md'
import Size from './size.md'
import Loading from './loading.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-switch">
        <Info />
        <Basic />
        <WithText />
        <Disabled />
        <Size />
        <Loading />
        <CN />
      </div>
    )
  }
}