<template>
  <transition name="fade">
    <div class="k-loading-warp" :style="styles" v-show="visible">
      <div :class="barClasses" v-if="mode=='line'" :style="barStyles"></div>
      <div class="k-loading-inner" v-else>
        <div :class="animateClasses"></div>
        <div class="k-loading-text" v-if="loadingText">{{loadingText}}</div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    type: {type:String,default:'line'},
    loadingText: { type: String },
    height: { type: [String, Number], default: 2 },
    color: String
  },
  data() {
    return {
      visible: true,
      percent: 0,
      error: false,
      timer: null,
      mode: this.type
    };
  },
  computed: {
    barStyles() {
      let style = {};
      if (this.mode == "line") {
        style.width = `${this.percent}%`;
        this.color && (style["background-color"] = this.color);
      }
      return style;
    },
    styles() {
      return this.mode == "line" ? { height: `${this.height}px` } : {};
    },
    barClasses() {
      return [
        "k-loading-line",
        {
          ["k-loading-line-error"]: this.error
        }
      ];
    },
    animateClasses() {
      return [
        "k-loading-animate",
        {
          [`k-loading-animate-${this.mode}`]: this.mode
        }
      ];
    }
  },
};
</script>

