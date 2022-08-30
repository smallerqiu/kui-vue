<script>
import Info from "./info.md";
import Base from "./base.md";
import Format from "./format.md";
import Ffix from "./ffix.md";
import Size from "./size.md";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="demo-inputnumber">
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
