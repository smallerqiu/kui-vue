import { DropdownContextKey, type DropdownContext } from "../dropdown/dropdown-context";
import { defineComponent, inject } from "vue";

const MenuDivider = defineComponent({
  name: "MenuDivider",
  setup() {
    const dropdownContext = inject<DropdownContext | null>(DropdownContextKey, null);
    return () => {
      const preCls = dropdownContext ? "dropdown-menu" : "menu";
      return <li class={`k-${preCls}-item-divider`} role="separator" />;
    };
  },
});
export default MenuDivider;
