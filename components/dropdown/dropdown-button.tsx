import { Ellipsis } from "kui-icons";
import { defineComponent, type ExtractPropTypes, type PropType, ref } from "vue";
import Button from "../button/button";
import ButtonGroup from "../button/button-group";

import {
  type BooleanType,
  type DropPlacementsType,
  type ShapeType,
  type SizeType,
  type SurfaceThemeType,
  type TriggerType,
} from "../const/types";
import { type IconType } from "../icon";
import Dropdown from "./dropdown";
import TriggerButton from "./trigger";

const dropdownButtonProps = {
  size: String as PropType<SizeType>,
  shape: String as PropType<ShapeType>,
  disabled: Boolean as BooleanType,
  icon: Array as PropType<IconType[]>,
  theme: String as PropType<SurfaceThemeType>,
  arrow: Boolean as BooleanType,
  trigger: String as PropType<TriggerType>,
  placement: { type: String as PropType<DropPlacementsType>, default: "bottom-right" },
  /** 关闭后是否销毁面板内容。默认销毁（重开时重新挂载）；设为 false 可保留面板内的表单状态，代价是每个打开过的实例留一份隐藏 DOM。 */
  destroyOnClose: { type: Boolean as BooleanType, default: true },
};
export type DropdownButtonProps = ExtractPropTypes<typeof dropdownButtonProps>;

const DropdownButton = defineComponent({
  name: "DropdownButton",
  props: dropdownButtonProps,
  emits: {
    click: (event: MouseEvent) => event instanceof MouseEvent,
  },
  setup(props, { slots, emit }) {
    const refTrigger = ref();
    return () => {
      return (
        <Dropdown
          arrow={props.arrow}
          trigger={props.trigger}
          placement={props.placement}
          destroyOnClose={props.destroyOnClose}
          target={refTrigger}
          disabled={props.disabled}
          v-slots={{
            default: () => (
              <ButtonGroup class="k-dropdown-button" size={props.size} shape={props.shape}>
                <Button
                  disabled={props.disabled}
                  theme={props.theme}
                  onClick={(e) => {
                    emit("click", e);
                  }}
                >
                  {slots.default?.()}
                </Button>
                <TriggerButton
                  disabled={props.disabled}
                  theme={props.theme}
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
