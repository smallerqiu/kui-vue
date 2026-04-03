import { defineComponent, inject, type PropType } from "vue";
import Button from "../button/button";
import { type IconType } from "../icon";
export default defineComponent({
  name: "TriggerButton",
  props: {
    icon: Array as PropType<IconType[]>,
    disabled: Boolean,
  },
  setup(ps, { attrs, slots }) {
    const mouseEnterEvent = inject<() => void>("dropdown-trigger-in");
    const mouseLeaveEvent = inject<() => void>("dropdown-trigger-out");
    // console.log(mouseEnterEvent);
    return () => {
      return (
        <Button
          icon={ps.icon}
          {...attrs}
          onMouseenter={() => mouseEnterEvent?.()}
          onMouseleave={() => mouseLeaveEvent?.()}
        >
          {slots.default?.()}
        </Button>
      );
    };
  },
});
