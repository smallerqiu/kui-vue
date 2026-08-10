import { defineComponent, inject, type PropType } from "vue";
import Button from "../button/button";
import type { BooleanType } from "../const/types";
import { type IconType } from "../icon";
import { DropdownContextKey, type DropdownContext } from "./dropdown-context";
export default defineComponent({
  name: "TriggerButton",
  props: {
    icon: Array as PropType<IconType[]>,
    disabled: Boolean as BooleanType,
  },
  setup(ps, { attrs, slots }) {
    const dropdownContext = inject<DropdownContext | null>(DropdownContextKey, null);
    return () => {
      return (
        <Button
          icon={ps.icon}
          disabled={ps.disabled}
          {...attrs}
          onMouseenter={() => dropdownContext?.triggerIn?.()}
          onMouseleave={() => dropdownContext?.triggerOut?.()}
        >
          {slots.default?.()}
        </Button>
      );
    };
  },
});
