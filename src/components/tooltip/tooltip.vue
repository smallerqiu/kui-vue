<template>
  <div class="k-tooltip" @mouseenter="mouseHandle" @mouseleave="mouseHandle" v-winScroll="handleScroll">
    <div class="k-tooltip-rel" ref="rel" @click="relClick">
      <slot></slot>
    </div>
    <transition name="fade">
      <div class="k-tooltip-dom" v-if="visible" :style="styles" ref="dom" :k-placement="placement" v-transferDom :data-transfer="transfer">
        <div class="k-poptip-arrow"></div>
        <div :class="classes">
          <slot name="content">{{content}}</slot>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import transferDom from "../../directives/transferDom";
import emitter from "../../mixins/emitter";
import winScroll from "../../directives/winScroll";

export default {
  directives: { transferDom, winScroll },
  mixins: [emitter],
  name: "Tooltip",
  props: {
    transfer: { type: Boolean, default: true },
    breaked: { type: Boolean },
    trigger: { type: String, default: "hover" },
    width: [String, Number],
    content: [String, Number],
    placement: {
      validator(value) {
        return (
          [
            "top",
            "top-left",
            "top-right",
            "bottom",
            "bottom-left",
            "bottom-right",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-top",
            "right-bottom"
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
  watch: {
    visible(v) {
      if (v) {
        this.handleScroll()
      }
    }
  },
  methods: {
    handleScroll() {
      this.$nextTick(() => this.setPostion())
    },
    setPostion() {
      let pos = { left: 0, top: 0 };
      let rel = this.$refs.rel.children[0] || this.$refs.rel;
      // if (this.transfer) {
      pos = this.getElementPos(rel);
      // }
      let x = this.placement;
      let dom = this.$refs.dom;
      if(!dom) return;
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
      switch (x) {
        case "top":
          this.top = top - dom.offsetHeight - 10;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) / 2;
          break;
        case "top-left":
          this.top = top - dom.offsetHeight - 10;
          this.left = left;
          break;
        case "top-right":
          this.top = top - dom.offsetHeight - 10;
          this.left = left - (dom.offsetWidth - rel.offsetWidth);
          break;
        case "bottom":
          this.top = top + rel.offsetHeight + 10;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) / 2;
          break;
        case "bottom-right":
          this.top = top + rel.offsetHeight + 10;
          this.left = left - (dom.offsetWidth - rel.offsetWidth);
          break;
        case "bottom-left":
          this.top = top + rel.offsetHeight + 10;
          this.left = left;
          break;
        case "left":
          this.left = left - dom.offsetWidth - 10;
          this.top = top - (dom.offsetHeight - rel.offsetHeight) / 2;
          break;
        case "left-top":
          this.left = left - dom.offsetWidth - 10;
          this.top = top;
          break;
        case "left-bottom":
          this.left = left - dom.offsetWidth - 10;
          this.top = top - (dom.offsetHeight - rel.offsetHeight);
          break;
        case "right":
          this.left = left + rel.offsetWidth + 10;
          this.top = top - (dom.offsetHeight - rel.offsetHeight) / 2;
          break;
        case "right-top":
          this.left = left + rel.offsetWidth + 10;
          this.top = top;
          break;
        case "right-bottom":
          this.left = left + rel.offsetWidth + 10;
          this.top = top - (dom.offsetHeight - rel.offsetHeight);
          break;
      }
    },
    mouseHandle() {
      if (this.trigger == "hover") {
        this.visible = !this.visible;
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