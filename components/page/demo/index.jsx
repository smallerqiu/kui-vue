import Info from './info.md'
import Base from './basic.md'
import More from './more.md'
import Sizer from './sizer.md'
import Elevator from './elevator.md'
import Size from './size.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <More />
        <Sizer />
        <Elevator />
        <Size />
        <CN />
      </div>
    )
  }
}