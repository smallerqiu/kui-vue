import {
  defineComponent,
  ref,
  watch,
  provide,
  type ComponentPublicInstance,
  type ExtractPropTypes,
  type PropType,
  type Ref,
} from "vue";
import Popup, { type PopupRef } from "../base/popup";
import type { BooleanType, DropPlacementsType, TriggerType } from "../const/types";
import { DropdownContextKey } from "./dropdown-context";

const dropdownProps = {
  trigger: { type: String as PropType<TriggerType>, default: "hover" },
  disabled: Boolean as BooleanType,
  arrow: { type: Boolean as BooleanType, default: false },
  show: Boolean as BooleanType,
  placement: { type: String as PropType<DropPlacementsType>, default: "bottom-left" },
  target: Object as PropType<Ref<HTMLElement | ComponentPublicInstance | null>>,
};
export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;
export default defineComponent({
  name: "Dropdown",
  inheritAttrs: false,
  props: dropdownProps,
  emits: {
    "update:show": (show: boolean) => typeof show === "boolean",
    openChange: (open: boolean) => typeof open === "boolean",
  },
  setup(props, { slots, emit, attrs }) {
    const visible = ref(!!props.show);
    const popup = ref<PopupRef>();
    let pendingFocus: boolean | null = null;
    watch(
      () => props.show,
      (value) => {
        visible.value = !!value;
      },
    );
    const focusMenuItem = () => {
      if (pendingFocus === null) return;
      const items = popup.value
        ?.getPopupElement()
        ?.querySelectorAll<HTMLElement>('[role="menuitem"]:not([aria-disabled="true"])');
      if (!items?.length) return;
      items[pendingFocus ? items.length - 1 : 0]?.focus({ preventScroll: true });
      pendingFocus = null;
    };
    provide(DropdownContextKey, {
      dropdown: true,
      menuSelected: () => {
        popup.value?.close();
        popup.value?.getTriggerElement()?.focus({ preventScroll: true });
      },
      triggerIn: () => popup.value?.cancelClose(),
      triggerOut: () => {
        if (props.trigger === "hover") popup.value?.scheduleClose();
      },
      clearPopTimer: () => popup.value?.cancelClose(),
    });
    return () => (
      <Popup
        ref={popup}
        open={visible.value}
        trigger={props.trigger}
        disabled={props.disabled}
        placement={props.placement}
        arrow={props.arrow}
        target={props.target}
        prefixCls="k-dropdown"
        triggerAttrs={{ ...attrs, "aria-haspopup": "menu" }}
        onOpenChange={(open, detail) => {
          visible.value = open;
          if (open && detail.reason === "contextmenu") pendingFocus = false;
          if (!open) pendingFocus = null;
          emit("update:show", open);
          emit("openChange", open);
        }}
        onTriggerKeydown={(event, control) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            pendingFocus = event.key === "ArrowUp";
            control.open();
            focusMenuItem();
          }
        }}
        onAfterOpen={focusMenuItem}
        v-slots={{
          default: slots.default,
          overlay: () => <div class="k-dropdown-body">{slots.overlay?.()}</div>,
        }}
      />
    );
  },
});
