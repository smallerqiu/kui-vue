import Button from "../button/button";
import ButtonGroup from "../button/buttonGroup";
import Dropdown from "./dropdown";
import TriggerButton from "./trigger";
import { defineComponent, ref, inject } from "vue";
import { Ellipsis } from "kui-icons";
import { withInstall } from '../utils/vue';
const DropdownButton = defineComponent({
  name: "DropdownButton",
  props: {
    size: String,
    shape: String,
    disabled: Boolean,
    icon: [String, Array, Object],
    theme: String,
    dark: Boolean,
    arrow: Boolean,
    placement: { type: String, default: "bottom-right" },
  },
  setup(ps, { slots }) {
    const refTrigger = ref();

    return () => {
      return (
        <Dropdown
          dark={ps.dark}
          arrow={ps.arrow}
          placement={ps.placement}
          target={refTrigger}
          disabled={ps.disabled}
          v-slots={{
            default: () => (
              <ButtonGroup
                class="k-dropdown-button"
                size={ps.size}
                theme={ps.theme}
                dark={ps.dark}
                shape={ps.shape}>
                <Button disabled={ps.disabled}>{slots.default?.()}</Button>
                <TriggerButton
                  disabled={ps.disabled}
                  ref={refTrigger}
                  icon={!slots.icon ? Ellipsis : null}
                  class="k-dropdown-trigger">
                  {slots.icon?.()}
                </TriggerButton>
              </ButtonGroup>
            ),
            overlay: () => slots.overlay?.(),
          }}></Dropdown>
      );
    };
  },
});
export default withInstall(DropdownButton);