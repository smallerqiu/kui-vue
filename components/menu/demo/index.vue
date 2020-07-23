<script>
import Info from "./info.md";
import Base from "./base.md";
import InLine from "./inline.md";
import Accrodion from "./accrodion.md";
import Vertical from "./vertical.md";
import Theme from "./theme.md";
import Collapsed from "./collapsed.md";
import Mode from "./mode.md";
import CN from '../index.md'

export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <InLine />
        <Accrodion />
        <Vertical />
        <Theme />
        <Mode />
        <Collapsed />
        <CN class="typo" />
      </div>
    );
  }
};
</script>