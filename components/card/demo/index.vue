<script lang="jsx">
import Base from './base.md'
import Info from './info.md'
import Border from './border.md'
import CN from '../index.md'
export default {
  setup() {
    return ()=>(
      <div>
        <Info />
        <Base />
        <Border />
        <CN />
      </div>
    )
  }
}
</script> 