<script>
import Info from "./info.md";
import Base from "./base.md";
import Align from "./align.md";
import Length from "./length.md";
import Withmodal from "./withmodal.md";
import Valid from "./valid.md";
import CustomValid from "./customvalid.md";
import DynamicValid from "./dynamicvalid.md";
import CN from '../index.md'


export default {
  render() {
    return (
      <div class="demo-menu">
        <Info />
        <Base />
        <Align />
        <Valid />
        <Length />
        <Withmodal />
        <CustomValid />
        <DynamicValid />
        <CN />
      </div>
    );
  }
};
</script>
<style lang="less">
.demo-menu {
  .k-content {
    overflow: auto hidden;
  }
}
</style>