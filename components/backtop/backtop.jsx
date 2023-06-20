
import Icon from "../icon";
import scroll from "../_tool/scroll";
import { ArrowUp } from "kui-icons";
export default {
  name: "BackTop",
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
          // window.setWindowScroll(-height)
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
  },
  render() {
    let child = this.$slots.default
    if (!child) {
      child = <div class="k-backtop-content"><Icon type={ArrowUp} /></div>
    }
    const styles = {
      bottom: `${this.bottom}px`,
      left: `${this.right}px`
    }
    return (
      <transition name="k-backtop-fade">
        <div class="k-backtop" onClick={this.handle} v-show={this.visible} v-scroll={this.scroll} style={styles} >
          {child}
        </div>
      </transition>
    )
  }
};