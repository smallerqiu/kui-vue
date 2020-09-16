import Icon from '../icon'
export default {
  name: 'Tabs',
  props: {
    value: String,
    card: Boolean,
    sample: Boolean,
    animated: { type: Boolean, default: true }
  },
  data() {
    return {
      tabPanes: [],
      activeKey: this.value,
      currentIndex: -1,
      scrollable: false,
      navOffsetLeft: 0,
      prevBtnDisabed: false,
      nextBtnDisabed: false,
    }
  },
  watch: {
    value(value) {
      this.activeKey = value
      this.updateIndex()
    }
  },
  provide() {
    return {
      Tabs: this,
      collectTabPanes: (context, type) => {
        const panes = this.tabPanes
        type === 'delete' ? panes.splice(panes.indexOf(context), 1) : panes.push(context)
        this.resetNavPosition()
        this.updateNav()
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.resetNavPosition)
    this.updateIndex()
  },
  beforeDistory() {
    window.removeEventListener('resize', this.resetNavPosition)
  },
  methods: {
    closeTab(key, e) {
      this.$emit('remove', key)
      e.stopPropagation()
      // e.preventDefault();
    },
    resetActivePostion() {
      const target = this.$refs.nav.children[this.currentIndex]
      if (!target) return;
      // show active tab in client
      const pane = this.$refs.navscroll
      // let totalWidth = pane.offsetWidth
      let clientWidth = this.$refs.navbox.clientWidth
      let { navOffsetLeft } = this
      let { offsetLeft, offsetWidth } = target



      // min left 
      if (navOffsetLeft + offsetLeft < 0) {
        navOffsetLeft = -offsetLeft
      }
      //max right
      else if (clientWidth - navOffsetLeft < offsetLeft + offsetWidth) { //outside 

        // let marginRight = window.getComputedStyle(target).marginRight
        // marginRight = parseFloat(marginRight)

        navOffsetLeft -= offsetLeft + offsetWidth + navOffsetLeft - clientWidth + 2 //marginRight
      }
      this.navOffsetLeft = navOffsetLeft
      pane.style.transform = `translate3d(${navOffsetLeft}px,0,0)`
    },
    resetNavPosition() {
      // when one tab removed or append
      this.$nextTick(e => {
        const pane = this.$refs.navscroll
        if (!pane) return;
        let totalWidth = pane.offsetWidth
        let clientWidth = this.$refs.navbox.clientWidth
        let { navOffsetLeft } = this
        if (clientWidth + navOffsetLeft < clientWidth) {
          navOffsetLeft = clientWidth - totalWidth
        }
        if (navOffsetLeft > 0) navOffsetLeft = 0
        this.navOffsetLeft = navOffsetLeft


        this.nextBtnDisabed = navOffsetLeft == clientWidth - totalWidth
        this.prevBtnDisabed = navOffsetLeft == 0

        pane.style.transform = `translate3d(${navOffsetLeft}px,0,0)`


        this.resetActivePostion()

        this.updateNav()
      })

    },
    scroll(direction) {
      //control left or right

      const pane = this.$refs.navscroll
      let totalWidth = pane.offsetWidth
      let clientWidth = this.$refs.navbox.clientWidth
      let { navOffsetLeft } = this
      // console.log(totalWidth, clientWidth)
      if (direction == 'right') {
        const endWidth = totalWidth - clientWidth + navOffsetLeft
        if (endWidth > clientWidth) {
          navOffsetLeft -= clientWidth
        } else if (endWidth > 0) {
          navOffsetLeft -= endWidth
        }
      } else {
        if (navOffsetLeft < -clientWidth) {
          navOffsetLeft += clientWidth
        } else if (navOffsetLeft < 0) {
          navOffsetLeft = 0
        }
      }
      this.nextBtnDisabed = navOffsetLeft == clientWidth - totalWidth
      this.prevBtnDisabed = navOffsetLeft == 0

      this.navOffsetLeft = navOffsetLeft
      pane.style.transform = `translate3d(${navOffsetLeft}px,0,0)`
    },
    tabClick(pane, index) {
      if (!pane.disabled) {
        let key = pane.$vnode.key
        this.$emit('input', key)
        this.$emit('change', key)
        this.$emit('tab-click', key)
        this.activeKey = key
        this.currentIndex = index
      }
    },
    updateIndex() {
      this.$nextTick(e => {
        const { tabPanes } = this
        const currentTab = tabPanes.filter(tab => tab.$vnode.key == this.activeKey)[0] || {}
        this.currentIndex = tabPanes.indexOf(currentTab)
        setTimeout(e => {
          this.resetActivePostion()
          this.updateInkBarPosition()
        }, 100)
      })
    },
    updateInkBarPosition() {
      if (!this.card && !this.sample && this.animated) {
        const nav = this.$refs.nav.children[this.currentIndex]
        if (nav) {
          const inkbar = this.$refs.inkbar
          inkbar.style.width = `${nav.offsetWidth}px`
          inkbar.style.transform = `translate3d(${nav.offsetLeft}px, 0px, 0px)`
        }
      }
    },
    updateNav() {
      this.$nextTick(e => {
        // update inkbar position

        // set pane has scroll arrow
        const navbox = this.$refs.navbox
        if (!navbox) return;
        this.scrollable = navbox.scrollWidth > navbox.clientWidth
      })
    },
    renderNav() {
      return this.tabPanes.map((pane, index) => {
        const prop = {
          class: ['k-tabs-tab', { ['k-tabs-tab-active']: pane.$vnode.key == this.activeKey, ['k-tabs-tab-disabled']: pane.disabled }],
          on: {
            click: e => this.tabClick(pane, index)
          }
        }
        return <div {...prop}>
          {pane.icon ? <Icon type={pane.icon} /> : null}
          {pane.title}
          {pane.closable && this.card ? <Icon type="md-close" class="k-tabs-close" onClick={e => this.closeTab(pane.$vnode.key, e)} /> : null}
        </div>
      })
    },

  },
  render() {
    const { $slots, card, animated, sample, tabPanes } = this
    const classes = [
      "k-tabs",
      {
        ["k-tabs-animated"]: animated && !card && !sample,
        ["k-tabs-card"]: card && !sample,
        ["k-tabs-sample"]: sample && !card
      }
    ];

    let scrollStyle = {}, paneStyle = {};


    if (animated && !card && !sample) {
      paneStyle.marginLeft = `-${100 * this.currentIndex}%`
    }

    const navCls = ['k-tabs-nav-container', { ['k-tabs-nav-container-scroll']: this.scrollable }]
    return (
      <div class={classes} ref="root">
        <div class="k-tabs-bar">
          {$slots.extra ? <div class="k-tabs-extra" ref="extra">{$slots.extra}</div> : null}
          <div class={navCls}>
            {this.scrollable ? [<span class={['k-tabs-tab-btn-prev', { 'k-tabs-tab-btn-prev-disabed': this.prevBtnDisabed }]} onClick={e => this.scroll('left')}><Icon type="ios-arrow-back" /></span>,
            <span class={['k-tabs-tab-btn-next', { 'k-tabs-tab-btn-next-disabed': this.nextBtnDisabed }]} onClick={e => this.scroll('right')}><Icon type="ios-arrow-forward" /></span>] : null}
            <div class="k-tabs-nav-wrap" ref="navbox">
              <div class="k-tabs-nav" style={scrollStyle} ref="navscroll">
                {!card && animated && !sample ? <div class="k-tabs-ink-bar" ref="inkbar" /> : null}
                <div class="k-tabs-nav-inner" ref="nav">{this.renderNav()}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="k-tabs-content" style={paneStyle} ref="panes">
          {$slots.default}
        </div>
      </div>
    )
  }
}