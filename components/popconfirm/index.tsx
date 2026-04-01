import { HelpCircle } from "kui-icons";
import {
  cloneVNode,
  computed,
  defineComponent,
  inject,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  Transition,
  watch,
  type ExtractPropTypes,
  type PropType,
} from "vue";
import { Button } from "../button";
import type { placements } from "../const/var";
import { transfer } from "../directives/transfer";
import Icon from "../icon";
import zhCN from "../locale/zh-CN";
import { setPlacement } from "../utils/placement";
import { getChildren } from "../utils/vnode";

export const popconfirmProps = {
  dark: Boolean,
  show: Boolean,
  title: [String, Number, Object, Array],
  size: String,
  width: [Number, String],
  okText: { type: String },
  cancelText: { type: String },
  placement: {
    type: String as PropType<placements>,
    default: "top",
  },
};

export type PopconfirmProps = ExtractPropTypes<typeof popconfirmProps>;

const Popconfirm = defineComponent({
  name: "Popconfirm",
  directives: {
    transfer,
  },
  props: popconfirmProps,
  setup(props, { slots, attrs, emit }) {
    const injectedLocale = inject<Record<string, any>>("locale", zhCN);

    const locale = computed(() => {
      return injectedLocale instanceof Object && "value" in injectedLocale
        ? injectedLocale.value
        : injectedLocale;
    });
    const rendered = ref(false);
    const visible = ref(false);
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
    const mouseEnter = () => {
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
      const nodes = children?.map((node) => {
        let pp = { ...attrs };
        if (children.length == 1) {
          pp = { ...pp, ...wpProps };
        }
        return cloneVNode(node, pp, true);
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
                <div class={`k-${preCls}-body`}>
                  <Icon type={HelpCircle} />
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
                    {/* <path d="M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z"></path> */}
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
export default Popconfirm;
