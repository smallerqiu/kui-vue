<script>
import Info from "./info";
import Base from "./base";
import Format from "./format";
import Ffix from "./ffix";
import Size from "./size";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="switch-demo">
        <Info class="typo" />
        <Base />
        <Format />
        <Ffix />
        <Size />
        <CN class="typo" />
      </div>
    );
  },
};
</script>
