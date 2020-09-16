<script>
import Info from './info'
import Base from './base'
import More from './more'
import Size from './size'
import Elevator from './elevator'
import Mini from './mini'
import CN from '../index.md'
export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <More />
        <Size />
        <Elevator />
        <Mini />
        <CN class="typo"/>
      </div>
    )
  }
}
</script> 