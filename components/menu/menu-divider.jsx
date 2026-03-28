import { defineComponent, inject } from "vue";


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
export default MenuDivider;
