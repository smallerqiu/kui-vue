import Info from './info.md'
import Basic from './basic.md'
import Custom from './custom.md'
import Form from './form.md'
import Target from './target.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-drawer">
        <Info />
        <Basic />
        <Custom />
        <Form />
        <Target />
        <CN />
      </div>
    )
  }
}