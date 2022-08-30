<script>
import Info from "./info.md";
import Base from "./base.md";
import Vertical from "./vertical.md";
import Align from "./align.md";
import Size from "./size.md";
import Warp from "./wrap.md";
import CustomSize from "./custom-size.md";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-space">
        <Info class="typo" />
        <Base />
        <Vertical />
        <Size />
        <Align />
        <CustomSize />
        <Warp />
        <CN class="typo" />
      </div>
    );
  },
};
</script>
