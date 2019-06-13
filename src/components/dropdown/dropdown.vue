<template>
  <div class="k-dropdown" v-winScroll="handleScroll" @mouseenter="menter" @mouseleave="mleave">
    <div class="k-dropdown-rel" @click="click" ref="rel">
      <slot></slot>
    </div>
    <transition name="dropdown">
      <div ref="dom" v-show="show" class="k-dropdown-dom" :style="dropdownStyles" v-transferDom :data-transfer="transfer" @mouseleave="mleave2">
        <slot name="list"></slot>
      </div>
    </transition>
  </div>
</template>
<script>
import Vue from 'vue';
const SSR = Vue.prototype.$isServer
import emitter from "@/mixins/emitter";
import transferDom from "@/directives/transferDom";
import winScroll from "@/directives/winScroll";
export default {
  name: 'Dropdown',
  mixins: [emitter],
  directives: { transferDom, winScroll },
  props: {
    trigger: { type: String, default: 'hover' },
    visible: Boolean,
    // placement: { type: String, default: 'left' },
    transfer: { type: Boolean, default: false }
  },
  data() {
    return {
      show: this.visible,
      left: 0,
      top: 0,
      fadeInBottom: false,
    }
  },
  mounted() {
    this.$on("on-close", this.close);
  },
  computed: {
    dropdownStyles() {
      let style = {};
      style.left = `${this.left}px`;
      style.top = `${this.top}px`;
      if (this.fadeInBottom) {
        style["transform-origin"] = "center bottom 0px";
      }
      return style;
    }
  },
  watch: {
    visible(v) {
      this.show = v
      if (v) {
        this.$nextTick(() => this.setPosition())
      }
    }
  },
  methods: {
    click() {
      if (this.trigger == 'click') {
        this.show = true
        this.$nextTick(() => this.setPosition())
      }
    },
    menter() {
      if (this.trigger == 'hover') {
        this.show = true
        this.$nextTick(() => this.setPosition())
      }
    },
    mleave2() {
      if (this.transfer && this.trigger != 'custom') {
        this.show = false
      }
    },
    mleave(e) {
      if (this.trigger != 'custom') {
        if (!this.transfer){
          this.show = false
        }
        else {
          let pos = this.getElementPos(this.$refs.dom)
          let x = e.clientX, y = e.clientY;
          let show = (x >= pos.left && x <= pos.right && y >= pos.top && y <= pos.bottom)
          this.show = !!show
        }
      }
    },
    handleScroll() {
      this.$nextTick(() => this.setPosition());
    },
    setPosition() {
      if (SSR) return;
      let m = 5;
      let rel = this.$refs.rel.children[0] || this.$refs.rel;
      let dom = this.$refs.dom;
      if (!dom) return;
      let relPos = this.getElementPos(rel);
      let clientH = window.innerHeight;
      let clientW = window.innerWidth;

      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;

      let domH = dom.offsetHeight;
      let domW = dom.offsetWidth;
      let relH = rel.offsetHeight;
      let relW = rel.offsetWidth;
      if (this.transfer) this.left = relPos.left + scrollLeft;
      //new
      if (clientH - relPos.top - relH - m < domH) {
        //空出来的高度不足以放下dom
        this.fadeInBottom = true;
        this.left = this.transfer ? relPos.left - 10 : -10;
        this.top = this.transfer ? relPos.top - m - domH + scrollTop+10 : -(domH + m - 10);
      } else {
        this.fadeInBottom = false;
        this.left = this.transfer ? relPos.left - 10 : -10;
        this.top = (this.transfer ? relPos.top + relH + m + scrollTop : relH + m) - 10;
      }
      if (clientW - relPos.left - domW - m < domW) {
        this.left = this.transfer ? (relPos.left - domW + relW + 10) : (- (domW - relW - 10))
      }
    },
    close() {
      this.show = false;
    }
  },
}
</script>
