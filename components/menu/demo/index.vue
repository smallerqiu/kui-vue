<script>
import Info from "./info.md";
import Base from "./base.md";
import InLine from "./inline.md";
import Accrodion from "./accrodion.md";
import Vertical from "./vertical.md";
import Theme from "./theme.md";
import Collapsed from "./collapsed.md";
import Mode from "./mode.md";
import CN from "../index.md";

export default {
  render() {
    return (
      <div class="demo-menu">
        <Info />
        <Base />
        <InLine />
        <Accrodion />
        <Vertical />
        <Theme />
        <Mode />
        <Collapsed />
        <CN />
      </div>
    );
  },
};
</script>
<style lang="less">
.demo-menu {
  .k-content {
    overflow: auto hidden;
  }
}
</style>