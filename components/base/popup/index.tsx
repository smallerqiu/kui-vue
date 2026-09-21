import {
  cloneVNode,
  computed,
  defineComponent,
  h,
  isRef,
  nextTick,
  onBeforeUnmount,
  ref,
  Teleport,
  Transition,
  watch,
  withDirectives,
  vShow,
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type SlotsType,
  type VNodeChild,
} from "vue";
import type { PlacementsType } from "../../const/types";
import { usePopupContainer } from "../../config/popup";
import { usePopupHost } from "../../config/popup-host";
import { setPlacement } from "../../utils/placement";
import { createFrameScheduler, isEventOutside } from "../../utils/popup";
import { getChildren } from "../../utils/vnode";
import {
  registerPopupLayer,
  isTopPopupLayer,
  popupLayerElements,
  closePopupChildren,
} from "./layers";
import type { PopupOpenChangeDetail, PopupRef, PopupTrigger } from "./types";
export type { PopupOpenChangeDetail, PopupOpenReason, PopupRef, PopupTrigger } from "./types";

export const popupProps = {
  open: { type: Boolean, default: undefined },
  defaultOpen: Boolean,
  disabled: Boolean,
  placement: { type: String as PropType<PlacementsType>, default: "bottom-left" },
  trigger: { type: String as PropType<PopupTrigger>, default: "click" },
  arrow: Boolean,
  offset: { type: Number, default: 3 },
  openDelay: { type: Number, default: 0 },
  closeDelay: { type: Number, default: 300 },
  closeOnOutsideClick: { type: Boolean, default: true },
  closeOnEscape: { type: Boolean, default: true },
  matchTriggerWidth: Boolean,
  getPopupContainer: Function as PropType<() => HTMLElement | null | undefined>,
  destroyOnClose: Boolean,
  target: Object as PropType<HTMLElement | Ref<HTMLElement | { $el: HTMLElement } | null>>,
  overlay: [String, Number, Object, Array] as PropType<VNodeChild>,
  raw: Boolean,
  outsideEvent: { type: String as PropType<"click" | "mousedown">, default: "click" },
  transitionDuration: Number,
  getAnchorPosition: Function as PropType<() => { x: number; y: number } | null>,
  prefixCls: { type: String, default: "k-popup" },
  transitionName: String,
  panelOnly: Boolean,
  triggerAttrs: Object as PropType<Record<string, unknown>>,
  respectDefaultPrevented: { type: Boolean, default: true },
  contentStyle: Object as PropType<CSSProperties>,
  hideWhenDetached: Boolean,
  onTriggerKeydown: Function as PropType<(event: KeyboardEvent, popup: PopupRef) => void>,
};
export type PopupProps = Partial<ExtractPropTypes<typeof popupProps>> & {
  "onUpdate:open"?: (open: boolean) => void;
  onOpenChange?: (open: boolean, detail: PopupOpenChangeDetail) => void;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
};
export const PopupArrow = ({ prefixCls }: { prefixCls: string }) => (
  <div class={`${prefixCls}-arrow`} aria-hidden="true">
    <svg style={{ fill: "currentcolor" }} viewBox="0 0 24 8">
      <path
        id="ot"
        d="m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
      />
      <path
        id="in"
        stroke="currentcolor"
        d="m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
      />
    </svg>
  </div>
);

