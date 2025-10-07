import Icon from "../icon";
import scroll from "../directives/scroll";
import { ArrowUp } from "kui-icons";
import { withInstall } from "../utils/vue";

const BackTop = {
  name: "BackTop",
  directives: { scroll },
  props: {
    height: { type: [String, Number], default: 100 },
    right: [String, Number],
    bottom: [String, Number],
  },
  data() {
    return {
      timer: null,
      visible: false,
    };
  },
  methods: {
    scroll() {
      const top =
        document.body.scrollTop ||
        document.documentElement.scrollTop ||
        window.scrollY;
      this.visible = top >= this.height;
    },
    handle(e) {
      this.$emit("click", e);
      if (this.timer) {
        clearInterval(this.timer);
      }
      let height = 80;
      this.timer = setInterval(() => {
        const oTop =
          document.body.scrollTop ||
          document.documentElement.scrollTop ||
          window.scrollY;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            oTop - height;
          this.scroll();
        } else {
          clearInterval(this.timer);
        }
        if (height <= 15) height = 15;
        else height -= 1;
      }, 10);
    },
  },
  render(h) {
    let child = this.$slots.default;
    if (!child) {
      child = (
        <div class="k-backtop-content">
          <Icon type={ArrowUp} />
        </div>
      );
    }
    const styles = {
      bottom: this.bottom + "px",
      left: this.right + "px",
    };
    return (
      <transition name="k-backtop-fade">
        <div
          class="k-backtop"
          onClick={this.handle}
          v-show={this.visible}
          v-scroll={this.scroll}
          style={styles}
        >
          {child}
        </div>
      </transition>
    );
  },
};

export default withInstall(BackTop);