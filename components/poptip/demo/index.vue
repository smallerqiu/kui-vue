<script lang="jsx">
import Info from './info.md'
import Base from './base.md'
import Trigger from './trigger.md'
import Closeinside from './closeinside.md'
import Placement from './placement.md'
import CN from '../index.md'
export default {
  setup() {
    return () => (
      <div class="demo-poptip">
        <Info />
        <Base />
        <Trigger />
        <Closeinside />
        <Placement />
        <CN />
      </div>
    )
  }
}
</script>