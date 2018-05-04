<template>
  <div class="k-tooltip" @mouseenter="mouseHandle" @mouseleave="mouseHandle">
    <div class="k-tooltip-rel" ref="rel" @click="relClick">
      <slot></slot>
    </div>
    <transition name="fade">
      <div class="k-tooltip-dom" v-show="visible" :style="styles" ref="dom" :k-placement="placement" v-transferDom :data-transfer="transfer">
        <div class="k-poptip-arrow"></div>
        <div>
          <slot name="content" v-if="!content"></slot>
          {{content}}
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import transferDom from "../../directives/transferDom";
import emitter from '../../mixins/emitter'

export default {
  directives: { transferDom },
  mixins: [emitter],
  name: "Tooltip",
  props: {
    transfer: { type: Boolean, default: true },
    trigger: { type: String, default: "hover" },
    width: [String, Number],
    content: [String,Number],
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
        let pos = { x: 0, y: 0 };
        if (this.transfer) {
          pos = this.getElementPos(this.$refs.rel);
        }
        setTimeout(() => {
          let x = this.placement;
          let rel = this.$refs.rel;
          let dom = this.$refs.dom;
          //取子元素的margin,计算的时候要进行运算
          let child = this.$children[0] && this.$children[0].$el || rel
          let mr = document.defaultView.getComputedStyle(child, null)['margin-right'].replace('px', '')
          let mb = document.defaultView.getComputedStyle(child, null)['margin-bottom'].replace('px', '')
          // console.log(mr, mb)
          switch (x) {
            case "top":
              this.top = pos.y - dom.offsetHeight - 10;
              this.left = pos.x - (dom.offsetWidth - rel.offsetWidth) / 2 - mr / 2;
              break;
            case "top-left":
              this.top = pos.y - dom.offsetHeight - 10;
              this.left = pos.x;
              break;
            case "top-right":
              this.top = pos.y - dom.offsetHeight - 10;
              this.left = pos.x - (dom.offsetWidth - rel.offsetWidth) - mr;
              break;
            case "bottom":
              this.top = pos.y + rel.offsetHeight + 10 - mb;
              this.left = pos.x - (dom.offsetWidth - rel.offsetWidth) / 2 - mr / 2;
              break;
            case "bottom-right":
              this.top = pos.y + rel.offsetHeight + 10 - mb;
              this.left = pos.x - (dom.offsetWidth - rel.offsetWidth) - mr;
              break;
            case "bottom-left":
              this.top = pos.y + rel.offsetHeight + 10 - mb;
              this.left = pos.x;
              break;
            case "left":
              this.left = pos.x - dom.offsetWidth - 10;
              this.top = pos.y - (dom.offsetHeight - rel.offsetHeight) / 2 - mb / 2;
              break;
            case "left-top":
              this.left = pos.x - dom.offsetWidth - 10;
              this.top = pos.y;
              break;
            case "left-bottom":
              this.left = pos.x - dom.offsetWidth - 10;
              this.top = pos.y - (dom.offsetHeight - rel.offsetHeight) - mb;
              break;
            case "right":
              this.left = pos.x + rel.offsetWidth + 10 - mr;
              this.top = pos.y - (dom.offsetHeight - rel.offsetHeight) / 2 - mb / 2;
              break;
            case "right-top":
              this.left = pos.x + rel.offsetWidth + 10 - mr;
              this.top = pos.y;
              break;
            case "right-bottom":
              this.left = pos.x + rel.offsetWidth + 10 - mr;
              this.top = pos.y - (dom.offsetHeight - rel.offsetHeight) - mb;
              break;
          }
        });
      }
    }
  },
  methods: {
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