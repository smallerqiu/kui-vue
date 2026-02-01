import {
  defineComponent,
  ref,
  cloneVNode,
  watch,
  Transition,
  nextTick,
  provide,
  onMounted,
  onBeforeMount,
} from "vue";
import { withInstall } from "../utils/vue";
import { setPlacement } from "../utils/placement";
import transfer from "../directives/transfer";
import resize from "../directives/resize";
import { getChildren } from "../utils/vnode";
const Dropdown = defineComponent({
  name: "Dropdown",
  directives: {
    transfer,
    resize,
  },
  props: {
    dark: Boolean,
    trigger: {
      type: String,
      default: "hover",
      validator(value) {
        return ["hover", "click", "contextmenu"].indexOf(value) >= 0;
      },
    },
    transfer: { type: Boolean, default: true },
    disabled: Boolean,
    arrow: { type: Boolean, default: false },
    show: Boolean,
    placement: {
      validator(value) {
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right"].indexOf(
            value
          ) >= 0
        );
      },
      default: "bottom-left",
    },
    target: Object,
  },
  emits: ["update:visible"],
  setup(ps, { slots, emit, attrs, listeners }) {
    const visible = ref(ps.show);
    const refSelection = ref(null);
    const currentPlacement = ref(ps.placement);
    const transOrigin = ref("bottom");
    const refPopper = ref();
    const left = ref(0);
    const top = ref(0);
    const rendered = ref(false);
    const showTimer = ref(false);
    provide("dropdown", true);
    onMounted(() => {
      if (ps.show) {
        toggle(true);
      }
    });
    onBeforeMount(() => {
      document.removeEventListener("click", outsideClick);
    });
    const clearPopTimer = () => clearTimeout(showTimer.value);
    provide("clearPopTimer", clearPopTimer);

    watch(
      () => ps.placement,
      (v) => {
        currentPlacement.value = v;
        updatePosition();
      }
    );
    watch(
      () => ps.show,
      (v) => {
        toggle(v);
      }
    );

    const outsideClick = (e) => {
      const ctx = refSelection.value?.$el || refSelection.value;
      if (!refPopper.value) return;
      if (
        (!refPopper.value.contains(e.target) && ctx && !ctx.contains(e.target)) ||
        (ps.trigger == "contextmenu" && !refPopper.value.contains(e.target))
      ) {
        visible.value = false;
      }
    };
    const updatePosition = (e) => {
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
    const toggle = (open, e) => {
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

    const clickEvent = (e) => {
      if (ps.disabled) {
        return;
      }
      if (ps.trigger == "click") {
        toggle(true);
      }
    };
    const mouseLeaveEvent = (e) => {
      if (ps.disabled) {
        return;
      }
      if (ps.trigger == "hover") {
        showTimer.value = setTimeout(() => {
          toggle(false);
        }, 300);
      }
    };
    const mouseEnterEvent = (e) => {
      if (ps.disabled) {
        return;
      }
      if (ps.trigger == "hover") {
        clearTimeout(showTimer.value);
        toggle(true);
      }
    };
    const contextmenuEvent = (e) => {
      if (ps.disabled) {
        return;
      }
      if (ps.trigger == "contextmenu") {
        e.preventDefault();
        toggle(true, e);
      }
    };

    provide("dropdown-trigger-in", mouseEnterEvent);
    provide("dropdown-trigger-out", mouseLeaveEvent);
    return () => {
      const props = {
        ref: refPopper,
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        },
        "k-placement": currentPlacement.value,
        class: ["k-dropdown", { "k-dropdown-has-arrow": ps.arrow }],

        onClick: (e) => {
          toggle(false);
        },
        onMouseenter: () => {
          clearTimeout(showTimer.value);
        },
        onMouseleave: () => {
          if (ps.trigger == "hover") {
            showTimer.value = setTimeout(() => {
              toggle(false);
            }, 300);
          }
        },
      };
      const overlay =
        rendered.value && slots.overlay ? (
          <Transition name="k-dropdown">
            <div v-transfer={true} v-resize={updatePosition} v-show={visible.value} {...props}>
              <div class={`k-dropdown-content`}>
                <div class={`k-dropdown-body`}>{slots.overlay?.()}</div>
                {ps.arrow ? (
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
      const pp = ps.target
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
export default withInstall(Dropdown);
