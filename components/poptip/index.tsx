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
  panelOnly: Boolean as BooleanType,
};
export type PoptipProps = ExtractPropTypes<typeof poptipProps>;
const Poptip = defineComponent({
  name: "Poptip",
  inheritAttrs: false,
  props: poptipProps,
  emits: {
    "update:show": (show: boolean) => typeof show === "boolean",
    close: () => true,
  },
  setup(props, { slots, attrs, emit }) {
    const visible = ref(!!props.show);
    watch(
      () => props.show,
      (value) => {
        visible.value = !!value;
      },
    );

    return () => (
      <Popup
        open={visible.value}
        trigger={props.trigger}
        placement={props.placement}
        panelOnly={props.panelOnly}
        arrow
        respectDefaultPrevented={false}
        prefixCls="k-poptip"
        class={{ "k-poptip-dark": props.dark }}
        style={{ width: toCssLength(props.width) }}
        triggerAttrs={attrs}
        onOpenChange={(next) => {
          visible.value = next;
          emit("update:show", next);
          if (!next) emit("close");
        }}
        v-slots={{
          default: slots.default,
          overlay: () => (
            <>
              {slots.title || props.title ? (
                <div class="k-poptip-title">{slots.title?.() ?? props.title}</div>
              ) : null}
              <div class="k-poptip-body">{slots.content?.() ?? props.content}</div>
            </>
          ),
        }}
      />
    );
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
}) as ForwardedComponent<typeof Poptip>;
export default Poptip;
