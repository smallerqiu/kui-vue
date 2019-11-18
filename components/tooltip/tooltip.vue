<template>
  <div :class="['k-tooltip',{'k-tooltip-dark':dark}]" @mouseenter="mouseEnter" @mouseleave="mouseLeave" v-winScroll="handleScroll">
    <div class="k-tooltip-rel" ref="rel" @click="relClick">
      <slot></slot>
    </div>
    <transition name="fade">
      <div class="k-tooltip-dom" v-if="visible" :style="styles" ref="dom" @mouseleave="mouseLeave2" :k-placement="placement" v-transferDom :data-transfer="transfer">
        <div class="k-poptip-arrow"></div>
        <div :class="classes">
          <slot name="content">{{content}}</slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script> 
import transferDom from "../_tool/transferDom";
import emitter from "@/mixins/emitter";
import winScroll from "../_tool/resize";

export default {
  directives: { transferDom, winScroll },
  mixins: [emitter],
  name: "Tooltip",
  props: {
    transfer: { type: Boolean, default: false },
    breaked: { type: Boolean },
    trigger: { type: String, default: "hover" },
    width: [String, Number],
    content: [String, Number],
    dark: Boolean,
    placement: {
      validator(value) {
        return (
          [
            "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right", "left", "left-bottom",
            "left-top", "right", "right-top", "right-bottom"
          ].indexOf(value) >= 0
        );
      },
      default: "top"
    },
    disabled: Boolean
  },
  data() {
    return {
      visible: false,
      left: 0,
      top: 0
    };
  },
  computed: {
    classes() {
      return ['k-tooltip-content', {
        ['k-tooltip-content-breaked']: this.breaked
      }]
    },
    styles() {
      let style = {};
      style.width = `${this.width}px`
      style.top = `${this.top}px`;
      style.left = `${this.left}px`;
      return style;
    }
  },
  methods: {
    handleScroll() {
      this.$nextTick(() => this.setPosition())
    },
    setPosition() {
      if (this.$isServer) return;
      let pos = { left: 0, top: 0 };
      let rel = this.$refs.rel.children[0] || this.$refs.rel;
      if (this.transfer) {
        pos = this.getElementPos(rel);
      }
      let x = this.placement;
      let dom = this.$refs.dom;
      if (!dom) return;
      // console.log(this.$children)
      //取子元素的margin,计算的时候要进行运算
      // let child = this.$children[0] && this.$children[0].$el || rel
      // let mr = 0//document.defaultView.getComputedStyle(rel, null)['margin-right'].replace('px', '')
      // let mb = 0//document.defaultView.getComputedStyle(rel, null)['margin-bottom'].replace('px', '')
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
      let top = pos.top + scrollTop;
      let left = pos.left + scrollLeft;
      // console.log(mr, mb)
      let p = 20;
      switch (x) {
        case "top":
          this.top = top - dom.offsetHeight + 1;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) / 2;
          break;
        case "top-left":
          this.top = top - dom.offsetHeight + 1;
          this.left = left - 10;
          break;
        case "top-right":
          this.top = top - dom.offsetHeight + 1;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) + 10;
          break;
        case "bottom":
          this.top = top + rel.offsetHeight;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) / 2;
          break;
        case "bottom-right":
          this.top = top + rel.offsetHeight;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) + 10;
          break;
        case "bottom-left":
          this.top = top + rel.offsetHeight;
          this.left = left - 10;
          break;
        case "left":
          this.left = left - dom.offsetWidth;
          this.top = top - (dom.offsetHeight - rel.offsetHeight) / 2;
          break;
        case "left-top":
          this.left = left - dom.offsetWidth;
          this.top = top - 10;
          break;
        case "left-bottom":
          this.left = left - dom.offsetWidth;
          this.top = top - (dom.offsetHeight - rel.offsetHeight) + 10;
          break;
        case "right":
          this.left = left + rel.offsetWidth;
          this.top = top - (dom.offsetHeight - rel.offsetHeight) / 2;
          break;
        case "right-top":
          this.left = left + rel.offsetWidth
          this.top = top - 10;
          break;
        case "right-bottom":
          this.left = left + rel.offsetWidth;
          this.top = top - (dom.offsetHeight - rel.offsetHeight) + 10;
          break;
      }
    },
    mouseEnter() {
      if (this.trigger == "hover") this.visible = true
      this.handleScroll();
    },
    mouseLeave2() {
      if (this.transfer) {
        this.visible = false
      }
    },
    mouseLeave(e) {
      if (this.trigger == "hover") {
        if (this.transfer) {
          let pos = this.getElementPos(this.$refs.dom)
          let x = e.clientX, y = e.clientY;
          let show = (x >= pos.left && x <= pos.right && y >= pos.top && y <= pos.bottom)
          this.visible = !!show
        } else
          this.visible = false
      }
    },
    relClick() {
      if (this.trigger == "click") {
        this.visible = !this.visible;
      }
    }
  }
};
</script>