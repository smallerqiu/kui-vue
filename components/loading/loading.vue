<template>
  <transition name="fade">
    <div class="k-loading-warp" :style="styles" v-show="visible">
      <div :class="barClasses" v-if="Type=='line'" :style="barStyles"></div>
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
    loadingText: String,
    height: { type: [String, Number], default: 2 },
    color: String
  },
  data() {
    return {
      visible: true,
      percent: 0,
      error: false,
      timer: null,
      Type: this.type,
      Color:this.color,
      Height:this.height
    };
  },
  computed: {
    barStyles() {
      let style = {};
      if (this.Type == "line") {
        style.width = `${this.percent}%`;
        this.Color && (style["background-color"] = this.Color);
      }
      return style;
    },
    styles() {
      return this.Type == "line" ? { height: `${this.Height}px` } : {};
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
          [`k-loading-animate-${this.Type}`]: this.Type
        }
      ];
    }
  },
};
</script>

