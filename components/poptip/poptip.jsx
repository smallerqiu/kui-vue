import {
  cloneVNode,
  defineComponent,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  Transition,
  watch,
} from "vue";
import transfer from "../directives/transfer";
import { setPlacement } from "../utils/placement";
import { getChildren } from "../utils/vnode";

import { placements } from "../const/var";
const Poptip = defineComponent({
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
        return placements.includes(value);
      },
      default: "top",
    },
  },
  setup(ps, { slots, attrs, emit }) {
    // const te = {...attrs}
    // console.log(te)
    const rendered = ref(ps.show);
    const visible = ref(ps.show);
    const refPopper = ref();
    const refSelection = ref();
    const left = ref(0);
    const top = ref(0);
    const currentPlacement = ref(ps.placement);
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
      () => ps.show,
      (nv, no) => {
        visible.value = nv;
      }
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
    const updateShow = (value) => {
      visible.value = value;
      emit("update:show", value);
    };
    const outsideClick = (e) => {
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
    const show = () => {
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
    const hide = () => {
      hideTimer.value = setTimeout(() => {
        if (!ps.show) {
          updateShow(false);
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
        ref: refSelection,
        onMouseleave: hide, //for 3
      };
      if (ps.trigger === "click") {
        // wpProps.onClick = show; for
        wpProps.onClick = show;
      } else if (ps.trigger === "hover") {
        wpProps.onMouseenter = show;
      } else if (ps.trigger === "focus") {
        wpProps.onFocus = show;
        wpProps.onBlur = hide;
      }
      const children = getChildren(slots.default?.());
      const nodes = children?.map((node) => {
        let pp = { ...attrs };

        if (children.length == 1) {
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
      const props = {
        "k-placement": currentPlacement.value,
        style: styles,
        ref: refPopper,
        onMouseenter: () => {
          clearTimeout(hideTimer.value);
          updateShow(true);
        },
        onMouseleave: () => {
          showTimer.value = setTimeout(() => {
            if (!ps.show) {
              updateShow(false);
            }
          }, 300);
        },
      };
      if (rendered.value) {
        childNodes.push(
          // const overlay = rendered.value ? (
          <Transition name={`k-${preCls}`}>
            <div class={cls} v-transfer={true} v-show={visible.value} {...props}>
              <div class={`k-${preCls}-content`}>
                {title ? <div class={`k-${preCls}-title`}>{title}</div> : null}
                <div class={`k-${preCls}-body`}>{content}</div>
                <div class={`k-${preCls}-arrow`}>
                  <svg style={{ fill: "currentcolor" }} viewBox="0 0 24 8">
                    <path
                      id="ot"
                      d="m24,0.97087l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
                    />
                    <path
                      stroke="currentcolor"
                      id="in"
                      d="m24,0l0,1c-4,0 -5.5,1 -7.5,3c-2,2 -2.5,3 -4.5,3c-2,0 -2.5,-1 -4.5,-3c-2,-2 -3.5,-3 -7.5,-3l0,-1l24,0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Transition>
          // ) : null;
        );
      }
      return childNodes; //for 3
    };
  },
});
export default Poptip;
