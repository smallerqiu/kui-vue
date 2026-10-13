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
  trigger: { type: String as PropType<"hover" | "manual">, default: "hover" },
  show: Boolean as BooleanType,
  title: [String, Number, Object, Array] as PropType<VNodeChild>,
  color: String,
  disabled: Boolean as BooleanType,
  width: [Number, String] as PropType<number | string>,
  placement: {
    type: String as PropType<PlacementsType>,
    default: "top",
  },
  /** 关闭后是否销毁面板内容。默认销毁（重开时重新挂载）；设为 false 可保留面板内的表单状态，代价是每个打开过的实例留一份隐藏 DOM。 */
  destroyOnClose: { type: Boolean as BooleanType, default: true },
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
          trigger={props.trigger}
          placement={props.placement}
          panelOnly={props.panelOnly}
          prefixCls="k-tooltip"
          destroyOnClose={props.destroyOnClose}
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
                  {/* 与 poptip 同一套路（`#ot`）：只描外沿那一圈，把面板的 1px 边接过来。
                      上面那条闭合路径负责填色，这条开放路径的肩线落在面板描边的中线上
                      （箭头盒顶比面板外沿高 2px，描边带占 y 1~2，所以中线是 1.5），
                      整条曲线再往外挪半像素，看着就是描边顺着箭头绕一圈。
                      箭头尖端因此落到 viewBox 外半像素，靠 `overflow: visible` 不裁掉。 */}
                  <path
                    id="ot"
                    fill="none"
                    d="M24 1.5C20 1.5 18.5 2.5 16.5 4.5C14.5 6.5 14 7.5 12 7.5C10 7.5 9.5 6.5 7.5 4.5C5.5 2.5 4 1.5 0 1.5"
                  />
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
