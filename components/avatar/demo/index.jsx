import Info from './info.md'
import Base from './basic.md'
import Types from './types.md'
import Change from './change.md'
import CN from '../index.md'
export default {
  setup() {
    return ()=>(
      <div class="demo-avatar">
        <Info />
        <Base />
        <Types />
        <Change />
        <CN />
      </div>
    )
  }
}