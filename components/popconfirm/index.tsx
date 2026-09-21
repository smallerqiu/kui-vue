import type { ForwardedComponent } from "../utils/vue";
import { CircleQuestionMark } from "kui-icons";
import {
  computed,
  defineComponent,
  h,
  inject,
  isRef,
  nextTick,
  onUnmounted,
  ref,
  Teleport,
  Transition,
  watch,
  type ExtractPropTypes,
  type PropType,
  type Ref,
  type VNodeChild,
} from "vue";
import { Button } from "../button";
import { usePopupContainer } from "../config/popup";
import { usePopupHost } from "../config/popup-host";
import type { BooleanType, PlacementsType } from "../const/types";
import Icon from "../icon";
import zhCN from "../locale/zh-CN";
import { usePopoverPosition, usePopoverOutsideClick } from "../utils/use-popover";
import { cloneNodes, getChildren } from "../utils/vnode";
import { toCssLength } from "../utils/css";

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
  props: popconfirmProps,
  emits: {
    "update:show": (show: boolean) => typeof show === "boolean",
    ok: () => true,
    cancel: () => true,
  },
  setup(props, { slots, attrs, emit }) {
    usePopupHost(() => visible.value && updateShow(false));
    type Locale = typeof zhCN;
    const injectedLocale = inject<Locale | Ref<Locale>>("locale", zhCN);
    const getPopupContainer = usePopupContainer();

    const locale = computed<Locale>(() => {
      return isRef(injectedLocale) ? injectedLocale.value : injectedLocale;
    });
    const rendered = ref(props.show || props.panelOnly);
    const visible = ref(!!(props.show || props.panelOnly));
    const { refPopper, refSelection, left, top, currentPlacement, transOrigin, updatePosition } =
      usePopoverPosition(props, visible);
    const hideTimer = ref<ReturnType<typeof setTimeout>>();
    const showTimer = ref<ReturnType<typeof setTimeout>>();
    onUnmounted(() => {
      clearTimeout(hideTimer.value);
      clearTimeout(showTimer.value);
    });
    watch(
      () => props.show,
      (nv) => {
        visible.value = nv || false;
        if (nv) updatePosition();
      },
    );
    watch(
      () => props.title,
      () => {
        if (visible.value) {
          updatePosition();
        }
      },
    );
    const updateShow = (value: boolean) => {
      visible.value = value;
      emit("update:show", value);
    };
    usePopoverOutsideClick(visible, () => props.panelOnly, refSelection, refPopper, updateShow);
    const mouseEnter = () => {
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

    const ok = () => {
      updateShow(false);
      emit("ok");
    };

    const cancel = () => {
      updateShow(false);
      emit("cancel");
    };
    return () => {
      const title = slots.title?.() || props.title;
      const preCls = "popconfirm";
      const contentNode = (
        <div class={`k-${preCls}-content`}>
          <div class={`k-${preCls}-body`}>
            <Icon type={CircleQuestionMark} />
            <div class={`k-${preCls}-title`}>{title}</div>
          </div>
          <div class={`k-${preCls}-footer`}>
            <Button size="small" onClick={cancel}>
              {props.cancelText || locale.value?.k.common.cancel}
            </Button>
            <Button size="small" type="primary" onClick={ok}>
              {props.okText || locale.value?.k.common.ok}
            </Button>
          </div>
          <div class={`k-${preCls}-arrow`}>
            <svg style={{ fill: "currentcolor" }} viewBox="0 0 24 8">
              <path
                d="M24,0.97087 L24,1.97087 C20,1.97087 18.5,2.97087 16.5,4.97087 C14.5,6.97087 14,7.97087 12,7.97087 C10,7.97087 9.5,6.97087 7.5,4.97087 C5.5,2.97087 4,1.97087 0,1.97087 L0,0.97087 L24,0.97087 Z"
                id="ot"
              />
              <path
                d="M24,0 L24,1 C20.032328,1 18.1576594,1.985435 16.1576594,3.985435 C14.1576594,5.985435 13.3847825,7 12,7 C10.6152175,7 9.81306952,5.985435 7.81306952,3.985435 C5.81306952,1.985435 4.0114261,1 0,1 L0,0 L24,0 Z"
                id="in"
                stroke="currentcolor"
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
            style={{ width: toCssLength(props.width) }}
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
      const wpProps = {
        ref: refSelection,
        onClick: mouseEnter,
      };
      const children = getChildren(slots.default?.());
      const nodeWrapper = cloneNodes(children, { ...attrs, ...wpProps }, true);

      const styles = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        transformOrigin: transOrigin.value,
        width: toCssLength(props.width),
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
          </Teleport>,
          // ) : null;
        );
      }
      return childNodes;
    };
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
