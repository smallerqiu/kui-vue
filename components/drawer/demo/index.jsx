import Info from './info.md'
import Base from './basic.md'
import Custom from './custom.md'
import Form from './form.md'
import Target from './target.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div class="demo-drawer">
        <Info />
        <Base />
        <Custom />
        <Form />
        <Target />
        <CN />
      </div>
    )
  }
}