import type { ForwardedComponent } from "../utils/vue";
import {
  defineComponent,
  h,
  ref,
  watch,
  computed,
  inject,
  isRef,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type VNodeChild,
} from "vue";
import Popup, { type PopupRef } from "../base/popup";
import { toCssLength } from "../utils/css";
import type { BooleanType, PlacementsType } from "../const/types";
import { CircleQuestionMark } from "kui-icons";
import { Button } from "../button";
import Icon from "../icon";
import zhCN from "../locale/zh-CN";
const popconfirmProps = {
  dark: Boolean as BooleanType,
  show: Boolean as BooleanType,
  title: [String, Number, Object, Array] as PropType<VNodeChild>,
  width: [Number, String],
  okText: { type: String },
  cancelText: { type: String },
  placement: {
    type: String as PropType<PlacementsType>,
    default: "top",
  },
  panelOnly: Boolean as BooleanType,
};
export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>;
const Popconfirm = defineComponent({
  name: "Popconfirm",
  inheritAttrs: false,
  props: popconfirmProps,
  emits: {
    "update:show": (show: boolean) => typeof show === "boolean",
    ok: () => true,
    cancel: () => true,
  },
  setup(props, { slots, attrs, emit }) {
    const visible = ref(!!props.show);
    watch(
      () => props.show,
      (value) => {
        visible.value = !!value;
      },
    );
    const injectedLocale = inject<typeof zhCN | Ref<typeof zhCN>>("locale", zhCN);
    const locale = computed(() => (isRef(injectedLocale) ? injectedLocale.value : injectedLocale));
    return () => (
      <Popup
        open={visible.value}
        trigger={"click"}
        placement={props.placement}
        panelOnly={props.panelOnly}
        arrow
        respectDefaultPrevented={false}
        prefixCls="k-popconfirm"
        class={{ "k-popconfirm-dark": props.dark }}
        style={{ width: toCssLength(props.width) }}
        triggerAttrs={attrs}
        onOpenChange={(next) => {
          visible.value = next;
          emit("update:show", next);
        }}
        v-slots={{
          default: slots.default,
          overlay: (popup: PopupRef) => (
            <>
              <div class="k-popconfirm-body">
                <Icon type={CircleQuestionMark} />
                <div class="k-popconfirm-title">{slots.title?.() ?? props.title}</div>
              </div>
              <div class="k-popconfirm-footer">
                <Button
                  size="small"
                  onClick={() => {
                    popup.close();
                    emit("cancel");
                  }}
                >
                  {props.cancelText || locale.value.k.common.cancel}
                </Button>
                <Button
                  size="small"
                  type="primary"
                  onClick={() => {
                    popup.close();
                    emit("ok");
                  }}
                >
                  {props.okText || locale.value.k.common.ok}
                </Button>
              </div>
            </>
          ),
        }}
      />
    );
  },
});
export const PopconfirmPanel = defineComponent({
  name: "PopconfirmPanel",
  inheritAttrs: false,
  props: popconfirmProps,
  setup:
    (props, { attrs, slots }) =>
    () =>
      h(Popconfirm, { ...attrs, ...props, panelOnly: true }, slots),
}) as ForwardedComponent<typeof Popconfirm>;
export default Popconfirm;
