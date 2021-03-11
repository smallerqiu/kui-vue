<script>
import Info from './info'
import Base from './base'
import More from './more'
import Sizer from './sizer'
import Elevator from './elevator'
import Size from './size'
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