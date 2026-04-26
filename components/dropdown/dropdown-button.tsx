import { Ellipsis } from "kui-icons";
import { defineComponent, type ExtractPropTypes, type PropType, ref } from "vue";
import Button from "../button/button";
import ButtonGroup from "../button/button-group";

import {
  type BooleanType,
  type DropPlacementsType,
  type ShapeType,
  type SizeType,
} from "../const/types";
import { type IconType } from "../icon";
import Dropdown from "./dropdown";
import TriggerButton from "./trigger";

export const dropdownButtonProps = {
  size: String as PropType<SizeType>,
  shape: String as PropType<ShapeType>,
  disabled: Boolean as BooleanType,
  icon: Array as PropType<IconType[]>,
  theme: String,
  arrow: Boolean as BooleanType,
  placement: { type: String as PropType<DropPlacementsType>, default: "bottom-right" },
  onClick: Function as PropType<(e: MouseEvent) => void>,
};
export type DropdownButtonProps = ExtractPropTypes<typeof dropdownButtonProps>;

const DropdownButton = defineComponent({
  name: "DropdownButton",
  props: dropdownButtonProps,
  setup(props, { slots, emit }) {
    const refTrigger = ref();
    return () => {
      return (
        <Dropdown
          arrow={props.arrow}
          placement={props.placement}
          target={refTrigger}
          disabled={props.disabled}
          v-slots={{
            default: () => (
              <ButtonGroup class="k-dropdown-button" size={props.size} shape={props.shape}>
                <Button
                  disabled={props.disabled}
                  onClick={(e) => {
                    emit("click", e);
                  }}
                >
                  {slots.default?.()}
                </Button>
                <TriggerButton
                  disabled={props.disabled}
                  ref={refTrigger}
                  icon={!slots.icon ? Ellipsis : undefined}
                  class="k-dropdown-trigger"
                >
                  {slots.icon?.()}
                </TriggerButton>
              </ButtonGroup>
            ),
            overlay: () => slots.overlay?.(),
          }}
        ></Dropdown>
      );
    };
  },
});
export default DropdownButton;
