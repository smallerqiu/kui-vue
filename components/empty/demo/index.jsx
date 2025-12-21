import Info from './info.md'
import Basic from './basic.md'
import Custom from './custom.md'
import Used from './used.md'
import NoDesc from './nodesc.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info />
        <Basic />
        <Custom />
        <Used />
        <NoDesc />
        <CN />
      </div>
    )
  }
}