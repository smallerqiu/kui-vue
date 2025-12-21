import Info from './info.md'
import Basic from './basic.md'
import Vertical from './vertical.md'
import AutoPlay from './autoplay.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-carousel">
        <Info />
        <Basic />
        <Vertical />
        <AutoPlay />
        <CN />
      </div>
    )
  }
}