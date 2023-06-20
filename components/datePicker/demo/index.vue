<script>
import Info from './info.md'
import Base from './base.md'
import Theme from './theme.md'
import Inside from './inside.md'
import Disabled from './disabled.md'
import NoBorder from './noborder.md'
import DisabledDate from './disabled-date.md'
import Size from './size.md'
import Mode from './mode.md'
import Format from './format.md'
import CN from '../index.md'
export default {
  render() {
    return (
      <div class="demo-datepicker">
        <Info />
        <Base />
        <Theme />
        <Inside />
        <Disabled />
        <NoBorder />
        <Format />
        <Size />
        <Mode />
        <DisabledDate />
        <CN />
      </div>
    )
  }
}
</script> 
<style lang="less">
.demo-datepicker {
  .k-datepicker,.k-radio-group{
    margin: 0 10px 10px 0;
  }
}
</style>