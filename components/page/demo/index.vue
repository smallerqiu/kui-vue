<script>
import Info from './info.md'
import Base from './base.md'
import More from './more.md'
import Sizer from './sizer.md'
import Elevator from './elevator.md'
import Size from './size.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <More />
        <Sizer />
        <Elevator />
        <Size />
        <CN class="typo"/>
      </div>
    )
  }
}
</script> 