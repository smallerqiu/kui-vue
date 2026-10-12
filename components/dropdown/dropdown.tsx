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
import Popup, { type PopupRef } from "../popup";
import type { BooleanType, DropPlacementsType, TriggerType } from "../const/types";
import { DropdownContextKey } from "./dropdown-context";

const dropdownProps = {
  trigger: { type: String as PropType<TriggerType>, default: "hover" },
  disabled: Boolean as BooleanType,
  arrow: { type: Boolean as BooleanType, default: false },
  show: Boolean as BooleanType,
  placement: { type: String as PropType<DropPlacementsType>, default: "bottom-left" },
  /** 关闭后是否销毁面板内容。默认销毁（重开时重新挂载）；设为 false 可保留面板内的表单状态，代价是每个打开过的实例留一份隐藏 DOM。 */
  destroyOnClose: { type: Boolean as BooleanType, default: true },
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
    const openOnArrowKey = (event: KeyboardEvent) => {
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      event.preventDefault();
      pendingFocus = event.key === "ArrowUp";
      popup.value?.open();
      focusMenuItem();
    };
    provide(DropdownContextKey, {
      dropdown: true,
      menuSelected: () => {
        popup.value?.close();
        popup.value?.getTriggerElement()?.focus({ preventScroll: true });
      },
      // Popup 的 target 只当定位锚点、不绑定事件（见 Popup API），所以把 target 交给
      // DropdownButton 时，右边那个触发按钮的开合要由 Dropdown 自己驱动。
      expanded: () => visible.value,
      triggerIn: () => {
        if (props.trigger === "hover") popup.value?.open();
        else popup.value?.cancelClose();
      },
      triggerOut: () => {
        if (props.trigger === "hover") popup.value?.scheduleClose();
      },
      triggerClick: () => {
        if (props.trigger !== "click") return;
        if (visible.value) popup.value?.close();
        else popup.value?.open();
      },
      triggerContextmenu: () => {
        if (props.trigger === "contextmenu") popup.value?.open();
      },
      triggerKeydown: openOnArrowKey,
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
        destroyOnClose={props.destroyOnClose}
        triggerAttrs={{ ...attrs, "aria-haspopup": "menu" }}
        onOpenChange={(open, detail) => {
          visible.value = open;
          if (open && detail.reason === "contextmenu") pendingFocus = false;
          if (!open) pendingFocus = null;
          emit("update:show", open);
          emit("openChange", open);
        }}
        onTriggerKeydown={(event) => openOnArrowKey(event)}
        onAfterOpen={focusMenuItem}
        v-slots={{
          default: slots.default,
          overlay: () => <div class="k-dropdown-body">{slots.overlay?.()}</div>,
        }}
      />
    );
  },
});
