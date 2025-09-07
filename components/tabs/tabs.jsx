import Icon from "../icon";
import { getChildren } from "../utils/vnode";
import { Close, ChevronBack, ChevronForward } from "kui-icons";
import { defineComponent, onMounted, onBeforeMount, ref, nextTick, watch, cloneVNode, computed } from "vue";
import { withInstall } from '../utils/vue';
const Tabs = defineComponent({
  name: "Tabs",
  props: {
    activeKey: String,
    card: Boolean,
    sample: Boolean,
    centered: Boolean,
    animated: { type: Boolean, default: true },
  },
  setup(ps, { slots, emit }) {
    const defaultActiveKey = ref(ps.activeKey);
    const currentIndex = ref(-1);
    const scrollable = ref(false);
    const navOffsetLeft = ref(0);
    const prevBtnDisabed = ref(false);
    const nextBtnDisabed = ref(false);
    const navRef = ref();
    const navscrollRef = ref();
    const navboxRef = ref();
    const inkbarRef = ref();

    // const children = getChildren(slots.default?.());
    const children = computed(() => {
      return getChildren(slots.default?.());
    });
    watch(
      () => ps.activeKey,
      () => {
        defaultActiveKey.value = ps.activeKey;
        updateIndex();
      }
    );
    onMounted(() => {
      nextTick(() => {
        updateIndex();
      });
      window.addEventListener("resize", resetNavPosition);
    });
    onBeforeMount(() => {
      window.removeEventListener("resize", resetNavPosition);
    });
    const closeTab = (key, e) => {
      emit("remove", key);
      e.stopPropagation();
      // e.preventDefault();
    };
    const resetActivePostion = () => {
      const target = navRef.value.children[currentIndex.value];
      if (!target) return;
      // show active tab in client
      const panel = navscrollRef.value;
      // let totalWidth = panel.offsetWidth
      let clientWidth = navboxRef.value.clientWidth;
      let navOffsetleft = navOffsetLeft.value;
      let { offsetLeft, offsetWidth } = target;

      // min left
      if (navOffsetleft + offsetLeft < 0) {
        navOffsetleft = -offsetLeft;
      }
      //max right
      else if (clientWidth - navOffsetleft < offsetLeft + offsetWidth) {
        navOffsetleft -= offsetLeft + offsetWidth + navOffsetleft - clientWidth + 2; //marginRight
      }
      navOffsetLeft.value = navOffsetleft;
      panel.style.transform = `translate3d(${navOffsetleft}px,0,0)`;
    };
    const resetNavPosition = () => {
      // when one tab removed or append
      nextTick(() => {
        const panel = navscrollRef.value;
        if (!panel) return;
        let totalWidth = panel.offsetWidth;
        let clientWidth = navboxRef.value.clientWidth;
        let navOffsetleft = navOffsetLeft.value;
        if (clientWidth + navOffsetleft < clientWidth) {
          navOffsetleft = clientWidth - totalWidth;
        }
        if (navOffsetleft > 0) navOffsetleft = 0;
        navOffsetLeft.value = navOffsetleft;

        nextBtnDisabed.value = navOffsetleft == clientWidth - totalWidth;
        prevBtnDisabed.value = navOffsetleft == 0;

        panel.style.transform = `translate3d(${navOffsetleft}px,0,0)`;

        resetActivePostion();
        updateInkBarPosition()
        updateNav();
      });
    };
    const scroll = (direction) => {
      //control left or right

      const panel = navscrollRef.value;
      let totalWidth = panel.offsetWidth;
      let clientWidth = navboxRef.value.clientWidth;
      let navOffsetleft = navOffsetLeft.value;
      // console.log(totalWidth, clientWidth)
      if (direction == "right") {
        const endWidth = totalWidth - clientWidth + navOffsetleft;
        if (endWidth > clientWidth) {
          navOffsetleft -= clientWidth;
        } else if (endWidth > 0) {
          navOffsetleft -= endWidth;
        }
      } else {
        if (navOffsetleft < -clientWidth) {
          navOffsetleft += clientWidth;
        } else if (navOffsetleft < 0) {
          navOffsetleft = 0;
        }
      }
      nextBtnDisabed.value = navOffsetleft == clientWidth - totalWidth;
      prevBtnDisabed.value = navOffsetleft == 0;

      navOffsetLeft.value = navOffsetleft;
      panel.style.transform = `translate3d(${navOffsetleft}px,0,0)`;
    };
    const tabClick = ({ disabled, key }, index) => {
      if (!disabled) {
        emit("update:activeKey", key);
        emit("tab-click", key);
        defaultActiveKey.value = key;
        currentIndex.value = index;
        emit("change", key);
      }
    };
    const updateIndex = () => {
      nextTick(() => {
        currentIndex.value = children.value?.map((p) => p.key).indexOf(defaultActiveKey.value);
        resetActivePostion();
        updateInkBarPosition();
      });
    };
    const updateInkBarPosition = () => {
      if (!ps.card && !ps.sample && ps.animated) {
        const nav = navRef.value.children[currentIndex.value];
        if (nav) {
          const inkbar = inkbarRef.value;
          let offsetLeft = nav.offsetLeft;
          if (ps.centered) {
            // offsetLeft = (navboxRef.value.offsetWidth - offsetLeft) ;
          }
          inkbar.style.width = `${nav.offsetWidth}px`;
          inkbar.style.transform = `translate3d(${offsetLeft}px, 0px, 0px)`;
        }
      }
    };
    const updateNav = () => {
      nextTick(() => {
        // update inkbar position

        // set panel has scroll arrow
        const navbox = navboxRef.value;
        if (!navbox) return;
        scrollable.value = navbox.scrollWidth > navbox.clientWidth;
      });
    };
    const renderNav = () => {
      return children.value?.map((panel, index) => {
        const key = panel.key;
        let { icon, title, closable, disabled } = panel.props;
        disabled = disabled !== undefined && disabled != false;
        closable = closable !== undefined;
        const prop = {
          class: ["k-tabs-tab", { ["k-tabs-tab-active"]: key == defaultActiveKey.value, ["k-tabs-tab-disabled"]: disabled }],
          onClick: () => tabClick({ disabled, key }, index),
        };
        return (
          <div {...prop}>
            {icon ? <Icon type={icon} /> : null}
            {title}
            {closable && ps.card ? <Icon type={Close} class="k-tabs-close" strokeWidth={45} onClick={(e) => closeTab(key, e)} /> : null}
          </div>
        );
      });
    };

    return () => {
      const { card, animated, centered, sample } = ps;
      const classes = [
        "k-tabs",
        {
          ["k-tabs-animated"]: animated && !card && !sample,
          ["k-tabs-card"]: card && !sample,
          ["k-tabs-sample"]: sample && !card,
          ["k-tabs-centered"]: centered,
        },
      ];

      let scrollStyle = {},
        paneStyle = {};

      if (animated && !card && !sample) {
        paneStyle.marginLeft = `-${100 * currentIndex.value}%`;
      }

      const navCls = ["k-tabs-nav-container", { ["k-tabs-nav-container-scroll"]: scrollable.value }];
      const childrenNode = children.value?.map((item) => {
        return cloneVNode(item, {
          activeKey: defaultActiveKey.value,
          onResetNavPosition: () => resetNavPosition(),
        });
      });
      return (
        <div class={classes}>
          <div class="k-tabs-bar">
            <div class={navCls}>
              {scrollable.value ? (
                <span class={["k-tabs-tab-btn-prev", { "k-tabs-tab-btn-prev-disabed": prevBtnDisabed.value }]} onClick={() => scroll("left")}>
                  <Icon type={ChevronBack} />
                </span>
              ) : null}
              <div class="k-tabs-nav-wrap" ref={navboxRef}>
                <div class="k-tabs-nav" style={scrollStyle} ref={navscrollRef}>
                  {!card && animated && !sample ? <div class="k-tabs-ink-bar" ref={inkbarRef} /> : null}
                  <div class="k-tabs-nav-inner" ref={navRef}>
                    {renderNav()}
                  </div>
                </div>
              </div>
              {scrollable.value ? (
                <span class={["k-tabs-tab-btn-next", { "k-tabs-tab-btn-next-disabed": nextBtnDisabed.value }]} onClick={() => scroll("right")}>
                  <Icon type={ChevronForward} />
                </span>
              ) : null}
            </div>
            {slots.extra ? <div class="k-tabs-extra">{slots.extra()}</div> : null}
          </div>
          <div class="k-tabs-content" style={paneStyle}>
            {childrenNode}
          </div>
        </div>
      );
    };
  },
});
export default withInstall(Tabs);
