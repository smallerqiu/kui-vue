import { defineComponent, inject, type PropType } from "vue";
import Button from "../button/button";
import type { BooleanType, ThemeType } from "../const/types";
import { type IconType } from "../icon";
import { DropdownContextKey, type DropdownContext } from "./dropdown-context";
export default defineComponent({
  name: "TriggerButton",
  props: {
    icon: Array as PropType<IconType[]>,
    disabled: Boolean as BooleanType,
    theme: String as PropType<ThemeType>,
  },
  setup(ps, { attrs, slots }) {
    const dropdownContext = inject<DropdownContext | null>(DropdownContextKey, null);
    // Dropdown 交出 target 后 Popup 不再绑定触发事件，这里把 hover/点击/右键/方向键接回开合逻辑。
    return () => {
      return (
        <Button
          icon={ps.icon}
          disabled={ps.disabled}
          theme={ps.theme}
          {...attrs}
          aria-haspopup="menu"
          aria-expanded={!!dropdownContext?.expanded?.()}
          onMouseenter={() => dropdownContext?.triggerIn?.()}
          onMouseleave={() => dropdownContext?.triggerOut?.()}
          onClick={() => dropdownContext?.triggerClick?.()}
          onContextmenu={() => dropdownContext?.triggerContextmenu?.()}
          onKeydown={(event: KeyboardEvent) => dropdownContext?.triggerKeydown?.(event)}
        >
          {slots.default?.()}
        </Button>
      );
    };
  },
});