export default defineComponent({
  name: "Popup",
  inheritAttrs: false,
  props: popupProps,
  slots: Object as SlotsType<{
    default?: (popup: PopupRef) => VNodeChild;
    overlay?: (popup: PopupRef) => VNodeChild;
    arrow?: () => VNodeChild;
  }>,
  emits: {
    "update:open": (open: boolean) => typeof open === "boolean",
    openChange: (open: boolean, detail: PopupOpenChangeDetail) =>
      typeof open === "boolean" && !!detail.reason,
    afterOpen: () => true,
    afterClose: () => true,
  },
  setup(props, { slots, attrs, emit, expose }) {
    const container = usePopupContainer();
    const innerOpen = ref(props.defaultOpen);
    const visible = computed(() => props.open ?? innerOpen.value);
    const rendered = ref(visible.value);
    const refSelection = ref<HTMLElement | null>(null);
    const refPopper = ref<HTMLElement | null>(null);
    const left = ref(0),
      top = ref(0),
      transOrigin = ref("bottom"),
      currentPlacement = ref<string>(props.placement);
    const ready = ref(false),
      width = ref(0);
    const anchorVisible = ref(true);
    const scheduler = createFrameScheduler();
    let timer: ReturnType<typeof setTimeout> | undefined;
    let contextPoint: { x: number; y: number } | null = null;
    const clearTimer = () => {
      clearTimeout(timer);
      timer = undefined;
    };
    const getTriggerElement = () => {
      const target = isRef(props.target) ? props.target.value : props.target || refSelection.value;
      return target && "$el" in target ? target.$el : target;
    };
    const request = (open: boolean, detail: PopupOpenChangeDetail) => {
      clearTimer();
      if (open === visible.value || (open && props.disabled)) return;
      if (props.open === undefined) innerOpen.value = open;
      emit("update:open", open);
      emit("openChange", open, detail);
    };
    const updatePosition = () => {
      const source = getTriggerElement();
      if (!source || !refPopper.value || props.panelOnly) return;
      const rect = source.getBoundingClientRect();
      width.value = rect.width || source.offsetWidth;
      if (props.matchTriggerWidth) refPopper.value.style.minWidth = `${width.value}px`;
      currentPlacement.value = props.placement;
      setPlacement({
        refSelection: { value: source } as Ref<HTMLElement>,
        refPopper,
        left,
        top,
        transOrigin,
        currentPlacement,
        offset: props.offset,
        position:
          props.getAnchorPosition?.() ??
          (contextPoint ? { x: rect.left + contextPoint.x, y: rect.top + contextPoint.y } : null),
      });
      ready.value = true;
    };
    const scheduleClose = () => {
      clearTimer();
      timer = setTimeout(
        () => request(false, { reason: props.trigger === "focus" ? "focus" : "hover" }),
        Math.max(0, props.closeDelay),
      );
    };
    const api: PopupRef = {
      open: () => request(true, { reason: "programmatic" }),
      close: () => request(false, { reason: "programmatic" }),
      updatePosition,
      cancelClose: clearTimer,
      scheduleClose,
      getTriggerElement,
      getPopupElement: () => refPopper.value,
    };
    expose(api);
    usePopupHost(() => request(false, { reason: "host" }));
    watch(
      visible,
      (open) => {
        clearTimer();
        if (!open && refPopper.value) closePopupChildren(refPopper.value);
        if (open) {
          rendered.value = true;
          ready.value = false;
          nextTick(updatePosition);
        }
      },
      { immediate: true, flush: "sync" },
    );
    watch(() => props.disabled, clearTimer);
    watch(
      () => [props.placement, props.offset, props.matchTriggerWidth, props.overlay],
      () => {
        if (visible.value) nextTick(updatePosition);
      },
    );
    watch(
      [visible, refPopper, () => props.panelOnly, () => props.outsideEvent],
      ([open, popup, panelOnly], _old, onCleanup) => {
        if (!open || !popup || panelOnly) return;
        const update = () => scheduler.schedule(updatePosition);
        updatePosition();
        const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(update);
        const source = getTriggerElement();
        const intersection =
          props.hideWhenDetached && typeof IntersectionObserver !== "undefined"
            ? new IntersectionObserver(([entry]) => {
                anchorVisible.value = entry.isIntersecting;
                if (entry.isIntersecting) update();
              })
            : null;
        if (source) intersection?.observe(source);
        if (source) observer?.observe(source);
        observer?.observe(popup);
        const layer = {
          trigger: getTriggerElement,
          popup,
          close: () => request(false, { reason: "host" }),
        };
        const unregister = registerPopupLayer(layer);
        const outside = (event: MouseEvent) => {
          if (
            props.closeOnOutsideClick &&
            isEventOutside(
              event,
              [
                popup,
                ...popupLayerElements(layer),
                props.trigger === "contextmenu" ? null : getTriggerElement(),
              ],
              false,
            )
          )
            request(false, { reason: "outside", event });
        };
        const keydown = (event: KeyboardEvent) => {
          if (
            !props.closeOnEscape ||
            event.key !== "Escape" ||
            event.defaultPrevented ||
            !isTopPopupLayer(layer)
          )
            return;
          event.preventDefault();
          event.stopPropagation();
          request(false, { reason: "escape", event });
          getTriggerElement()?.focus({ preventScroll: true });
        };
        const outsideEvent = props.outsideEvent;
        // Check the layer tree before a target handler can close/unregister a
        // child popup. The same selection click must remain inside its parent.
        document.addEventListener(outsideEvent, outside, true);
        document.addEventListener("keydown", keydown);
        document.addEventListener("scroll", update, true);
        window.addEventListener("resize", update);
        onCleanup(() => {
          unregister();
          scheduler.cancel();
          observer?.disconnect();
          intersection?.disconnect();
          document.removeEventListener(outsideEvent, outside, true);
          document.removeEventListener("keydown", keydown);
          document.removeEventListener("scroll", update, true);
          window.removeEventListener("resize", update);
        });
      },
      { flush: "sync" },
    );
    onBeforeUnmount(() => {
      clearTimer();
      scheduler.cancel();
    });
    const enter = (event: MouseEvent) => {
      if (props.trigger !== "hover" || props.disabled || event.defaultPrevented) return;
      clearTimer();
      if (props.openDelay > 0)
        timer = setTimeout(() => request(true, { reason: "hover", event }), props.openDelay);
      else request(true, { reason: "hover", event });
    };
    return () => {
      const prefix = props.prefixCls;
      const style = attrs.style as CSSProperties | undefined;
      const content = slots.overlay?.(api) ?? props.overlay;
      const shell = (
        <div
          {...attrs}
          ref={refPopper}
          class={[
            prefix,
            { [`${prefix}-has-arrow`]: props.arrow, [`${prefix}-panel`]: props.panelOnly },
            attrs.class,
          ]}
          k-placement={props.panelOnly ? props.placement : currentPlacement.value}
          style={[
            style,
            props.panelOnly
              ? {}
              : {
                  position: "absolute",
                  left: `${left.value}px`,
                  top: `${top.value}px`,
                  transformOrigin: transOrigin.value,
                  minWidth: props.matchTriggerWidth ? `${width.value}px` : style?.minWidth,
                  visibility:
                    ready.value && (!props.hideWhenDetached || anchorVisible.value)
                      ? style?.visibility
                      : "hidden",
                },
          ]}
          onMouseenter={clearTimer}
          onMouseleave={() => {
            if (props.trigger === "hover") scheduleClose();
          }}
          onFocusin={clearTimer}
          onFocusout={(event: FocusEvent) => {
            if (
              props.trigger === "focus" &&
              !refPopper.value?.contains(event.relatedTarget as Node) &&
              !getTriggerElement()?.contains(event.relatedTarget as Node)
            )
              scheduleClose();
          }}
        >
          <div class={`${prefix}-content`} style={props.contentStyle}>
            {content}
            {props.arrow && (slots.arrow?.() ?? <PopupArrow prefixCls={prefix} />)}
          </div>
        </div>
      );
      const overlayNodes = getChildren(Array.isArray(content) ? content : [content]);
      const panel =
        props.raw && overlayNodes.length === 1
          ? cloneVNode(
              overlayNodes[0],
              {
                ...attrs,
                ref: refPopper,
                style: shell.props?.style,
                "k-placement": props.panelOnly ? props.placement : currentPlacement.value,
              },
              true,
            )
          : shell;
      if (props.panelOnly) return panel;
      const slotContent = slots.default?.(api);
      const children = getChildren(Array.isArray(slotContent) ? slotContent : [slotContent]);
      const candidate =
        children.length === 1 && typeof children[0].type !== "symbol"
          ? children[0]
          : h("span", children);
      const triggerNode = props.target
        ? candidate
        : cloneVNode(
            candidate,
            {
              ...props.triggerAttrs,
              ref: refSelection,
              "aria-expanded": visible.value,
              onTouchstart: (event: TouchEvent) => {
                if (props.trigger === "hover") request(true, { reason: "hover", event });
              },
              onTouchend: () => {
                if (props.trigger === "hover") scheduleClose();
              },
              onTouchmove: updatePosition,
              onClick: (event: MouseEvent) => {
                if (
                  props.trigger === "click" &&
                  (!props.respectDefaultPrevented || !event.defaultPrevented)
                )
                  request(!visible.value, { reason: "trigger", event });
              },
              onMouseenter: enter,
              onMouseleave: (event: MouseEvent) => {
                if (props.trigger === "hover" && !event.defaultPrevented) scheduleClose();
              },
              onFocus: (event: FocusEvent) => {
                if (props.trigger === "focus" && !event.defaultPrevented)
                  request(true, { reason: "focus", event });
              },
              onBlur: (event: FocusEvent) => {
                if (
                  props.trigger === "focus" &&
                  !refPopper.value?.contains(event.relatedTarget as Node)
                )
                  scheduleClose();
              },
              onContextmenu: (event: MouseEvent) => {
                if (props.trigger !== "contextmenu" || props.disabled || event.defaultPrevented)
                  return;
                event.preventDefault();
                const rect = getTriggerElement()?.getBoundingClientRect();
                if (rect)
                  contextPoint = { x: event.clientX - rect.left, y: event.clientY - rect.top };
                request(true, { reason: "contextmenu", event });
                nextTick(updatePosition);
              },
              onKeydown: (event: KeyboardEvent) => {
                if (event.defaultPrevented || props.disabled) return;
                props.onTriggerKeydown?.(event, api);
                if (
                  !event.defaultPrevented &&
                  props.trigger === "click" &&
                  ["Enter", " "].includes(event.key)
                ) {
                  event.preventDefault();
                  request(!visible.value, { reason: "trigger", event });
                }
              },
            },
            true,
          );
      return [
        props.target && !children.length ? null : triggerNode,
        rendered.value && (
          <Teleport to={props.getPopupContainer?.() || container()}>
            <Transition
              name={props.transitionName || prefix}
              appear
              duration={props.transitionDuration}
              onAfterEnter={() => emit("afterOpen")}
              onAfterLeave={() => {
                if (props.destroyOnClose && !visible.value) rendered.value = false;
                emit("afterClose");
              }}
            >
              {props.destroyOnClose
                ? visible.value
                  ? panel
                  : null
                : withDirectives(panel, [[vShow, visible.value]])}
            </Transition>
          </Teleport>
        ),
      ];
    };
  },
});
