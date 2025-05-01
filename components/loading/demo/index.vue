<script lang="jsx">
import Info from "./info.md";
import Base from "./base.md";

import CN from "../index.md";
export default {
  setup() {
    return () => (
      <div class="demo-loading">
        <Info />
        <Base />
        <CN />
      </div>
    );
  },
};
</script>
<style lang="less">
.demo-loading {
  .k-btn {
    margin: 0 8px 8px 0;
  }
}
</style>