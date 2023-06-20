<script>
import Base from './base.md'
import BaseRender from './base-render.md'
import CustomHeader from './custom-header.md'
import Info from './info.md'
import Ellipsis from './ellipsis.md'
import Filter from './filter.md'
import Bordered from './bordered.md'
import Span from './span.md'
import Edit from './edit.md'
import FixedHead from './fixed-head.md'
import FixedCol from './fixed-col.md'
import Fixed from './fixed.md'
import FixedSpan from './fixedspan.md'
import Selection from './selection.md'
import Expand from './expand.md'
import Embed from './embed.md'
import Size from './size.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-table">       
        <Info />
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
        <CN />
      </div>
    )
  }
}
</script>