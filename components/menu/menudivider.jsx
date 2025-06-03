import { defineComponent, inject, computed } from "vue";

export default defineComponent({
  name: "MenuDivider",
  setup() {
    const dropdown = inject("dropdown", null);
    return () => {
      const preCls = dropdown ? "dropdown-menu" : "menu";

      return <li class={`k-${preCls}-item-divider`} />;
    };
  },
});
