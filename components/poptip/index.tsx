import {
  defineComponent,
  h,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  Teleport,
  Transition,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import { usePopupContainer } from "../config/popup";
import { setPlacement } from "../utils/placement";
import { cloneNodes, getChildren } from "../utils/vnode";

import type { BooleanType, PlacementsType } from "../const/types";

export type PoptipProps = ExtractPropTypes<typeof poptipProps>;

const poptipProps = {
  dark: Boolean,
  show: Boolean,
  title: [String, Number, Object, Array] as PropType<VNodeChild>,
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
  panelOnly: Boolean as BooleanType,
};
const Poptip = defineComponent({
  name: "Poptip",
  props: poptipProps,
  setup(props, { slots, attrs, emit }) {
    const getPopupContainer = usePopupContainer();
    const rendered = ref(props.show || props.panelOnly);
    const visible = ref(props.show || props.panelOnly);
    const refPopper = ref();
    const refSelection = ref();
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(props.placement);
    const transOrigin = ref("bottom");
    const hideTimer = ref();
    const showTimer = ref();
    let positionRaf = 0;
    const updatePosition = () => {
      cancelAnimationFrame(positionRaf);
      positionRaf = requestAnimationFrame(() => {
        nextTick(() => {
          if (!visible.value) return;
          setPlacement({
            refSelection,
            refPopper,
            currentPlacement,
            transOrigin,
            top,
            left,
          });
        });
      });
    };
    onMounted(() => {
      if (props.panelOnly) return;
      updatePosition();
      window.addEventListener("resize", updatePosition);
      document.addEventListener("scroll", updatePosition, true);
    });
    onUnmounted(() => {
      cancelAnimationFrame(positionRaf);
      clearTimeout(hideTimer.value);
      clearTimeout(showTimer.value);
      document.removeEventListener("click", outsideClick);
      document.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    });
    watch(
      () => props.show,
      (nv) => {
        visible.value = nv;
        if (nv) updatePosition();
      }
      // { immediate: true }
    );
    watch(
      () => props.placement,
      (placement) => {
        currentPlacement.value = placement;
        if (visible.value) updatePosition();
      }
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
          nextTick(() => {
            updatePosition();
          });
        });
      } else {
        clearTimeout(showTimer.value);
        updateShow(true);
        nextTick(() => {
          updatePosition();
        });
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
      const content = slots.content?.() || props.content;
      const preCls = "poptip";
      const contentNode = (
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
      );
      if (props.panelOnly) {
        return (
          <div
            class={[
              `k-${preCls}`,
              `k-${preCls}-panel`,
              `k-${preCls}-has-arrow`,
              { [`k-${preCls}-dark`]: props.dark },
            ]}
            k-placement={props.placement}
          >
            {contentNode}
          </div>
        );
      }
      const cls = [
        `k-${preCls}`,
        {
          [`k-${preCls}-has-arrow`]: true,
          [`k-${preCls}-dark`]: props.dark,
        },
      ];
      const wpProps: Record<string, unknown> = {
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
      const nodeWrapper = cloneNodes(children, { ...attrs, ...wpProps }, true, true);

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
          <Teleport to={getPopupContainer()}>
            <Transition name={`k-${preCls}`}>
              <div class={cls} v-show={visible.value} {..._props}>
                {contentNode}
              </div>
            </Transition>
          </Teleport>
          // ) : null;
        );
      }
      return childNodes;
    };
  },
});
export const PoptipPanel = defineComponent({
  name: "PoptipPanel",
  inheritAttrs: false,
  props: poptipProps,
  setup:
    (props, { attrs, slots }) =>
    () =>
      h(Poptip, { ...attrs, ...props, panelOnly: true }, slots),
});
export default Poptip;
