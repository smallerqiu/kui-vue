<script>
import Base from './base'
import Info from './info'
import Border from './border'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Border />
        <api><CN /></api>
      </div>
    )
  }
}
</script> 