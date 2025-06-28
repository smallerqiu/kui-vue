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
import { withInstall } from '../utils/vue';
import { setPlacement } from "../utils/placement";
import transfer from "../directives/transfer";
import { getChildren } from "../utils/vnode";
const Dropdown = defineComponent({
  name: "Dropdown",
  directives: {
    transfer,
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
    arrow: Boolean,
    show: Boolean,
    placement: {
      validator(value) {
        return (
          [
            "top",
            "top-left",
            "top-right",
            "bottom",
            "bottom-left",
            "bottom-right",
          ].indexOf(value) >= 0
        );
      },
      default: "bottom-left",
    },
    target: Object,
  },

  setup(ps, { slots, emit }) {
    const visible = ref(ps.show);
    const refCtx = ref(null);
    const currentPlacement = ref(ps.placement);
    const transOrigin = ref("bottom");
    const refPopper = ref(null);
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
      const ctx = refCtx.value?.$el || refCtx.value;
      if (
        refPopper.value &&
        !refPopper.value.contains(e.target) &&
        ctx &&
        !ctx.contains(e.target)
      ) {
        visible.value = false;
      }
    };
    const updatePosition = () => {
      nextTick(() => {
        setPlacement(
          refCtx,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
          3
        );
      });
    };
    const showContextmenu = (e) => {
      let pickerHeight = refPopper.value.offsetHeight;
      let pickerWidth = refPopper.value.offsetWidth;
      let clientHeight = document.documentElement.clientHeight;
      let clientWidth = document.documentElement.clientWidth;

      let offsetTop =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY;
      let offsetLeft =
        document.body.scrollLeft ||
        document.documentElement.scrollLeft ||
        window.scrollX;
      let x = e.clientX + offsetLeft;
      let y = e.clientY + offsetTop;
      let showInRight = clientWidth - e.clientX > pickerWidth;
      let showInBottom = clientHeight - e.clientY > pickerHeight;
      let transformOrigin = "top center";

      if (!showInRight) {
        x -= pickerWidth;
      }
      if (!showInBottom) {
        y -= pickerHeight;
        transformOrigin = "bottom center";
      }
      left.value = x;
      top.value = y;
      transOrigin.value = transformOrigin;
    };
    const toggle = (open, e) => {
      if (open) {
        if (!rendered.value) {
          rendered.value = true;
          document.addEventListener("click", outsideClick);
          nextTick(() => {
            visible.value = true;
            emit("update:visible", true);
            e ? showContextmenu(e) : updatePosition();
          });
        } else {
          visible.value = true;
          emit("update:visible", true);
          e ? showContextmenu(e) : updatePosition();
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

    provide("dropdown-tirgger-in", mouseEnterEvent);
    provide("dropdown-tirgger-out", mouseLeaveEvent);
    return () => {
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
          ref: refCtx,
          ...pp,
        }
      );
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
            <div v-transfer={true} v-show={visible.value} {...props}>
              <div class={`k-dropdown-content`}>
                <div class={`k-dropdown-body`}>{slots.overlay?.()}</div>
                {ps.arrow ? (
                  <div class={`k-dropdown-arrow`}>
                    <svg style={{ fill: "currentcolor" }} viewBox="0 0 24 8">
                      <path
                        id="ot"
                        d="m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
                      />
                      <path
                        stroke="currentcolor"
                        id="in"
                        d="m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
                      />
                    </svg>
                  </div>
                ) : null}
              </div>
            </div>
          </Transition>
        ) : null;
      return (
        <>
          {ctxNode} {overlay}
        </>
      );
    };
  },
});
export default withInstall(Dropdown);