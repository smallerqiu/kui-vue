<script>
import Info from "./info";
import Base from "./base";
import Vertical from "./vertical";
import Align from "./align";
import Size from "./size";
import Warp from "./wrap";
import CustomSize from "./custom-size";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="switch-demo">
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
