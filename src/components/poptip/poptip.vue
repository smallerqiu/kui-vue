<template>
  <div class="k-poptip" @mouseenter="mouseHandle" @mouseleave="mouseHandle" v-docClick="close" v-resize="handleScroll">
    <div class="k-poptip-rel" ref="rel" @click="relClick">
      <slot></slot>
    </div>
    <transition name="fade">
      <div :class="classes" v-show="visible" :style="styles" ref="dom" :k-placement="placement" v-transferDom :data-transfer="transfer">
        <div class="k-poptip-arrow"></div>
        <div class="k-poptip-title" v-if="title">
          <i class="k-ion-help-circled" v-if="confirm"></i>
          <span>{{title}}</span>
        </div>
        <div class="k-poptip-content">
          <slot name="content">{{content}}</slot>
        </div>
        <div class="k-poptip-footer" v-if="confirm">
          <k-button type="link" mini @click.stop="cancel">{{cancelText}}</k-button>
          <k-button type="primary" mini @click.stop="ok">{{okText}}</k-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import Button from "../button";
import docClick from "../../directives/docClick";
import transferDom from "../../directives/transferDom";
import emitter from '../../mixins/emitter'
import resize from '../../directives/winScroll'
export default {
  compontes: { "k-button": Button },
  directives: { docClick, transferDom, resize },
  mixins: [emitter],
  name: "Poptip",
  props: {
    trigger: { type: String, default: "click" },
    confirm: Boolean,
    transfer: { type: Boolean, default: true },
    title: String,
    content: String,
    width: [String, Number],
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
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
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
      return [
        "k-poptip-dom",
        {
          ["k-poptip-confirm"]: this.confirm
        }
      ];
    },
    styles() {
      let style = {};
      this.width && (style.width = `${this.width}px`);
      style.top = `${this.top}px`;
      style.left = `${this.left}px`;
      return style;
    }
  },
  watch: {
    visible(v) {
      if (v) {
        this.$nextTick(() => this.setPosition())
      }
    }
  },
  methods: {
    handleScroll() {
      this.$nextTick(() => this.setPosition());
    },
    setPosition() {
      let pos = { left: 0, top: 0 };
      let rel = this.$children[0] && this.$children[0].$el || this.$refs.rel;
      if (this.transfer) {
        pos = this.getElementPos(rel);
      }

      let x = this.placement;
      // let rel = this.$refs.rel;
      let dom = this.$refs.dom;
      //取子元素的margin,计算的时候要进行运算
      // let child = this.$children[0] && this.$children[0].$el || rel
      // let mr = 0//document.defaultView.getComputedStyle(child, null)['margin-right'].replace('px', '')
      // let mb = 0//document.defaultView.getComputedStyle(child, null)['margin-bottom'].replace('px', '')
      let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      let scrollLeft = document.body.scrollLeft || document.documentElement.scrollLeft;
      let top = pos.top + scrollTop
      let left = pos.left +scrollLeft
      // console.log(mr, mb)
      switch (x) {
        case "top":
          this.top = top - dom.offsetHeight - 10 ;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) / 2;
          break;
        case "top-left":
          this.top = top - dom.offsetHeight - 10 ;
          this.left = left;
          break;
        case "top-right":
          this.top = top - dom.offsetHeight - 10 ;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) ;
          break;
        case "bottom":
          this.top = top + rel.offsetHeight + 10  ;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) / 2;
          break;
        case "bottom-right":
          this.top = top + rel.offsetHeight + 10  ;
          this.left = left - (dom.offsetWidth - rel.offsetWidth) ;
          break;
        case "bottom-left":
          this.top = top + rel.offsetHeight + 10  ;
          this.left = left;
          break;
        case "left":
          this.left = left - dom.offsetWidth - 10;
          this.top = top - (dom.offsetHeight - rel.offsetHeight) / 2 ;
          break;
        case "left-top":
          this.left = left - dom.offsetWidth - 10;
          this.top = top ;
          break;
        case "left-bottom":
          this.left = left - dom.offsetWidth - 10;
          this.top = top - (dom.offsetHeight - rel.offsetHeight)  ;
          break;
        case "right":
          this.left = left + rel.offsetWidth + 10 ;
          this.top = top - (dom.offsetHeight - rel.offsetHeight) / 2 ;
          break;
        case "right-top":
          this.left = left + rel.offsetWidth + 10 ;
          this.top = top ;
          break;
        case "right-bottom":
          this.left = left + rel.offsetWidth + 10 ;
          this.top = top - (dom.offsetHeight - rel.offsetHeight)  ;
          break;
      }
    },
    close(e) {
      if (this.transfer) {
        this.visible = this.$refs.dom.contains(e.target);
      } else {
        this.visible = false
      }
    },
    ok() {
      this.visible = false;
      this.$emit("ok");
    },
    cancel() {
      this.visible = false;
      this.$emit("cancel");
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