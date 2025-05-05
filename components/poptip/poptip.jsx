import { defineComponent, Transition, ref, cloneVNode, nextTick, watch, onMounted, onBeforeMount } from "vue";
import transfer from "../directives/transfer";
import { getChildren } from "../utils/vnode";
export default defineComponent({
  name: "Poptip",
  directives: {
    transfer,
  },
  props: {
    dark: Boolean,
    show: Boolean,
    title: [String, Number, Object, Array],
    size: String,
    width: [Number, String],
    trigger: {
      validator(value) {
        return ["click", "hover", "focus"].includes(value);
      },
      default: "hover",
    },
    placement: {
      validator(value) {
        return ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].includes(value);
      },
      default: "top",
    },
  },
  setup(ps, { slots, attrs, emit }) {
    // const te = {...attrs}
    // console.log(te)
    const rendered = ref(ps.show);
    const visible = ref(ps.show);
    const refPopper = ref(null);
    const refCtx = ref(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
    const transOrigin = ref("bottom");
    const hideTimer = ref(null);
    const showTimer = ref(null);
    const updatePosition = () => {
      nextTick(() => {
        const ctx = refCtx.value.$el || refCtx.value;
        let selectionRect = ctx.getBoundingClientRect();
        const offset = 3;
        let scrollTop = document.documentElement.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft;
        const pickerHeight = refPopper.value.offsetHeight;
        const pickerWidth = refPopper.value.offsetWidth;

        // 获取窗口尺寸
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;

        // 计算上下左右的可用空间
        const topSpace = selectionRect.top;
        const bottomSpace = windowHeight - (selectionRect.top + selectionRect.height);
        const leftSpace = selectionRect.left;
        const rightSpace = windowWidth - (selectionRect.left + selectionRect.width);

        // 动态调整 placement
        let apt = currentPlacement.value;
        if (apt.startsWith("top")) {
          if (topSpace < pickerHeight + offset) {
            apt = apt.replace("top", "bottom"); // 如果上方空间不足，调整为下方
          }
        } else if (apt.startsWith("bottom")) {
          if (bottomSpace < pickerHeight + offset) {
            apt = apt.replace("bottom", "top"); // 如果下方空间不足，调整为上方
          }
        } else if (apt.startsWith("left")) {
          if (leftSpace < pickerWidth + offset) {
            apt = apt.replace("left", "right"); // 如果左侧空间不足，调整为右侧
          }
        } else if (apt.startsWith("right")) {
          if (rightSpace < pickerWidth + offset) {
            apt = apt.replace("right", "left"); // 如果右侧空间不足，调整为左侧
          }
        }
        currentPlacement.value = apt;
        // top.value = selectionRect.top - pickerHeight - offset + scrollTop;
        // left.value = selectionRect.left + (selectionRect.width - pickerWidth) / 2 + scrollLeft;
        switch (apt) {
          case "top":
            top.value = selectionRect.top - pickerHeight - offset + scrollTop;
            left.value = selectionRect.left + (selectionRect.width - pickerWidth) / 2 + scrollLeft;
            transOrigin.value = "bottom";
            break;
          case "top-left":
            top.value = selectionRect.top - pickerHeight - offset + scrollTop;
            left.value = selectionRect.left + scrollLeft;
            transOrigin.value = "left bottom";
            break;
          case "top-right":
            top.value = selectionRect.top - pickerHeight - offset + scrollTop;
            left.value = selectionRect.left + selectionRect.width - pickerWidth + scrollLeft;
            transOrigin.value = "right bottom";
            break;
          case "bottom":
            top.value = selectionRect.top + selectionRect.height + offset + scrollTop;
            left.value = selectionRect.left + (selectionRect.width - pickerWidth) / 2 + scrollLeft;
            transOrigin.value = "center top";
            break;
          case "bottom-left":
            top.value = selectionRect.top + selectionRect.height + offset + scrollTop;
            left.value = selectionRect.left + scrollLeft;
            transOrigin.value = "left top";
            break;
          case "bottom-right":
            top.value = selectionRect.top + selectionRect.height + offset + scrollTop;
            left.value = selectionRect.left + selectionRect.width - pickerWidth + scrollLeft;
            transOrigin.value = "right top";
            break;
          case "left":
            top.value = selectionRect.top + (selectionRect.height - pickerHeight) / 2 + scrollTop;
            left.value = selectionRect.left - pickerWidth - offset + scrollLeft;
            transOrigin.value = "right center";
            break;
          case "left-top":
            top.value = selectionRect.top + scrollTop;
            left.value = selectionRect.left - pickerWidth - offset + scrollLeft;
            transOrigin.value = "right top";
            break;
          case "left-bottom":
            top.value = selectionRect.top + selectionRect.height - pickerHeight + scrollTop;
            left.value = selectionRect.left - pickerWidth - offset + scrollLeft;
            transOrigin.value = "right bottom";
            break;
          case "right":
            top.value = selectionRect.top + (selectionRect.height - pickerHeight) / 2 + scrollTop;
            left.value = selectionRect.left + selectionRect.width + offset + scrollLeft;
            transOrigin.value = "left center";
            break;
          case "right-top":
            top.value = selectionRect.top + scrollTop;
            left.value = selectionRect.left + selectionRect.width + offset + scrollLeft;
            transOrigin.value = "left top";
            break;
          case "right-bottom":
            top.value = selectionRect.top + selectionRect.height - pickerHeight + scrollTop;
            left.value = selectionRect.left + selectionRect.width + offset + scrollLeft;
            transOrigin.value = "left bottom";
            break;
          default:
            // 默认处理
            top.value = selectionRect.top - pickerHeight - offset + scrollTop;
            left.value = selectionRect.left + (selectionRect.width - pickerWidth) / 2 + scrollLeft;
        }
      });
    };
    onMounted(() => {
      if (ps.show) {
        updatePosition();
      }
    });
    onBeforeMount(() => {
      document.removeEventListener("click", outsideClick);
    });
    watch(
      () => ps.show,
      (nv, no) => {
        visible.value = nv;
      },
      // { immediate: true }
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
    const updateShow = (value)=>{
      visible.value = value;
      emit("update:show", value);
    }
    const outsideClick = (e) => {
      const ctx = refCtx.value?.$el || refCtx.value;
      if (refPopper.value && !refPopper.value.contains(e.target) && ctx && !ctx.contains(e.target)) {
        updateShow(false)
      }
    };
    const show = () => {
      if (!rendered.value) {
        rendered.value = true;
        document.addEventListener("click", outsideClick);
        nextTick(() => {
          updateShow(true)
          updatePosition();
        });
      } else {
        clearTimeout(showTimer.value);
          updateShow(true)
        updatePosition();
      }
    };
    const hide = () => {
      hideTimer.value = setTimeout(() => {
        if (!ps.show) {
          updateShow(false)
        }
      }, 300);
    };
    return () => {
      const title = slots.title?.() || ps.title;
      const content = slots.content?.() || ps.content;
      const preCls = "poptip";
      const cls = [
        `k-${preCls}`,
        {
          [`k-${preCls}-has-arrow`]: true,
          [`k-${preCls}-dark`]: ps.dark,
        },
      ];
      const wpProps = {
        ref: refCtx,
        onMouseleave: hide,
      };
      if (ps.trigger === "click") {
        wpProps.onClick = show;
      } else if (ps.trigger === "hover") {
        wpProps.onMouseenter = show;
      } else if (ps.trigger === "focus") {
        wpProps.onFocus = show;
        wpProps.onBlur = hide;
      }
      const childs = getChildren(slots.default?.());
      const nodes = childs?.map((node) => {
        let pp = { ...attrs };
        if (childs.length == 1) {
          pp = { ...pp, ...wpProps };
        }
        return cloneVNode(node, pp, true, true);
      });
      const nodeWrapper = nodes.length > 1 ? <span {...wpProps}>{...nodes}</span> : nodes[0];

      const styles = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        transformOrigin: transOrigin.value,
      };
      const childNodes = [nodeWrapper];
      const pops = {
        "k-placement": currentPlacement.value,
        style: styles,
        ref: refPopper,
        onMouseenter: () => {
          clearTimeout(hideTimer.value);
          updateShow(true)
        },
        onMouseleave: () => {
          showTimer.value = setTimeout(() => {
            if (!ps.show) {
              updateShow(false)
            }
          }, 300);
        },
      };
      if (rendered.value) {
        childNodes.push(
          <Transition name={`k-${preCls}`}>
            <div class={cls} v-transfer={true} v-show={visible.value} {...pops}>
              <div class={`k-${preCls}-content`}>
                {title ? <div class={`k-${preCls}-title`}>{title}</div> : null}
                <div class={`k-${preCls}-body`}>{content}</div>
                <div class={`k-${preCls}-arrow`}>
                  <svg style={{ fill: "currentcolor" }} viewBox="0 0 24 8">
                    <path id="ot" d="m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z" />
                    <path stroke="currentcolor" id="in" d="m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z" />
                  </svg>
                </div>
              </div>
            </div>
          </Transition>
        );
      }
      return <>{...childNodes}</>;
    };
  },
});
