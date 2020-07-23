import Button from "../button";
import Icon from "../icon";
import transfer from "../_tool/transfer";
import resize from "../_tool/resize";
import outsideclick from "../_tool/outsiteclick";
import { getElementPos, getChild, cloneVNode, isVnode } from "../_tool/utils";
import Vue from 'vue'

export default {
  directives: { transfer, resize, outsideclick },
  name: 'popBase',
  props: {
    preCls: String,
    trigger: { type: String, default: "hover" },
    confirm: Boolean,
    dark: { type: Boolean, default: false },
    transfer: { type: Boolean, default: true },
    title: String,
    width: [Number, String],
    placement: {
      validator(value) {
        return (
          ["top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom", "left-top", "right", "right-top", "right-bottom"].indexOf(value) >= 0
        );
      },
      default: "top"
    },
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
  },
  data() {
    return {
      showPop: false,
      left: 0,
      top: 0,
      showInit: false,
      timer: null
    };
  },
  methods: {
    setShowPop() {
      this.showPop = !this.showPop;
      this.$nextTick(e => this.setPosition())
    },
    setPosition() {
      // let rel = this.$refs.rel;
      let dom = this.$refs.dom;
      // let rel = this.$refs.rel.children[0] || this.$refs.rel
      let rel = this.$el
      if (!dom) return;
      let top = 0, left = 0;

      if (this.transfer) {
        let pos = getElementPos(this.$el)
        top = pos.top
        left = pos.left
      }
      let p = this.placement;
      if (p.slice(0, 3) == 'top') { top -= dom.offsetHeight; }
      if (p.slice(0, 6) == 'bottom') { top += rel.offsetHeight; }
      if (p == 'left' || p == 'right') { top -= (dom.offsetHeight - rel.offsetHeight) / 2 }
      if (p.slice(-7) == '-bottom') { top -= (dom.offsetHeight - rel.offsetHeight); }

      if (p.slice(0, 4) == 'left') { left -= dom.offsetWidth; }
      if (p.slice(0, 5) == 'right') { left += rel.offsetWidth; }
      if (p == 'top' || p == 'bottom') { left -= (dom.offsetWidth - rel.offsetWidth) / 2; }
      if (p.slice(-6) == '-right') { left -= (dom.offsetWidth - rel.offsetWidth); }

      this.top = top
      this.left = left
    },
    hidedrop(e) {
      if (this.transfer) {
        // if (this.$refs.dom && !this.$refs.dom.contains(e.target) && !this.$refs.rel.contains(e.target)) {
        if (this.$refs.dom && !this.$refs.dom.contains(e.target) && !this.$el.contains(e.target)) {
          this.showPop = false
        }
      } else {
        this.showPop = false
      }
    },
    ok() {
      this.showPop = false;
      this.$emit("ok");
    },
    cancel() {
      this.showPop = false;
      this.$emit("cancel");
    },
    setPopShow() {
      if (!this.showInit) {
        this.showInit = true
        this.$nextTick(e => {
          this.showPop = !this.showPop;
          this.$nextTick(e => this.setPosition())
        })
      } else {
        this.showPop = !this.showPop;
        this.$nextTick(e => this.setPosition())
      }
    },
    domMouseLeave(e) {
      // if (!this.$refs.rel.contains(e.target) && !this.confirm && this.trigger == 'hover') {
      if (!this.$el.contains(e.target) && !this.confirm && this.trigger == 'hover') {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.showPop = false
        }, 200);
      }
    },
    domMouseEnter(e) {
      if (this.$refs.dom.contains(e.target) && !this.confirm && this.trigger == 'hover') {
        clearTimeout(this.timer)
      }
    },
    mouseEnter() {
      clearTimeout(this.timer)
      if (this.trigger == "hover" && !this.confirm && !this.showPop) {
        this.setPopShow()
      }
    },
    mouseLeave(e) {
      if (this.trigger == 'hover' && !this.confirm && this.showPop) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.showPop = false
        }, 200);
      }
    },
    relClick() {
      if (this.trigger == "click" || this.confirm) {
        this.setPopShow()
      }
    },
    getOrigin() {
      let origins = {
        top: 'center bottom', 'top-left': 'left bottom', 'top-right': 'right bottom',
        left: 'right center', 'left-top': 'right top', 'left-bottom': 'right bottom',
        right: 'left center', 'right-top': 'left top', 'right-bottom': 'left bottom',
        bottom: 'center top', 'bottom-left': 'left top', 'bottom-right': 'right top'
      }
      return origins[this.placement]
    },
    renderPopup() {
      let { placement, title, preCls, $slots } = this
      let footerNode, titleNode, contentNode, cnode = [], drop = null, inner = [];
      title = title || $slots.title

      if (this.confirm) {
        let fnode = []
        fnode.push(<Button mini onClick={this.cancel}>{this.cancelText}</Button>)
        fnode.push(<Button type="primary" mini onClick={this.ok}>{this.okText}</Button>)
        footerNode = <div class={`k-${preCls}-footer`}>{fnode}</div>
        cnode.push(<Icon type="ios-help-circle" />, <div class={`k-${preCls}-title`}>{title}</div>)
      } else {
        titleNode = title ? <div class={`k-${preCls}-title`}>{title}</div> : ''
        $slots.content && cnode.push($slots.content)
      }
      // cnode.push(this.$slots.content)
      contentNode = cnode.length ? <div class={`k-${preCls}-inner-content`}>{cnode}</div> : null
      inner.push(titleNode, contentNode, footerNode)
      if (this.showInit) {
        const dropStyle = {
          left: `${this.left}px`,
          top: `${this.top}px`,
          width: `${this.width}px`,
          transformOrigin: this.getOrigin()
        }
        let dropClass = [`k-${preCls}-content`,
        {
          // [`k-${preCls}-confirm`]: confirm,
          // ["k-${preCls}-dark"]: this.dark
        }
        ];
        const props = {
          class: dropClass,
          style: dropStyle,
          ref: 'dom',
          attrs: {
            'k-placement': placement
          },
          on: {
            mouseenter: e => this.domMouseEnter(e),
            mouseleave: e => this.domMouseLeave(e)
          }
        }
        drop = (
          <transition name={`k-${preCls}-fade`}>
            <div {...props} v-show={this.showPop} v-transfer={this.transfer} v-resize={this.setPosition} v-outsideclick={this.hidedrop}>
              <div class={`k-${preCls}-arrow`}></div>
              <div class={`k-${preCls}-inner`}>{inner}</div>
            </div>
          </transition>
        )
      }
      return drop
    },
  },

  render() {
    let { $slots } = this

    let child = ($slots.default || []).filter(c => c.tag || c.text.trim() !== '');
    child = child.length === 1 ? child[0] : child;
    if (!child) {
      return null;
    };
    child = isVnode(child) ? child : <span>{child}</span>;
    let popup = this.renderPopup()


    const props = {
      children: popup,
      on: {
        'mouseenter': e => {
          this.mouseEnter()
        },
        'mouseleave': e => {
          this.mouseLeave()
        },
        'click': e => {
          this.relClick()
        }
      }
    }
    return cloneVNode(child, props)
    // return (
    //   <div class={`k-${preCls}`} onMouseenter={this.mouseEnter} onMouseleave={this.mouseLeave} >
    //     <div class={`k-${preCls}-rel`} onClick={this.relClick} ref="rel">
    //       {$slots.default}
    //     </div>
    //     {drop}
    //   </div>
    // )
  }
};