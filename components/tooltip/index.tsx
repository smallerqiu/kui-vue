import {
  cloneVNode,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  Transition,
  watch,
  type CSSProperties,
  type DefineComponent,
  type ExtractPropTypes,
  type PropType,
  type VNode,
} from "vue";
import { colors, type TypePlacements, type TypeSize } from "../const/var";
import { transfer } from "../directives/transfer";
import { isColor } from "../utils/color";
import { setPlacement } from "../utils/placement";
import { getChildren } from "../utils/vnode";

export const tooltipProps = {
  show: Boolean,
  dark: Boolean,
  title: [String, Number, Object, Array] as PropType<any>,
  color: String,
  disabled: Boolean,
  size: String as PropType<TypeSize>,
  width: [Number, String] as PropType<number | string>,
  placement: {
    type: String as PropType< TypePlacements>,
    default: "top",
  },
};

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>;

export default defineComponent({
  name: "Tooltip",
  directives: { transfer },
  props: tooltipProps,
  emits: ["update:show"],
  setup(props, { slots, attrs, emit }) {
    const rendered = ref(props.show);
    const visible = ref(props.show);
    const refPopper = ref<HTMLElement | null>(null);
    const refSelection = ref<HTMLElement | null>(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(props.placement);
    const transOrigin = ref("bottom");
    const hideTimer = ref<any>();
    const showTimer = ref<any>();

    const updateShow = (value: boolean) => {
      visible.value = value;
      emit("update:show", value);
    };

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
      window.removeEventListener("resize", updatePosition);
      clearTimeout(hideTimer.value);
      clearTimeout(showTimer.value);
    });

    watch(
      () => props.show,
      (nv) => {
        visible.value = nv;
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
      const nodes = children?.map((node) => {
        const pp = children.length === 1 ? { ...attrs, ...wpProps } : { ...attrs };
        return cloneVNode(node, pp, true, true);
      });

      const nodeWrapper = nodes.length > 1 ? <span {...wpProps}>{nodes}</span> : nodes[0];

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
            [`k-${preCls}-dark`]: props.dark,
          },
        ],
        "k-placement": currentPlacement.value,
        style: styles,
        ref: refPopper,
        onMouseenter: () => {
          clearTimeout(hideTimer.value);
          if (!props.disabled) updateShow(true);
        },
        onMouseleave: () => {
          showTimer.value = setTimeout(() => {
            if (!props.show) updateShow(false);
          }, 300);
        },
      };
      const contentProps = {
        class: [`k-${preCls}-content`],
        style: {
          backgroundColor: isColor(color)
            ? colors.includes(color || "")
              ? `var(--kui-color-${color})`
              : color
            : undefined,
        } as CSSProperties,
      };
      const arrowProps = {
        style: {
          fill: isColor(color)
            ? colors.includes(color || "")
              ? `var(--kui-color-${color})`
              : color
            : "currentcolor",
        } as CSSProperties,
      };
      const tooltipOverlay = rendered.value ? (
        <Transition name={`k-${preCls}`}>
          <div v-transfer={true} v-show={visible.value} {...overlayProps}>
            <div {...contentProps}>
              <div class={`k-${preCls}-title`}>{title}</div>
              <div class={`k-${preCls}-arrow`}>
                <svg {...arrowProps} viewBox="0 0 24 7">
                  <path d="M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </Transition>
      ) : null;

      return [nodeWrapper, tooltipOverlay];
    };
  },
})  as DefineComponent<TooltipProps>;
