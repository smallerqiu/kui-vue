import Button from "../button/button";
import { defineComponent, inject } from "vue";
export default defineComponent({
  name: "TriggerButton",
  props: {
    icon: [String, Array, Object],
  },
  setup(ps, { attrs, slots }) {
    const mouseEnterEvent = inject("dropdown-trigger-in", null);
    const mouseLeaveEvent = inject("dropdown-trigger-out", null);
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
