<template>
  <div :class="classes" @mousemove="handelMouseMove($event)" @mouseup="handelMouseUp($event)">
    <transition name="fade">
      <div class="k-modal-mask" ref="mask" v-show="visible"></div>
    </transition>
    <transition name="fadeease">
      <div class="k-modal-wrap" v-show="visible" @click="clickMastToClose">
        <div class="modal" ref="modal" :style="styles">
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
      </div>
    </transition>
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
    isMove: { type: Boolean, default: false }
  },
  computed: {
    classes() {
      return [
        "k-modal",
        {
          ["k-toast"]: this.type == "toast"
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
      style.top = `${this.top}px`;
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
      visible: this.value,
      left: 0,
      top: 100,
      startPos: { x: 0, y: 0 },
      isMouseDown: false
    };
  },
  created() {
    // window.addEventListener("keyup", this.dc);
    window.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestory() {
    window.removeEventListener("keyup", this.onKeyUp);
  },
  watch: {
    value(v) {
      if (v) {
        this.visible = v
        document.body.style.overflow = 'hidden'
        this.left = 0;
        this.top = 100;
      } else {
        document.body.style.overflow = ''
        this.close();
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
        this.left += (e.clientX - this.startPos.x);
        this.top += (e.clientY - this.startPos.y);
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