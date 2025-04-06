import { defineComponent, Transition, ref, cloneVNode, nextTick } from "vue";
import { isColor } from "../utils/color";
import transfer from "../directives/transfer";
import { getChildren } from "../utils/vnode";
export default defineComponent({
  name: "Tooltip",
  directives: {
    transfer,
  },
  props: {
    dark: Boolean,
    title: [String, Number, Object, Array],
    color: String,
    width: [Number, String],
    placement: {
      validator(value) {
        return ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].includes(value);
      },
      default: "top",
    },
    show: Boolean,
  },
  setup(ps, { slots }) {
    const rendered = ref(false);
    const visible = ref(ps.show);
    const popper = ref(null);
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
    const transOrigin = ref("bottom");
    const resetPosition = (e) => {
      nextTick(() => {
        let selectionRect = e.target.getBoundingClientRect();
        const offset = 3;
        let scrollTop = document.documentElement.scrollTop;
        let scrollLeft = document.documentElement.scrollLeft;
        const pickerHeight = popper.value.offsetHeight;
        const pickerWidth = popper.value.offsetWidth;

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
            transOrigin.value = "left center";
            break;
          case "left-top":
            top.value = selectionRect.top + scrollTop;
            left.value = selectionRect.left - pickerWidth - offset + scrollLeft;
            transOrigin.value = "left top";
            break;
          case "left-bottom":
            top.value = selectionRect.top + selectionRect.height - pickerHeight + scrollTop;
            left.value = selectionRect.left - pickerWidth - offset + scrollLeft;
            transOrigin.value = "left bottom";
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

    const render = (e) => {
      if (!render.value) {
        rendered.value = true;
        nextTick(() => {
          visible.value = true;
          resetPosition(e);
        });
      } else {
        visible.value = true;
        resetPosition(e);
      }
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
      const childs = getChildren(slots.default?.());
      const nodes = childs?.map((node) =>
        cloneVNode(
          node,
          {
            onMouseenter: render,
            onMouseleave: () => {
              visible.value = false;
            },
            onUpdatePos: () => {
              console.log("test");
            },
          },
          true,
          true
        )
      );

      const styles = {
        left: `${left.value}px`,
        top: `${top.value}px`,
        transformOrigin: transOrigin.value,
      };
      return (
        <>
          {nodes}
          {rendered.value ? (
            <Transition name="k-tooltip">
              <div class={cls} v-transfer={true} k-placement={currentPlacement.value} v-show={visible.value} style={styles} ref={popper}>
                <div class={`k-${preCls}-content`} style={{ backgroundColor: isColor(color) ? color : null }}>
                  <div class={`k-${preCls}-title`}>{title}</div>
                  <div class={`k-${preCls}-arrow`}>
                    <svg style={{ fill: isColor(color) ? color : "currentcolor" }} viewBox="0 0 24 7">
                      <path d="M24 0V1C20 1 18.5 2 16.5 4C14.5 6 14 7 12 7C10 7 9.5 6 7.5 4C5.5 2 4 1 0 1V0H24Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Transition>
          ) : null}
        </>
      );
    };
  },
});
