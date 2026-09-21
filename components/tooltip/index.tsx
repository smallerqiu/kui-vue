import type { ForwardedComponent } from "../utils/vue";
import {
  defineComponent,
  h,
  ref,
  watch,
  type ExtractPropTypes,
  type PropType,
  type VNodeChild,
} from "vue";
import Popup from "../popup";
import { toCssLength } from "../utils/css";
import type { BooleanType, PlacementsType } from "../const/types";
import { colors } from "../const/var";
import { isColor } from "../utils/color";
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
  inheritAttrs: false,
  props: tooltipProps,
  emits: { "update:show": (show: boolean) => typeof show === "boolean" },
  setup(props, { slots, attrs, emit }) {
    const visible = ref(!!props.show);
    watch(
      () => props.show,
      (value) => {
        visible.value = !!value;
      },
    );
    return () => {
      const { color } = props;
      const bgColor = isColor(color)
        ? colors.some((preset) => preset === color)
          ? `var(--kui-color-${color})`
          : color
        : undefined;
      return (
        <Popup
          open={!props.disabled && visible.value}
          disabled={props.disabled}
          trigger="hover"
          placement={props.placement}
          panelOnly={props.panelOnly}
          prefixCls="k-tooltip"
          arrow
          hideWhenDetached
          closeOnOutsideClick={false}
          triggerAttrs={attrs}
          class={{
            [`k-tooltip-${color}`]: !!color && !isColor(color),
            "k-tooltip-has-color": isColor(color),
          }}
          style={{ width: toCssLength(props.width) }}
          contentStyle={{ backgroundColor: bgColor }}
          onOpenChange={(next) => {
            visible.value = next;
            emit("update:show", next);
          }}
          v-slots={{
            default: slots.default,
            overlay: () => <div class="k-tooltip-title">{slots.title?.() ?? props.title}</div>,
            arrow: () => (
              <div class="k-tooltip-arrow">
                <svg style={{ fill: bgColor || "currentcolor" }} viewBox="0 0 24 7">
                  <path d="M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z" />
                </svg>
              </div>
            ),
          }}
        />
      );
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
}) as ForwardedComponent<typeof Tooltip>;
export default Tooltip;
