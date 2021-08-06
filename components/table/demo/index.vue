<script>
import Base from './base'
import BaseRender from './base-render'
import CustomHeader from './custom-header'
import Info from './info'
import Ellipsis from './ellipsis'
import Filter from './filter'
import Bordered from './bordered'
import Span from './span'
import Edit from './edit'
import FixedHead from './fixed-head'
import FixedCol from './fixed-col'
import Fixed from './fixed'
import FixedSpan from './fixedspan'
import Selection from './selection'
import Expand from './expand'
import Embed from './embed'
import Size from './size'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="switch-demo">
        <Info class="typo" />
        <Base />
        <BaseRender />
        <CustomHeader />
        <Bordered />
        <Ellipsis />
        <Filter />
        <Span />
        <Edit />
        <FixedHead />
        <FixedCol />
        <Fixed />
        <FixedSpan />
        <Selection />
        <Expand />
        <Embed />
        <Size />
        <CN class="typo" />
      </div>
    )
  }
}

</script> 
 