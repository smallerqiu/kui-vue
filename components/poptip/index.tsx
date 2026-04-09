import {
  cloneVNode,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  Transition,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { transfer } from "../directives/transfer";
import { setPlacement } from "../utils/placement";
import { getChildren } from "../utils/vnode";

import type { PlacementsType } from "../const/types";

export type PoptipProps = ExtractPropTypes<typeof poptipProps>;

export const poptipProps = {
  dark: Boolean,
  show: Boolean,
  title: [String, Number, Object, Array],
  size: String,
  content: String,
  width: [Number, String],
  trigger: {
    type: String as PropType<"click" | "hover" | "focus">,
    default: "hover",
  },
  placement: {
    type: String as PropType<PlacementsType>,
    default: "top",
  },
  onClose: {
    type: Function as PropType<() => void>,
  },
};
const Poptip = defineComponent({
  name: "Poptip",
  directives: {
    transfer,
  },
  props: poptipProps,
  setup(props, { slots, attrs, emit }) {
    const rendered = ref(props.show);
    const visible = ref(props.show);
    const refPopper = ref();
    const refSelection = ref();
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(props.placement);
    const transOrigin = ref("bottom");
    const hideTimer = ref();
    const showTimer = ref();
    const updatePosition = () => {
      nextTick(() => {
        setPlacement({
          refSelection,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
        });
      });
    };
    onMounted(() => {
      updatePosition();
      window.addEventListener("resize", updatePosition);
    });
    onUnmounted(() => {
      document.removeEventListener("click", outsideClick);
      window.removeEventListener("resize", updatePosition);
    });
    watch(
      () => props.show,
      (nv) => {
        visible.value = nv;
      }
      // { immediate: true }
    );
    watch(
      () => props.title,
      () => {
        if (visible.value) {
          updatePosition();
        }
      }
    );
    const updateShow = (value: boolean) => {
      visible.value = value;
      emit("update:show", value);
      if (value == false) emit("close");
    };
    const outsideClick = (e: PointerEvent) => {
      const ctx = refSelection.value?.$el || refSelection.value;
      if (
        refPopper.value &&
        !refPopper.value.contains(e.target) &&
        ctx &&
        !ctx.contains(e.target)
      ) {
        updateShow(false);
      }
    };
    const show = () => {
      if (!rendered.value) {
        rendered.value = true;
        document.addEventListener("click", outsideClick);
        nextTick(() => {
          updateShow(true);
          updatePosition();
        });
      } else {
        clearTimeout(showTimer.value);
        updateShow(true);
        updatePosition();
      }
    };
    const hide = () => {
      hideTimer.value = setTimeout(() => {
        if (!props.show) {
          updateShow(false);
        }
      }, 300);
    };
    return () => {
      const title = slots.title?.() || props.title;
      const content: any = slots.content?.() || props.content;
      const preCls = "poptip";
      const cls = [
        `k-${preCls}`,
        {
          [`k-${preCls}-has-arrow`]: true,
          [`k-${preCls}-dark`]: props.dark,
        },
      ];
      const wpProps: Record<string, any> & {} = {
        ref: refSelection,
        onMouseleave: hide,
      };
      if (props.trigger === "click") {
        // wpProps.onClick = show; for
        wpProps.onClick = show;
      } else if (props.trigger === "hover") {
        wpProps.onMouseenter = show;
      } else if (props.trigger === "focus") {
        wpProps.onFocus = show;
        wpProps.onBlur = hide;
      }
      const children = getChildren(slots.default?.());
      const nodes = children?.map((node) => {
        let pp = { ...attrs };

        if (children.length == 1) {
          pp = { ...pp, ...wpProps };
        }
        return cloneVNode(node, pp, true, true);
      });
      const nodeWrapper = nodes.length > 1 ? <span {...wpProps}>{...nodes}</span> : nodes[0];

      const styles = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        transformOrigin: transOrigin.value,
      };
      const childNodes = [nodeWrapper];
      const _props = {
        "k-placement": currentPlacement.value,
        style: styles,
        ref: refPopper,
        onMouseenter: () => {
          clearTimeout(hideTimer.value);
          updateShow(true);
        },
        onMouseleave: () => {
          showTimer.value = setTimeout(() => {
            if (!props.show) {
              updateShow(false);
            }
          }, 300);
        },
      };
      if (rendered.value) {
        childNodes.push(
          // const overlay = rendered.value ? (
          <Transition name={`k-${preCls}`}>
            <div class={cls} v-transfer={true} v-show={visible.value} {..._props}>
              <div class={`k-${preCls}-content`}>
                {title ? <div class={`k-${preCls}-title`}>{title}</div> : null}
                <div class={`k-${preCls}-body`}>{content}</div>
                <div class={`k-${preCls}-arrow`}>
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
              </div>
            </div>
          </Transition>
          // ) : null;
        );
      }
      return childNodes;
    };
  },
});
export default Poptip;
