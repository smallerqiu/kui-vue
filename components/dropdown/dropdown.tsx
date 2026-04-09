import {
  type ExtractPropTypes,
  type PropType,
  Transition,
  cloneVNode,
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  provide,
  ref,
  watch,
} from "vue";

import type { BooleanType, DropPlacementsType } from "../const/types";
import resize from "../directives/resize";
import { transfer } from "../directives/transfer";
import { setPlacement } from "../utils/placement";
import { getChildren } from "../utils/vnode";

export const dropdownProps = {
  dark: Boolean as BooleanType,
  trigger: {
    type: String as PropType<"hover" | "click" | "contextmenu">,
    default: "hover",
  },
  transfer: { type: Boolean as BooleanType, default: true },
  disabled: Boolean as BooleanType,
  arrow: { type: Boolean as BooleanType, default: false },
  show: Boolean as BooleanType,
  placement: {
    type: String as PropType<DropPlacementsType>,
    default: "bottom-left",
  },
  target: Object,
};

export type DropdownProps = ExtractPropTypes<typeof dropdownProps>;

const Dropdown = defineComponent({
  name: "Dropdown",
  directives: {
    transfer,
    resize,
  },
  props: dropdownProps,
  emits: ["update:visible"],
  setup(props, { slots, emit, attrs }) {
    const visible = ref(props.show);
    const refSelection = ref<HTMLElement | null>(null);
    const currentPlacement = ref(props.placement);
    const transOrigin = ref("bottom");
    const refPopper = ref<HTMLElement | null>(null);
    const left = ref(0);
    const top = ref(0);
    const rendered = ref(false);
    const showTimer = ref<NodeJS.Timeout>();
    provide("dropdown", true);
    onMounted(() => {
      if (props.show) {
        toggle(true);
      }
    });
    onBeforeMount(() => {
      document.removeEventListener("click", outsideClick);
    });
    const clearPopTimer = () => clearTimeout(showTimer.value);
    provide("clearPopTimer", clearPopTimer);

    watch(
      () => props.placement,
      (v) => {
        currentPlacement.value = v;
        updatePosition();
      }
    );
    watch(
      () => props.show,
      (v) => {
        toggle(v);
      }
    );

    const outsideClick = (e: PointerEvent) => {
      const ctx = refSelection.value;
      if (!refPopper.value) return;
      const target = e.target as HTMLElement;
      if (
        (!refPopper.value.contains(target) && ctx && !ctx.contains(target)) ||
        (props.trigger == "contextmenu" && !refPopper.value.contains(target))
      ) {
        visible.value = false;
      }
    };
    const updatePosition = (e?: MouseEvent) => {
      if (!e) return;
      const position = e ? { x: e.clientX, y: e.clientY } : null;
      nextTick(() => {
        setPlacement({
          refSelection,
          position,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
        });
      });
    };
    const toggle = (open?: boolean, e?: MouseEvent) => {
      if (open) {
        if (!rendered.value) {
          rendered.value = true;
          document.addEventListener("click", outsideClick);
          nextTick(() => {
            visible.value = true;
            emit("update:visible", true);
            updatePosition(e);
          });
        } else {
          visible.value = true;
          emit("update:visible", true);
          updatePosition(e);
        }
      } else {
        visible.value = false;
        emit("update:visible", false);
      }
    };
    const hidePopper = () => {
      visible.value = false;
    };
    provide("dropdown-menu-selected", hidePopper);

    const clickEvent = () => {
      if (props.disabled) {
        return;
      }
      if (props.trigger == "click") {
        toggle(true);
      }
    };
    const mouseLeaveEvent = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }
      if (props.trigger == "hover") {
        showTimer.value = setTimeout(() => {
          toggle(false, e);
        }, 300);
      }
    };
    const mouseEnterEvent = (e: MouseEvent) => {
      if (props.disabled) {
        return;
      }
      if (props.trigger == "hover") {
        clearTimeout(showTimer.value);
        toggle(true, e);
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

    provide("dropdown-trigger-in", mouseEnterEvent);
    provide("dropdown-trigger-out", mouseLeaveEvent);
    return () => {
      const _props = {
        ref: refPopper,
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        },
        "k-placement": currentPlacement.value,
        class: ["k-dropdown", { "k-dropdown-has-arrow": props.arrow }],

        onClick: (e: MouseEvent) => {
          toggle(false, e);
        },
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
          <Transition name="k-dropdown">
            <div v-transfer={true} v-resize={updatePosition} v-show={visible.value} {..._props}>
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
        ) : null;

      let nodes = getChildren(slots.default?.());
      const pp = props.target
        ? {}
        : {
            onClick: clickEvent,
            onMouseenter: mouseEnterEvent,
            onMouseleave: mouseLeaveEvent,
            onContextmenu: contextmenuEvent,
          };
      const ctxNode = cloneVNode(
        nodes.length == 1 ? nodes[0] : <span>{nodes}</span>,
        {
          ref: refSelection,
          ...pp,
          ...attrs,
        },
        true
      );
      return [ctxNode, overlay];
    };
  },
});
export default Dropdown;
