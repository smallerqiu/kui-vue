<script lang="jsx">
import Info from './info.md'
import Base from './base.md'
import Accordion from './accordion.md'
import Nesting from './nesting.md'
import Sample from './sample.md'
import Extra from './extra.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div>
        <Info />
        <Base />
        <Accordion />
        <Nesting />
        <Extra />
        <Sample />
        <CN />
      </div>
    )
  }
}
</script>