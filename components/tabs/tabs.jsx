import Icon from "../icon";
import { getChildren } from "../utils/element";
import { Close, ChevronBack, ChevronForward } from "kui-icons";
import { withInstall } from "../utils/vue";
import cloneVNode from "../utils/clone";

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
      defaultActiveKey: this.value,
      currentIndex: -1,
      scrollable: false,
      navOffsetLeft: 0,
      prevBtnDisabled: false,
      nextBtnDisabled: false,
    };
  },
  provide() {
    return {
      TabActiveKey: this.defaultActiveKey,
      ResetNavPosition: this.resetNavPosition
    };
  },
  watch: {
    value() {
      this.defaultActiveKey = this.value;
      this.updateIndex();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.updateIndex();
    });
    window.addEventListener("resize", this.resetNavPosition);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resetNavPosition);
  },
  methods: {
    closeTab(key, e) {
      this.$emit("remove", key);
      e.stopPropagation();
    },
    resetActivePosition() {
      const target = this.$refs.navRef?.children[this.currentIndex];
      if (!target) return;

      const panel = this.$refs.navScrollRef;
      const clientWidth = this.$refs.navBoxRef.clientWidth;
      let navLeft = this.navOffsetLeft;
      const { offsetLeft, offsetWidth } = target;

      if (navLeft + offsetLeft < 0) {
        navLeft = -offsetLeft;
      } else if (clientWidth - navLeft < offsetLeft + offsetWidth) {
        navLeft -= offsetLeft + offsetWidth + navLeft - clientWidth + 2;
      }
      this.navOffsetLeft = navLeft;
      panel.style.transform = `translate3d(${navLeft}px,0,0)`;
    },
    resetNavPosition() {
      this.$nextTick(() => {
        const panel = this.$refs.navScrollRef;
        if (!panel) return;

        const totalWidth = panel.offsetWidth;
        const clientWidth = this.$refs.navBoxRef.clientWidth;
        let navLeft = this.navOffsetLeft;

        if (clientWidth + navLeft < clientWidth) {
          navLeft = clientWidth - totalWidth;
        }
        if (navLeft > 0) navLeft = 0;

        this.navOffsetLeft = navLeft;
        this.nextBtnDisabled = navLeft === clientWidth - totalWidth;
        this.prevBtnDisabled = navLeft === 0;

        panel.style.transform = `translate3d(${navLeft}px,0,0)`;
        this.resetActivePosition();
        this.updateInkBarPosition();
        this.updateNav();
      });
    },
    scroll(direction) {
      const panel = this.$refs.navScrollRef;
      const totalWidth = panel.offsetWidth;
      const clientWidth = this.$refs.navBoxRef.clientWidth;
      let navLeft = this.navOffsetLeft;

      if (direction === "right") {
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

      this.nextBtnDisabled = navLeft === clientWidth - totalWidth;
      this.prevBtnDisabled = navLeft === 0;

      this.navOffsetLeft = navLeft;
      panel.style.transform = `translate3d(${navLeft}px,0,0)`;
    },
    tabClick({ disabled, key }, index) {
      if (!disabled) {
        this.$emit("update", key);
        this.$emit("tab-click", key);
        this.defaultActiveKey = key;
        this.currentIndex = index;
        this.$emit("change", key);
        this.updateIndex();
      }
    },
    updateIndex() {
      this.$nextTick(() => {
        const children = getChildren(this.$slots.default);
        this.currentIndex = children.map((p) => p.key).indexOf(this.defaultActiveKey);
        this.resetActivePosition();
        this.updateInkBarPosition();
      });
    },
    updateInkBarPosition() {
      if (!this.card && !this.sample && this.animated) {
        const nav = this.$refs.navRef?.children[this.currentIndex];
        if (nav) {
          const inkBar = this.$refs.inkBarRef;
          const offsetLeft = nav.offsetLeft;
          inkBar.style.width = `${nav.offsetWidth}px`;
          inkBar.style.transform = `translate3d(${offsetLeft}px,0,0)`;
        }
      }
    },
    updateNav() {
      this.$nextTick(() => {
        const navBox = this.$refs.navBoxRef;
        if (!navBox) return;
        this.scrollable = navBox.scrollWidth > navBox.clientWidth;
      });
    },
    renderNav() {
      const children = getChildren(this.$slots.default);
      return children.map((panel, index) => {
        const key = panel.key;
        let { icon, title, closable, disabled } = panel.componentOptions.propsData || {};
        disabled = disabled !== undefined && disabled !== false;
        closable = closable !== undefined;

        const prop = {
          class: [
            "k-tabs-tab",
            {
              "k-tabs-tab-active": key === this.defaultActiveKey,
              "k-tabs-tab-disabled": disabled,
            },
          ],
          on: { click: () => this.tabClick({ disabled, key }, index) },
        };

        return (
          <div {...prop}>
            {icon ? <Icon type={icon} /> : null}
            {title}
            {closable && this.card ? (
              <Icon
                type={Close}
                class="k-tabs-close"
                strokeWidth={45}
                onClick={(e) => this.closeTab(key, e)}
              />
            ) : null}
          </div>
        );
      });
    },
  },
  render() {
    const { card, animated, centered, sample } = this;
    const children = getChildren(this.$slots.default);
    const classes = [
      "k-tabs",
      {
        "k-tabs-animated": animated && !card && !sample,
        "k-tabs-card": card && !sample,
        "k-tabs-sample": sample && !card,
        "k-tabs-centered": centered,
      },
    ];

    const paneStyle = {};
    if (animated && !card && !sample) {
      paneStyle.marginLeft = `-${100 * this.currentIndex}%`;
    }

    const navCls = [
      "k-tabs-nav-container",
      { "k-tabs-nav-container-scroll": this.scrollable },
    ];

    const childrenNode = children.map((item) => {
      return cloneVNode(item, {
        props: {
          activeKey: this.defaultActiveKey,
        },
        on: {
          resetNavPosition: this.resetNavPosition,
        },
      });
    });

    return (
      <div class={classes}>
        <div class="k-tabs-bar">
          <div class={navCls}>
            {this.scrollable ? (
              <span
                class={[
                  "k-tabs-tab-btn-prev",
                  { "k-tabs-tab-btn-prev-disabled": this.prevBtnDisabled },
                ]}
                onClick={() => this.scroll("left")}
              >
                <Icon type={ChevronBack} />
              </span>
            ) : null}

            <div class="k-tabs-nav-wrap" ref="navBoxRef">
              <div class="k-tabs-nav" ref="navScrollRef">
                {!card && animated && !sample ? (
                  <div class="k-tabs-ink-bar" ref="inkBarRef" />
                ) : null}
                <div class="k-tabs-nav-inner" ref="navRef">
                  {this.renderNav()}
                </div>
              </div>
            </div>

            {this.scrollable ? (
              <span
                class={[
                  "k-tabs-tab-btn-next",
                  { "k-tabs-tab-btn-next-disabled": this.nextBtnDisabled },
                ]}
                onClick={() => this.scroll("right")}
              >
                <Icon type={ChevronForward} />
              </span>
            ) : null}
          </div>

          {this.$slots.extra ? (
            <div class="k-tabs-extra">{this.$slots.extra}</div>
          ) : null}
        </div>

        <div class="k-tabs-content" style={paneStyle}>
          {childrenNode}
        </div>
      </div>
    );
  },
};

export default withInstall(Tabs);