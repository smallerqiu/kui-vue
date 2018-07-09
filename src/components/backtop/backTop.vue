<template>
  <div class="k-backtop" @click="handle" v-show="visible" v-scroll="scroll" :style="styles">
    <slot>
      <div class="k-backtop-content">
        <Icon type="chevron-up" />
      </div>
    </slot>
  </div>
</template>
<script>
import Icon from "../icon";
import scroll from "../../directives/winScroll";
export default {
  name: "BackTop",
  components: { Icon },
  directives: { scroll },
  props: {
    height: { type: [String, Number], default: 100 },
    right: [String, Number],
    bottom: [String, Number]
  },
  data() {
    return {
      timer: null,
      visible: false
    };
  },
  computed: {
    styles() {
      let style = {};
      this.bottom >= 0 && (style.bottom = `${this.bottom}px`);
      this.right >= 0 && (style.right = `${this.right}px`);
      return style;
    }
  },
  methods: {
    scroll() {
      let top = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
      this.visible = top >= this.height;
    },
    handle(e) {
      this.$emit("click", e);
      if (this.timer) {
        clearInterval(this.timer);
      }
      let height = 80;
      this.timer = setInterval(() => {
        var oTop = document.body.scrollTop || document.documentElement.scrollTop || window.scrollY;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop = oTop - height;
          window.setWindowScroll(-height)
          this.scroll()
        } else {
          clearInterval(this.timer);
        }
        if (height <= 15) height = 15;
        else height -= 1;
      }, 10);
      //ie 9 不兼容 cancelAnimationFrame
      // cancelAnimationFrame(this.timer);
      // let _this = this
      // this.timer = requestAnimationFrame(function fn() {
      //     var oTop = document.body.scrollTop || document.documentElement.scrollTop;
      //     if (oTop > 0) {
      //         document.body.scrollTop = document.documentElement.scrollTop = oTop - 150;
      //         _this.timer = requestAnimationFrame(fn);
      //     } else {
      //         cancelAnimationFrame(_this.timer);
      //     }
      // });
    }
  }
};
</script>
