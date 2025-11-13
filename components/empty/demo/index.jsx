import Info from './info.md'
import Base from './basic.md'
import Custom from './custom.md'
import Use from './use.md'
import NoDesc from './nodesc.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Custom />
        <Use />
        <NoDesc />
        <CN />
      </div>
    )
  }
}