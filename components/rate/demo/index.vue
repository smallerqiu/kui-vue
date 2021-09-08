<script>
import Info from "./info";
import Base from "./base";
import Half from "./half";
import Tips from "./tips";
import Disabled from "./disabled";
import Clear from "./clear";
import Character from "./character";
import Custom from "./custom";

import CN from "../index.md";
export default {
  render() {
    return (
      <div class="switch-demo">
        <Info class="typo" />
        <Base />
        <Half />
        <Tips />
        <Disabled />
        <Clear />
        <Character />
        <Custom />
        <CN class="typo" />
      </div>
    );
  },
};
</script>
