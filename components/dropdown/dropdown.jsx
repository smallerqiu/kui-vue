import {
  defineComponent,
  ref,
  cloneVNode,
  watch,
  Transition,
  nextTick,
} from "vue";
import { setPlacement } from "../utils/placement";
import transfer from "../directives/transfer";
export default defineComponent({
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
    showPlacementArrow: Boolean,
    value: Boolean,
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
  },
  data() {
    return {
      timer: null,
      visible: this.value || false,
    };
  },
  watch: {
    value(v) {
      this.visible = v;
    },
  },
  setup(ps, { slots }) {
    const visible = ref(false);
    const refCtx = ref(null);
    const currentPlacement = ref(ps.placement);
    const transOrigin = ref("bottom");
    const refPopper = ref(null);
    const left = ref(0);
    const top = ref(0);
    const rendered = ref(false);
    const showTimer = ref(false);
    watch(
      () => ps.placement,
      (v) => {
        currentPlacement.value = v;
        updatePosition();
      }
    );
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

    const clickEvent = (e) => {};
    const mouseEnterEvent = (e) => {};
    const contextmenuEvent = (e) => {};

    return () => {
      const ctxNode = cloneVNode(slots.default?.(), {
        ref: ctxRef,
        onClick: clickEvent,
        onMouseenter: mouseEnterEvent,
        onContextmenu: contextmenuEvent,
      });
      const props = {
        ref: refPopper,
        style: {
          left: `${left.value}px`,
          top: `${top.value}px`,
          transformOrigin: transOrigin.value,
        },
        class: [
          "k-select-dropdown",
          {
            "k-select-dropdown-multiple": multiple,
            "k-select-dropdown-sm": size == "small",
          },
        ],
      };
      const overlay =
        rendered.value && slots.overlay ? (
          <Transition name="k-dropdown">
            <div v-transfer={true} v-show={visible.value} {...props}>
              {slots.overlay?.()}
            </div>
          </Transition>
        ) : null;
      return <>{[ctxNode, overlay]}</>;
    };
  },
});
