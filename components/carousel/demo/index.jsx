import Info from './info.md'
import Base from './base.md'
import Vertical from './vertical.md'
import AutoPlay from './autoplay.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-carousel">
        <Info />
        <Base />
        <Vertical />
        <AutoPlay />
        <CN />
      </div>
    )
  }
}