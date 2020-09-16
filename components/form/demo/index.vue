<script>
import Info from "./info.md";
import Base from "./base.md";
import Align from "./align.md";
import Valid from "./valid.md";
import CustomValid from "./customvalid.md";
import DynamicValid from "./dynamicvalid.md";
import CN from '../index.md'


export default {
  render() {
    return (
      <div>
        <Info class="typo" />
        <Base />
        <Align />
        <Valid />
        <CustomValid />
        <DynamicValid />
        <CN class="typo" />
      </div>
    );
  }
};
</script>