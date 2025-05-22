import { defineComponent, inject, computed } from "vue";

export default defineComponent({
  name: "MenuDivider",
  setup() {
    return () => {
      const preCls = "menu";

      return <li class={`k-${preCls.value}-item-divider`} />;
    };
  },
});
