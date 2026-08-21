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
  type CSSProperties,
  type ExtractPropTypes,
  type PropType,
  type VNode,
  type VNodeChild,
} from "vue";
import { usePopupContainer } from "../config/popup";
import { type BooleanType, type PlacementsType } from "../const/types";
import { colors } from "../const/var";
import { isColor } from "../utils/color";
import { setPlacement } from "../utils/placement";
import { cloneNodes, getChildren } from "../utils/vnode";

const tooltipProps = {
  show: Boolean as BooleanType,
  title: [String, Number, Object, Array] as PropType<VNodeChild>,
  color: String,
  disabled: Boolean as BooleanType,
  width: [Number, String] as PropType<number | string>,
  placement: {
    type: String as PropType<PlacementsType>,
    default: "top",
  },
  panelOnly: Boolean as BooleanType,
};

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;

const Tooltip = defineComponent({
  name: "Tooltip",
  props: tooltipProps,
  setup(props, { slots, attrs, emit }) {
    const getPopupContainer = usePopupContainer();
    const rendered = ref(props.show || props.panelOnly);
    const visible = ref(props.show || props.panelOnly);
    const refPopper = ref<HTMLElement | null>(null);
    const refSelection = ref<HTMLElement | null>(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(props.placement);
    const transOrigin = ref("bottom");
    const hideTimer = ref<ReturnType<typeof setTimeout>>();
    const showTimer = ref<ReturnType<typeof setTimeout>>();
    const anchorVisible = ref(props.panelOnly);
    let positionRaf = 0;
    let intersectionObserver: IntersectionObserver | null = null;
    let resizeObserver: ResizeObserver | null = null;

    const updateShow = (value: boolean) => {
      visible.value = value;
      emit("update:show", value);
    };

    const updatePosition = () => {
      cancelAnimationFrame(positionRaf);
      positionRaf = requestAnimationFrame(() => {
        nextTick(() => {
          if (!visible.value || !anchorVisible.value) return;
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
      const selection =
        (refSelection.value as HTMLElement & { $el?: Element })?.$el || refSelection.value;
      if (selection && typeof IntersectionObserver !== "undefined") {
        intersectionObserver = new IntersectionObserver(([entry]) => {
          anchorVisible.value = entry.isIntersecting;
          if (entry.isIntersecting) updatePosition();
        });
        intersectionObserver.observe(selection);
      } else {
        anchorVisible.value = true;
        updatePosition();
      }
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver(updatePosition);
        if (selection) resizeObserver.observe(selection);
        if (refPopper.value) resizeObserver.observe(refPopper.value);
      }
    });

    onUnmounted(() => {
      cancelAnimationFrame(positionRaf);
      intersectionObserver?.disconnect();
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updatePosition);
      document.removeEventListener("scroll", updatePosition, true);
      clearTimeout(hideTimer.value);
      clearTimeout(showTimer.value);
    });

    watch(
      () => props.show,
      (nv) => {
        visible.value = nv;
        if (nv) updatePosition();
      }
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
        if (visible.value) updatePosition();
      }
    );

    const mouseEnter = () => {
      if (props.disabled) return;
      if (!rendered.value) {
        rendered.value = true;
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
      const preCls = "tooltip";
      const { color } = props;

      const wpProps = {
        ref: refSelection,
        onTouchstart: mouseEnter,
        onTouchend: hide,
        onTouchmove: updatePosition,
        onMouseenter: mouseEnter,
        onMouseleave: hide,
      };

      const children = getChildren(slots.default?.()) as VNode[];
      const nodeWrapper = cloneNodes(children, { ...attrs, ...wpProps }, true, true);

      const styles: CSSProperties = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        transformOrigin: transOrigin.value,
      };

      const overlayProps = {
        class: [
          `k-${preCls}`,
          {
            [`k-${preCls}-${color}`]: color && !isColor(color),
            [`k-${preCls}-has-color`]: isColor(color),
            [`k-${preCls}-has-arrow`]: true,
          },
        ],
        "k-placement": currentPlacement.value,
        style: styles,
        ref: refPopper,
        onMouseenter: () => {
          if (props.panelOnly) return;
          clearTimeout(hideTimer.value);
          if (!props.disabled) updateShow(true);
        },
        onMouseleave: () => {
          if (props.panelOnly) return;
          showTimer.value = setTimeout(() => {
            if (!props.show) updateShow(false);
          }, 300);
        },
      };
      const contentProps = {
        class: [`k-${preCls}-content`],
        style: {
          backgroundColor: isColor(color)
            ? colors.some((preset) => preset === color)
              ? `var(--kui-color-${color})`
              : color
            : undefined,
        } as CSSProperties,
      };
      const arrowProps = {
        style: {
          fill: isColor(color)
            ? colors.some((preset) => preset === color)
              ? `var(--kui-color-${color})`
              : color
            : "currentcolor",
        } as CSSProperties,
      };
      const panel = rendered.value ? (
        <div
          v-show={visible.value && anchorVisible.value}
          {...overlayProps}
          class={[overlayProps.class, { "k-tooltip-panel": props.panelOnly }]}
          style={props.panelOnly ? undefined : overlayProps.style}
          onMouseenter={props.panelOnly ? undefined : overlayProps.onMouseenter}
          onMouseleave={props.panelOnly ? undefined : overlayProps.onMouseleave}
        >
          <div {...contentProps}>
            <div class={`k-${preCls}-title`}>{title}</div>
            <div class={`k-${preCls}-arrow`}>
              <svg {...arrowProps} viewBox="0 0 24 7">
                <path d="M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z"></path>
              </svg>
            </div>
          </div>
        </div>
      ) : null;

      if (props.panelOnly) return panel;
      return [
        nodeWrapper,
        ...(rendered.value
          ? [
              <Teleport to={getPopupContainer()}>
                <Transition name={`k-${preCls}`}>{panel}</Transition>
              </Teleport>,
            ]
          : []),
      ];
    };
  },
});
export const TooltipPanel = defineComponent({
  name: "TooltipPanel",
  inheritAttrs: false,
  props: tooltipProps,
  setup:
    (props, { attrs, slots }) =>
    () =>
      h(Tooltip, { ...attrs, ...props, panelOnly: true }, slots),
});
export default Tooltip;
