import { Ellipsis } from "kui-icons";
import { defineComponent, ref, type ExtractPropTypes, type PropType } from "vue";
import Button from "../button/button";
import ButtonGroup from "../button/button-group";
import Dropdown from "./dropdown";
import TriggerButton from "./trigger";

export const dropdownButtonProps = {
  size: String,
  shape: String,
  disabled: Boolean,
  icon: [String, Array, Object] as PropType<string | any[] | object>,
  theme: String,
  dark: Boolean,
  arrow: Boolean,
  placement: { type: String as PropType<"bottom-left" | "bottom-right" | "top-left" | "top-right" | "top" | "bottom">, default: "bottom-right" },
};

export type DropdownButtonProps = ExtractPropTypes<typeof dropdownButtonProps>;

const DropdownButton = defineComponent({
  name: "DropdownButton",
  props: dropdownButtonProps,
  emits: ["click"],
  setup(props, { slots, emit }) {
    const refTrigger = ref<HTMLElement | null>(null);

    return () => {
      return (
        <Dropdown
          dark={props.dark}
          arrow={props.arrow}
          placement={props.placement}
          target={refTrigger}
          disabled={props.disabled}
          v-slots={{
            default: () => (
              <ButtonGroup
                class="k-dropdown-button"
                size={props.size}
                theme={props.theme}
                dark={props.dark}
                shape={props.shape}
              >
                <Button
                  disabled={props.disabled}
                  onClick={(e: MouseEvent) => {
                    emit("click", e);
                  }}
                >
                  {slots.default?.()}
                </Button>
                <TriggerButton
                  disabled={props.disabled}
                  ref={refTrigger}
                  icon={!slots.icon ? Ellipsis : null}
                  class="k-dropdown-trigger"
                >
                  {slots.icon?.()}
                </TriggerButton>
              </ButtonGroup>
            ),
            overlay: () => slots.overlay?.(),
          }}
        />
      );
    };
  },
});

export default DropdownButton;
