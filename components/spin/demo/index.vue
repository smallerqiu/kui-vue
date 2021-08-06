<script>
import Info from "./info";
import Base from "./base";
import Container from "./container";
import Mode from "./mode";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="switch-demo">
        <Info class="typo" />
        <Base />
        <Container />
        <Mode />
        <CN class="typo" />
      </div>
    );
  },
};
</script>
