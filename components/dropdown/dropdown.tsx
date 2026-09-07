import {
  type ExtractPropTypes,
  type ComponentPublicInstance,
  type PropType,
  type Ref,
  Teleport,
  Transition,
  cloneVNode,
  defineComponent,
  nextTick,
  onBeforeUnmount,
  onMounted,
  provide,
  ref,
  watch,
} from "vue";

import type { BooleanType, DropPlacementsType, TriggerType } from "../const/types";
import { usePopupContainer } from "../config/popup";
import { usePopupHost } from "../config/popup-host";
import resize from "../directives/resize";
import { setPlacement } from "../utils/placement";
import { getChildren } from "../utils/vnode";
import { DropdownContextKey } from "./dropdown-context";

const dropdownProps = {
  trigger: {
    type: String as PropType<TriggerType>,
    default: "hover",
  },
  disabled: Boolean as BooleanType,
  arrow: { type: Boolean as BooleanType, default: false },
  show: Boolean as BooleanType,
  placement: {
    type: String as PropType<DropPlacementsType>,
    default: "bottom-left",
  },
  target: Object as PropType<Ref<HTMLElement | ComponentPublicInstance | null>>,
  onOpenChange: {
    type: Function as PropType<(opened: boolean) => void>,
  },
};

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;

const Dropdown = defineComponent({
  name: "Dropdown",
  directives: {
    resize,
  },
  props: dropdownProps,
  setup(props, { slots, emit, attrs }) {
    usePopupHost(() => visible.value && hidePopper());
    const getPopupContainer = usePopupContainer();
    const visible = ref(props.show);
    const refSelection = ref<HTMLElement | null>(null);
    const currentPlacement = ref(props.placement);
    const transOrigin = ref("bottom");
    const refPopper = ref<HTMLElement | null>(null);
    const left = ref(0);
    const top = ref(0);
    const rendered = ref(false);
    const positioned = ref(false);
    const showTimer = ref<ReturnType<typeof setTimeout>>();
    onMounted(() => {
      if (props.show) {
        toggle(true);
      }
    });
    onBeforeUnmount(() => {
      document.removeEventListener("click", outsideClick);
      document.removeEventListener("keydown", keydownEvent, true);
      document.removeEventListener("scroll", updatePosition, true);
      clearTimeout(showTimer.value);
    });
    const clearPopTimer = () => clearTimeout(showTimer.value);
    const getTriggerElement = () => {
      const target = props.target?.value || refSelection.value;
      return ((target as (HTMLElement & { $el?: HTMLElement }) | null)?.$el ||
        target) as HTMLElement | null;
    };
    const focusMenuItem = (last = false) => {
      nextTick(() => {
        nextTick(() => {
          requestAnimationFrame(() => {
            const items = Array.from(
              refPopper.value?.querySelectorAll<HTMLElement>(
                '[role="menuitem"]:not([aria-disabled="true"])',
              ) || [],
            );
            items[last ? items.length - 1 : 0]?.focus({ preventScroll: true });
          });
        });
      });
    };

    watch(
      () => props.placement,
      (v) => {
        currentPlacement.value = v;
        updatePosition();
      },
    );
    watch(
      () => props.show,
      (v) => {
        toggle(v);
      },
    );

    const outsideClick = (e: PointerEvent) => {
      const ctx =
        (refSelection.value as HTMLElement & { $el?: HTMLElement })?.$el || refSelection.value;
      if (!refPopper.value) return;
      const target = e.target as HTMLElement;
      if (
        (!refPopper.value.contains(target) && (!ctx || !ctx.contains(target))) ||
        (props.trigger == "contextmenu" && !refPopper.value.contains(target))
      ) {
        toggle(false);
      }
    };
    const updatePosition = (e?: MouseEvent) => {
      const position = e ? { x: e.clientX, y: e.clientY } : null;
      nextTick(() => {
        if (props.target?.value) {
          const target = props.target.value as HTMLElement & { $el?: HTMLElement };
          refSelection.value = target.$el || target;
        }
        if (!refPopper.value || !refSelection.value) return;
        setPlacement({
          refSelection,
          position,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
        });
        positioned.value = true;
      });
    };

    const openChange = (opened: boolean) => {
      visible.value = opened;
      emit("openChange", opened);
    };
    const toggle = (open?: boolean, e?: MouseEvent) => {
      if (open) {
        positioned.value = false;
        document.addEventListener("keydown", keydownEvent, true);
        if (!rendered.value) {
          rendered.value = true;
          document.addEventListener("click", outsideClick);
          document.addEventListener("scroll", updatePosition, true);
          nextTick(() => {
            openChange(true);
            emit("update:show", true);
            nextTick(() => {
              updatePosition(e);
            });
          });
        } else {
          emit("update:show", true);
          openChange(true);
          nextTick(() => {
            updatePosition(e);
          });
        }
      } else {
        openChange(false);
        emit("update:show", false);
        document.removeEventListener("keydown", keydownEvent, true);
      }
    };
    const hidePopper = () => {
      toggle(false);
      nextTick(() => getTriggerElement()?.focus({ preventScroll: true }));
    };
    const keydownEvent = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !visible.value) return;
      event.preventDefault();
      event.stopPropagation();
      hidePopper();
    };

    const clickEvent = () => {
      if (props.disabled) {
        return;
      }
      if (props.trigger == "click") {
        toggle(!visible.value);
      }
    };
    const mouseLeaveEvent = () => {
      if (props.disabled) {
        return;
      }
      if (props.trigger == "hover") {
        showTimer.value = setTimeout(() => {
          toggle(false);
        }, 300);
      }
    };
    const mouseEnterEvent = () => {
      if (props.disabled) {
        return;
      }
      if (props.trigger == "hover") {
        clearTimeout(showTimer.value);
        toggle(true);
      }
    };
    const contextmenuEvent = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }
      if (props.trigger == "contextmenu") {
        e.preventDefault();
        toggle(true, e);
      }
    };

    provide(DropdownContextKey, {
      dropdown: true,
      menuSelected: hidePopper,
      triggerIn: mouseEnterEvent,
      triggerOut: mouseLeaveEvent,
      clearPopTimer,
    });

    return () => {
      const _props = {
        ref: refPopper,
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
          visibility: positioned.value ? undefined : ("hidden" as const),
        },
        "k-placement": currentPlacement.value,
        class: ["k-dropdown", { "k-dropdown-has-arrow": props.arrow }],

        onMouseenter: () => {
          clearTimeout(showTimer.value);
        },
        onMouseleave: () => {
          if (props.trigger == "hover") {
            showTimer.value = setTimeout(() => {
              toggle(false);
            }, 300);
          }
        },
      };
      const overlay =
        rendered.value && slots.overlay ? (
          <Teleport to={getPopupContainer()}>
            <Transition name="k-dropdown">
              <div v-resize={updatePosition} v-show={visible.value} {..._props}>
                <div class={`k-dropdown-content`}>
                  <div class={`k-dropdown-body`}>{slots.overlay?.()}</div>
                  {props.arrow ? (
                    <div class={`k-dropdown-arrow`}>
                      <svg style={{ fill: "currentcolor" }} viewBox="0 0 24 8">
                        <path
                          d="M24,0.97087 L24,1.97087 C20,1.97087 18.5,2.97087 16.5,4.97087 C14.5,6.97087 14,7.97087 12,7.97087 C10,7.97087 9.5,6.97087 7.5,4.97087 C5.5,2.97087 4,1.97087 0,1.97087 L0,0.97087 L24,0.97087 Z"
                          id="ot"
                        />
                        <path
                          d="M24,0 L24,1 C20.032328,1 18.1576594,1.985435 16.1576594,3.985435 C14.1576594,5.985435 13.3847825,7 12,7 C10.6152175,7 9.81306952,5.985435 7.81306952,3.985435 C5.81306952,1.985435 4.0114261,1 0,1 L0,0 L24,0 Z"
                          id="in"
                          stroke="currentcolor"
                        />
                      </svg>
                    </div>
                  ) : null}
                </div>
              </div>
            </Transition>
          </Teleport>
        ) : null;

      const nodes = getChildren(slots.default?.());
      const pp = props.target
        ? {}
        : {
            onClick: clickEvent,
            onMouseenter: mouseEnterEvent,
            onMouseleave: mouseLeaveEvent,
            onContextmenu: contextmenuEvent,
            onKeydown: (event: KeyboardEvent) => {
              if (event.key === "Escape" && visible.value) {
                event.preventDefault();
                toggle(false);
              } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                event.preventDefault();
                toggle(true);
                focusMenuItem(event.key === "ArrowUp");
              } else if (
                props.trigger === "click" &&
                (event.key === "Enter" || event.key === " ")
              ) {
                event.preventDefault();
                toggle(!visible.value);
              }
            },
            "aria-haspopup": "menu",
            "aria-expanded": visible.value,
          };
      const ctxNode = cloneVNode(
        nodes.length == 1 ? nodes[0] : <span>{nodes}</span>,
        {
          ref: refSelection,
          ...attrs,
          ...pp,
        },
        true,
      );
      return overlay ? [ctxNode, overlay] : [ctxNode];
    };
  },
});
export default Dropdown;
