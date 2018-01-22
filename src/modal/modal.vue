<template>
  <div :class="classes" @mousemove="mmove($event)" @mouseup="mup($event)">
    <transition name="fade">
      <div class="k-modal-mask" ref="mask" v-show="visible"></div>
    </transition>
    <transition name="fadeease">
      <div class="k-modal-wrap" v-show="visible" @click="hide">
        <div class="modal" ref="modal" @click.stop="()=>{}" :style="styles">
          <div class="k-modal-content">
            <a class="k-modal-close" @click="hide">&times;</a>
            <div class="k-modal-header" :style="headerStyle" @mousedown="mdown($event)" v-if="type=='modal'">
              <div class="k-modal-header-inner">{{title}}</div>
            </div>
            <div class="k-modal-body">
              <template v-if="type=='modal'">
                <slot>我是内容</slot>
              </template>
              <template v-if="type=='toast'">
                <div class="k-pull-center">
                  <span :class="getIcon()" :style="getColor()"></span>
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
import utils from "../utils";
export default {
  name: "Modal",
  components: {
    "k-button": Button
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
    }
  },
  data() {
    return {
      visible: this.value,
      left: 0,
      top: "",
      x: 0,
      y: 0,
      isMouseDown: false
    };
  },
  mounted() {
    document.body.addEventListener("keyup", this.dc);
  },
  beforeDestory() {
    document.body.removeEventListener("keyup", this.dc);
  },
  watch: {
    value(v) {
      v ? (this.visible = v) : this.hide();
    }
  },
  methods: {
    getColor() {
      return this.color ? { color: this.color } : {};
    },
    getIcon() {
      let icons = {
        info: "information-circled",
        error: "android-cancel",
        success: "checkmark-circled",
        warning: "android-alert"
      };
      return [
        "k-toast-icon",
        {
          [`k-ion-${icons[this.icon]}`]: icons[this.icon],
          [`k-ion-${this.icon}`]: !icons[this.icon]
        }
      ];
    },
    mdown(e) {
      if (e.button == 0) {
        this.isMouseDown = true;
        this.x = this.$refs["modal"].offsetLeft;
        this.y = this.$refs["modal"].offsetTop;
      }
    },
    mmove(e) {
      if (this.isMouseDown && this.isMove) {
        this.left += e.movementX;
        this.top = this.y + e.movementY;
        this.x = this.left;
        this.y = this.top;
      }
    },
    mup() {
      this.isMouseDown = false;
    },
    ok() {
      this.$emit("ok");
      this.hide();
    },
    dc(e) {
      if (this.visible) {
        if (e.keyCode == 27) this.hide();
      }
    },
    cancel() {
      this.$emit("cancel");
      this.hide();
    },
    hide() {
      this.visible = false;
      this.$emit("input", false);
      this.$emit("close");
      setTimeout(() => {
        this.left = 0;
        this.top = 100;
      }, 500);
    }
  }
};
</script>