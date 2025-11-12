import Icon from "../icon";
import { getChildren } from "../utils/vnode";
import { Close, ChevronBack, ChevronForward } from "kui-icons";
import { defineComponent, onMounted, onBeforeMount, ref, nextTick, watch, /*cloneVNode*/ computed } from "vue";
import { withInstall, cloneVNode } from '../utils/vue';
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
    const prevBtnDisabled = ref(false);
    const nextBtnDisabled = ref(false);
    const navRef = ref();
    const navScrollRef = ref();
    const navBoxRef = ref();
    const inkBarRef = ref();

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
    const resetActivePosition = () => {
      const target = navRef.value.children[currentIndex.value];
      if (!target) return;
      // show active tab in client
      const nav = navScrollRef.value;
      // let totalWidth = panel.offsetWidth
      let clientWidth = navBoxRef.value.clientWidth;
      let navLeft = navOffsetLeft.value;
      let { offsetLeft, offsetWidth } = target;

      // min left
      if (navLeft + offsetLeft < 0) {
        navLeft = -offsetLeft;
      }
      //max right
      else if (clientWidth - navLeft < offsetLeft + offsetWidth) {
        navLeft -= offsetLeft + offsetWidth + navLeft - clientWidth + 2; //marginRight
      }
      navOffsetLeft.value = navLeft;
      nav.style.transform = `translate3d(${navLeft}px,0,0)`;
    };
    const resetNavPosition = () => {
      // when one tab removed or append
      nextTick(() => {
        const nav = navScrollRef.value;
        if (!nav) return;
        let totalWidth = nav.offsetWidth;
        let clientWidth = navBoxRef.value.clientWidth;
        let navLeft = navOffsetLeft.value;
        if (clientWidth + navLeft < clientWidth) {
          navLeft = clientWidth - totalWidth;
        }
        if (navLeft > 0) navLeft = 0;
        navOffsetLeft.value = navLeft;

        nextBtnDisabled.value = navLeft == clientWidth - totalWidth;
        prevBtnDisabled.value = navLeft == 0;

        nav.style.transform = `translate3d(${navLeft}px,0,0)`;

        resetActivePosition();
        updateInkBarPosition()
        updateNav();
      });
    };
    const scroll = (direction) => {
      //control left or right

      const panel = navScrollRef.value;
      let totalWidth = panel.offsetWidth;
      let clientWidth = navBoxRef.value.clientWidth;
      let navLeft = navOffsetLeft.value;
      // console.log(totalWidth, clientWidth)
      if (direction == "right") {
        const endWidth = totalWidth - clientWidth + navLeft;
        if (endWidth > clientWidth) {
          navLeft -= clientWidth;
        } else if (endWidth > 0) {
          navLeft -= endWidth;
        }
      } else {
        if (navLeft < -clientWidth) {
          navLeft += clientWidth;
        } else if (navLeft < 0) {
          navLeft = 0;
        }
      }
      nextBtnDisabled.value = navLeft == clientWidth - totalWidth;
      prevBtnDisabled.value = navLeft == 0;

      navOffsetLeft.value = navLeft;
      panel.style.transform = `translate3d(${navLeft}px,0,0)`;
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
        resetActivePosition();
        updateInkBarPosition();
      });
    };
    const updateInkBarPosition = () => {
      if (!ps.card && !ps.sample) {
        const nav = navRef.value.children[currentIndex.value];
        if (nav) {
          const inkBar = inkBarRef.value;
          let offsetLeft = nav.offsetLeft;
          if (ps.centered) {
            // offsetLeft = (navBoxRef.value.offsetWidth - offsetLeft) ;
          }
          inkBar.style.width = `${nav.offsetWidth}px`;
          inkBar.style.transform = `translate3d(${offsetLeft}px, 0px, 0px)`;
        }
      }
    };
    const updateNav = () => {
      nextTick(() => {
        // update inkBar position

        // set panel has scroll arrow
        const navBox = navBoxRef.value;
        if (!navBox) return;
        scrollable.value = navBox.scrollWidth > navBox.clientWidth;
      });
    };
    const renderNav = () => {
      return children.value?.map((panel, index) => {
        const key = panel.key;
        // let { icon, title, closable, disabled } = panel.props; //for 3
        let { icon, title, closable, disabled } = panel.componentOptions.propsData;
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
                <span class={["k-tabs-tab-btn-prev", { "k-tabs-tab-btn-prev-disabled": prevBtnDisabled.value }]} onClick={() => scroll("left")}>
                  <Icon type={ChevronBack} />
                </span>
              ) : null}
              <div class="k-tabs-nav-wrap" ref={navBoxRef}>
                <div class="k-tabs-nav" style={scrollStyle} ref={navScrollRef}>
                  {!card && !sample ? <div class="k-tabs-ink-bar" ref={inkBarRef} /> : null}
                  <div class="k-tabs-nav-inner" ref={navRef}>
                    {renderNav()}
                  </div>
                </div>
              </div>
              {scrollable.value ? (
                <span class={["k-tabs-tab-btn-next", { "k-tabs-tab-btn-next-disabled": nextBtnDisabled.value }]} onClick={() => scroll("right")}>
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
