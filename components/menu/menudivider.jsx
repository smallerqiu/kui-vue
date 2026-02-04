import { defineComponent, inject, computed } from "vue";
import { withInstall } from "../utils/vue";

const MenuDivider = defineComponent({
  name: "MenuDivider",
  setup() {
    const dropdown = inject("dropdown", null);
    return () => {
      const preCls = dropdown ? "dropdown-menu" : "menu";

      return <li class={`k-${preCls}-item-divider`} />;
    };
  },
});
export default withInstall(MenuDivider);
