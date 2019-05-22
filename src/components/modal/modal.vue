<template>
  <div :class="classes" @mousemove="handelMouseMove($event)" @mouseup="handelMouseUp($event)">
    <transition name="fade">
      <div class="k-modal-mask" ref="mask" v-show="visible"></div>
    </transition>
    <div class="k-modal-wrap" v-show="visiblew" @click="clickMastToClose">
      <transition :enter-active-class="animateIn" :leave-active-class="animateOut">
        <div class="modal animated" ref="modal" v-show="visible" :style="styles">
          <div class="k-modal-content">
            <a class="k-modal-close" @click="close">
              <Icon type="md-close" />
            </a>
            <div class="k-modal-header" :style="headerStyle" @mousedown="handelMouseDown($event)" v-if="type=='modal'">
              <div class="k-modal-header-inner">{{title}}</div>
            </div>
            <div class="k-modal-body">
              <template v-if="type=='modal'">
                <slot>我是内容</slot>
              </template>
              <template v-if="type=='toast'">
                <div class="k-pull-center">
                  <span :class="iconClasses" :style="iconStyles"></span>
                  <div class="k-toast-content">
                    <slot>我是内容</slot>
                  </div>
                </div>
              </template>
            </div>
            <div class="k-modal-footer">
              <slot name="footer">
                <div class="k-pull-right" v-if="type=='modal'">
                  <k-button @click="cancel">{{cancelText}}</k-button>
                  <k-button type="primary" @click="ok">{{okText}}</k-button>
                </div>
                <div class="k-pull-center" v-if="type=='toast'">
                  <k-button type="gray" hollow @click="ok">{{okText}}</k-button>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { Button } from "../button";
import Icon from "../icon";
export default {
  name: "Modal",
  components: {
    "k-button": Button, Icon
  },
  props: {
    type: { type: String, default: "modal" },
    color: String,
    icon: { type: String, default: "success" },
    value: { type: Boolean, default: false },
    title: { default: "我是一个标题", type: String },
    width: { default: 520, type: [Number, String] },
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
    isMove: { type: Boolean, default: false },
    isMax: { type: Boolean, default: false },
    isCenter: { type: Boolean, default: false },
    animateIn: { type: String, default: 'zoomInX' },
    animateOut: { type: String, default: 'zoomOutX' },
  },
  computed: {
    classes() {
      return [
        "k-modal",
        {
          ["k-toast"]: this.type == "toast",
          ["k-modal-max"]: this.isMax && !this.isMove
        }
      ];
    },
    headerStyle() {
      let style = {};
      style.cursor = this.isMove ? "move" : "";
      return style;
    },
    styles() {
      let style = {};
      style.width = `${this.width}px`;
      style.left = `${this.left}px`;
      if (this.isCenter) {
        style.top = '50%'
        style.transform = 'translateY(-50%)'
      } else {
        style.top = `${this.top}px`;
      }
      // this.$nextTick(e => {
      //   let y = (document.body.getBoundingClientRect().height - this.$refs.modal.offsetTop) + 'px '
      //   this.$refs.modal.style.transformOrigin = 'center ' + y
      // })

      return style;
    },
    iconClasses() {
      let icons = {
        info: "ios-information-circle",
        error: "ios-close-circle",
        success: "ios-checkmark-circle",
        warning: "ios-alert"
      };
      return [
        "k-toast-icon",
        {
          [`k-ion-${icons[this.icon]}`]: icons[this.icon] && this.icon,
          [`k-ion-${this.icon}`]: !icons[this.icon] && this.icon
        }
      ];
    },
    iconStyles() {
      return this.color ? { color: this.color } : {};
    },
  },
  data() {
    return {
      visible: this.value, visiblew: this.value,
      left: 0,
      top: 100,
      startPos: { x: 0, y: 0 },
      isMouseDown: false
    };
  },
  created() {
    // window.addEventListener("keyup", this.dc);
    // if (this.isCenter && this.visible) {
    //   // this.top = (document.body.getBoundingClientRect().height - this.$refs.modal.offsetHeight) / 2
    // }
    window.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestory() {
    window.removeEventListener("keyup", this.onKeyUp);
  },
  watch: {
    value(v) {
      if (v) {
        this.visible = v
        this.visiblew = v
        document.body.style.overflow = 'hidden'
        // this.$nextTick(e => {
        //   let x = (document.body.getBoundingClientRect().width - this.width) / 2
        //   console.log(document.body.getBoundingClientRect().width, this.$refs.modal.offsetHeight)
        //   let y =  this.$refs.modal.offsetTop //+ this.$refs.modal.offsetHeight
        // this.$refs.modal.style.transformOrigin = 'center bottom'
        // })

      } else {
        document.body.style.overflow = ''
        this.close();
        this.timer = setTimeout(e => {
          this.visiblew = false
        }, 500)
      }
    }
  },
  mounted() {
    this.visible = this.value
    if (this.visible) {
      document.body.style.overflow = 'hidden'
    }
  },
  methods: {
    clickMastToClose(e) {
      if (!this.$refs.modal.contains(e.target) && !this.isMove) {
        this.close()
      }
    },
    handelMouseDown(e) {
      if (e.button == 0) {
        this.isMouseDown = true;
        this.startPos = { x: e.clientX, y: e.clientY }
      }
    },
    handelMouseMove(e) {
      if (this.isMouseDown && this.isMove) {
        this.left += e.clientX - this.startPos.x;
        let r = (document.body.getBoundingClientRect().width - this.width) / 2
        let b = (document.body.getBoundingClientRect().height - this.$refs.modal.offsetHeight)
        this.left = Math.min(r, this.left) //限制右边
        this.left = Math.max(r * -1, this.left) //限制左边

        this.top += (e.clientY - this.startPos.y);
        this.top = Math.max(0, this.top)//限制上边
        this.top = Math.min(b, this.top)//限制上边

        this.startPos = { x: e.clientX, y: e.clientY }
      }
    },
    handelMouseUp() {
      this.isMouseDown = false;
    },
    ok() {
      this.$emit("ok");
      this.close();
    },
    onKeyUp(e) {
      if (this.visible) {
        if (e.keyCode == 27) this.close();
      }
    },
    cancel() {
      this.$emit("cancel");
      this.close();
    },
    close() {
      this.visible = false;
      this.$emit("input", false);
      this.$emit("close");
    }
  }
};
</script>