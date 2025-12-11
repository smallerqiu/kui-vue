import {
  defineComponent,
  /*Transition,*/ ref,
  /*cloneVNode,*/ nextTick,
  watch,
  onMounted,
} from "vue";
import { isColor } from "../utils/color";
import { setPlacement } from "../utils/placement";
import transfer from "../directives/transfer";
import { getChildren } from "../utils/vnode";
import { withInstall, cloneVNode } from "../utils/vue";
import { colors, placements } from "../const/var";
const Tooltip = defineComponent({
  name: "Tooltip",
  directives: {
    transfer,
  },
  props: {
    dark: Boolean,
    title: [String, Number, Object, Array],
    color: String,
    disabled: Boolean,
    size: String,
    width: [Number, String],
    placement: {
      validator(value) {
        return placements.includes(value);
      },
      default: "top",
    },
    show: Boolean,
  },
  setup(ps, { slots, attrs }) {
    const rendered = ref(ps.show);
    const visible = ref(ps.show);
    const refPopper = ref();
    const refCtx = ref();
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
    const transOrigin = ref("bottom");
    const hideTimer = ref();
    const showTimer = ref();
    const updatePosition = () => {
      nextTick(() => {
        setPlacement({
          refCtx,
          refPopper,
          currentPlacement,
          transOrigin,
          top,
          left,
        });
      });
    };
    onMounted(() => {
      if (ps.show) {
        updatePosition();
      }
    });
    watch(
      () => ps.show,
      (nv, no) => {
        visible.value = nv;
      }
    );
    // 监听 title 的变化
    watch(
      () => ps.title,
      () => {
        if (visible.value) {
          updatePosition();
        }
      }
    );
    const mouseEnter = () => {
      if (ps.disabled) return;
      if (!rendered.value) {
        rendered.value = true;
        nextTick(() => {
          visible.value = true;
          updatePosition();
        });
      } else {
        clearTimeout(showTimer.value);
        visible.value = true;
        updatePosition();
      }
    };
    const hide = () => {
      hideTimer.value = setTimeout(() => {
        if (!ps.show) {
          visible.value = false;
        }
      }, 300);
    };
    return () => {
      const title = slots.title?.() || ps.title;
      const preCls = "tooltip";
      const { color } = ps;
      const cls = [
        `k-${preCls}`,
        {
          [`k-${preCls}-${color}`]: color && !isColor(color),
          [`k-${preCls}-has-color`]: isColor(color),
          [`k-${preCls}-has-arrow`]: true,
          [`k-${preCls}-dark`]: ps.dark,
        },
      ];
      const wpProps = {
        ref: refCtx,
        on: {
          touchstart: mouseEnter,
          touchmove: updatePosition,
          touchend: hide,
          mouseenter: mouseEnter,
          mouseleave: hide,
        },
        // onTouchstart: mouseEnter,
        // onTouchend: hide,
        // onMouseenter: mouseEnter,
        // onMouseleave: hide,
      };
      const children = getChildren(slots.default?.());
      const nodes = children?.map((node) => {
        // let pp = { ...attrs }; //for 3
        let pp = { attrs: { ...attrs } };
        if (children.length == 1) {
          pp = { ...pp, ...wpProps };
        }
        return cloneVNode(node, pp, true);
        // return cloneVNode(node, pp, true, true); //for 3
      });
      const nodeWrapper =
        nodes.length > 1 ? <span {...wpProps}>{...nodes}</span> : nodes[0];

      const styles = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        transformOrigin: transOrigin.value,
      };
      // const childNodes = [nodeWrapper];
      const props = {
        // "k-placement": currentPlacement.value, //for 3
        attrs: { "k-placement": currentPlacement.value },
        style: styles,
        ref: refPopper,
        on: {
          mouseenter: () => {
            clearTimeout(hideTimer.value);
            if (ps.disabled) return;
            visible.value = true;
          },
          mouseleave: () => {
            showTimer.value = setTimeout(() => {
              if (!ps.show) {
                visible.value = false;
              }
            }, 300);
          },
        },
        // onMouseenter: () => {
        //   clearTimeout(hideTimer.value);
        //   visible.value = true;
        // },
        // onMouseleave: () => {
        //   showTimer.value = setTimeout(() => {
        //     if (!ps.show) {
        //       visible.value = false;
        //     }
        //   }, 300);
        // },
      };
      // if (rendered.value) {
      // childNodes.push(
      const overlay = rendered.value ? (
        <transition name={`k-${preCls}`}>
          <div class={cls} v-transfer={true} v-show={visible.value} {...props}>
            <div
              class={`k-${preCls}-content`}
              style={{
                backgroundColor: isColor(color)
                  ? colors.includes(color)
                    ? `var(--kui-color-${color})`
                    : color
                  : null,
              }}
            >
              <div class={`k-${preCls}-title`}>{title}</div>
              <div class={`k-${preCls}-arrow`}>
                <svg
                  style={{
                    fill: isColor(color)
                      ? colors.includes(color)
                        ? `var(--kui-color-${color})`
                        : color
                      : "currentcolor",
                  }}
                  viewBox="0 0 24 7"
                >
                  <path d="M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </transition>
      ) : null;
      // );
      // }
      return cloneVNode(nodeWrapper, {}, true, overlay);
      // return <>{...childNodes}</>; // for 3
    };
  },
});
export default withInstall(Tooltip);
