import Button from "../button/button";
import { defineComponent, inject, type PropType } from "vue";

export const triggerButtonProps = {
  icon: [String, Array, Object] as PropType<string | any[] | object>,
};

export default defineComponent({
  name: "TriggerButton",
  props: triggerButtonProps,
  setup(props, { attrs, slots }) {
    const mouseEnterEvent = inject<(() => void) | null>("dropdown-trigger-in", null);
    const mouseLeaveEvent = inject<(() => void) | null>("dropdown-trigger-out", null);

    return () => {
      return (
        <Button
          icon={props.icon}
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
