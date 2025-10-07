import Icon from "../icon";
import { getChild } from "../utils/element";
import { Close, ChevronBack, ChevronForward } from "kui-icons";
import { withInstall } from '../utils/vue'
const Tabs = {
  name: "Tabs",
  props: {
    value: String,
    card: Boolean,
    sample: Boolean,
    centered: Boolean,
    animated: { type: Boolean, default: true },
  },
  data() {
    return {
      activeKey: this.value,
      currentIndex: -1,
      scrollable: false,
      navOffsetLeft: 0,
      prevBtnDisabled: false,
      nextBtnDisabled: false,
    };
  },
  watch: {
    value(value) {
      this.activeKey = value;
      this.updateIndex();
    },
  },
  provide() {
    return {
      Tabs: this,
    };
  },
  mounted() {
    typeof window !== "undefined" && window.addEventListener("resize", this.resetNavPosition);
    this.$nextTick(() => {
      this.updateIndex();
    });
  },
  beforeDestroy() {
    typeof window !== "undefined" && window.removeEventListener("resize", this.resetNavPosition);
  },
  methods: {
    closeTab(key, e) {
      this.$emit("remove", key);
      e.stopPropagation();
      // e.preventDefault();
    },
    resetActivePosition() {
      const target = this.$refs.nav.children[this.currentIndex];
      if (!target) return;
      // show active tab in client
      const pane = this.$refs.navScroll;
      // let totalWidth = pane.offsetWidth
      let clientWidth = this.$refs.navBox.clientWidth;
      let { navOffsetLeft } = this;
      let { offsetLeft, offsetWidth } = target;

      // min left
      if (navOffsetLeft + offsetLeft < 0) {
        navOffsetLeft = -offsetLeft;
      }
      //max right
      else if (clientWidth - navOffsetLeft < offsetLeft + offsetWidth) {
        //outside

        // let marginRight = window.getComputedStyle(target).marginRight
        // marginRight = parseFloat(marginRight)

        navOffsetLeft -= offsetLeft + offsetWidth + navOffsetLeft - clientWidth + 2; //marginRight
      }
      this.navOffsetLeft = navOffsetLeft;
      pane.style.transform = `translate3d(${navOffsetLeft}px,0,0)`;
    },
    resetNavPosition() {
      // when one tab removed or append
      this.$nextTick(() => {
        const pane = this.$refs.navScroll;
        if (!pane) return;
        let totalWidth = pane.offsetWidth;
        let clientWidth = this.$refs.navBox.clientWidth;
        let { navOffsetLeft } = this;
        if (clientWidth + navOffsetLeft < clientWidth) {
          navOffsetLeft = clientWidth - totalWidth;
        }
        if (navOffsetLeft > 0) navOffsetLeft = 0;
        this.navOffsetLeft = navOffsetLeft;

        this.nextBtnDisabled = navOffsetLeft == clientWidth - totalWidth;
        this.prevBtnDisabled = navOffsetLeft == 0;

        pane.style.transform = `translate3d(${navOffsetLeft}px,0,0)`;

        this.resetActivePosition();
        this.updateInkBarPosition();

        this.updateNav();
      });
    },
    scroll(direction) {
      //control left or right

      const pane = this.$refs.navScroll;
      let totalWidth = pane.offsetWidth;
      let clientWidth = this.$refs.navBox.clientWidth;
      let { navOffsetLeft } = this;
      // console.log(totalWidth, clientWidth)
      if (direction == "right") {
        const endWidth = totalWidth - clientWidth + navOffsetLeft;
        if (endWidth > clientWidth) {
          navOffsetLeft -= clientWidth;
        } else if (endWidth > 0) {
          navOffsetLeft -= endWidth;
        }
      } else {
        if (navOffsetLeft < -clientWidth) {
          navOffsetLeft += clientWidth;
        } else if (navOffsetLeft < 0) {
          navOffsetLeft = 0;
        }
      }
      this.nextBtnDisabled = navOffsetLeft == clientWidth - totalWidth;
      this.prevBtnDisabled = navOffsetLeft == 0;

      this.navOffsetLeft = navOffsetLeft;
      pane.style.transform = `translate3d(${navOffsetLeft}px,0,0)`;
    },
    tabClick({ disabled, key }, index) {
      if (!disabled) {
        this.$emit("input", key);
        this.$emit("change", key);
        this.$emit("tab-click", key);
        this.activeKey = key;
        this.currentIndex = index;
      }
    },
    updateIndex() {
      this.$nextTick(() => {
        const children = getChild(this.$slots.default);
        this.currentIndex = children.map((p) => p.key).indexOf(this.activeKey);
        this.resetActivePosition();
        this.updateInkBarPosition();
      });
    },
    updateInkBarPosition() {
      if (!this.card && !this.sample && this.animated) {
        const nav = this.$refs.nav.children[this.currentIndex];
        if (nav) {
          const inkBar = this.$refs.inkBar;
          inkBar.style.width = `${nav.offsetWidth}px`;
          inkBar.style.transform = `translate3d(${nav.offsetLeft}px, 0px, 0px)`;
        }
      }
    },
    updateNav() {
      this.$nextTick(() => {
        // update inkBar position

        // set pane has scroll arrow
        const navBox = this.$refs.navBox;
        if (!navBox) return;
        this.scrollable = navBox.scrollWidth > navBox.clientWidth;
      });
    },
    renderNav() {
      const children = getChild(this.$slots.default);

      return children.map((pane, index) => {
        const key = pane.key;
        let { icon, title, closable, disabled } = pane.componentOptions.propsData;
        disabled = disabled !== undefined && disabled != false;
        closable = closable !== undefined;
        const prop = {
          class: ["k-tabs-tab", { ["k-tabs-tab-active"]: key == this.activeKey, ["k-tabs-tab-disabled"]: disabled }],
          on: {
            click: () => this.tabClick({ disabled, key }, index),
          },
        };
        return (
          <div {...prop}>
            {icon ? <Icon type={icon} /> : null}
            {title}
            {closable && this.card ? <Icon type={Close} class="k-tabs-close" strokeWidth={45} onClick={(e) => this.closeTab(key, e)} /> : null}
          </div>
        );
      });
    },
  },
  render() {
    const { $slots, card, animated, centered, sample, scrollable } = this;
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
      paneStyle.marginLeft = `-${100 * this.currentIndex}%`;
    }

    const navCls = ["k-tabs-nav-container", { ["k-tabs-nav-container-scroll"]: scrollable }];
    return (
      <div class={classes}>
        <div class="k-tabs-bar">
          <div class={navCls}>
            {scrollable ? (
              <span class={["k-tabs-tab-btn-prev", { "k-tabs-tab-btn-prev-disabled": this.prevBtnDisabled }]} onClick={() => this.scroll("left")}>
                <Icon type={ChevronBack} />
              </span>
            ) : null}
            <div class="k-tabs-nav-wrap" ref="navBox">
              <div class="k-tabs-nav" style={scrollStyle} ref="navScroll">
                {!card && animated && !sample ? <div class="k-tabs-ink-bar" ref="inkBar" /> : null}
                <div class="k-tabs-nav-inner" ref="nav">
                  {this.renderNav()}
                </div>
              </div>
            </div>
            {scrollable ? (
              <span class={["k-tabs-tab-btn-next", { "k-tabs-tab-btn-next-disabled": this.nextBtnDisabled }]} onClick={() => this.scroll("right")}>
                <Icon type={ChevronForward} />
              </span>
            ) : null}
          </div>
          {$slots.extra ? (
            <div class="k-tabs-extra" ref="extra">
              {$slots.extra}
            </div>
          ) : null}
        </div>
        <div class="k-tabs-content" style={paneStyle}>
          {$slots.default}
        </div>
      </div>
    );
  },
};

export default withInstall(Tabs);