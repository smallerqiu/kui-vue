/** * by chuchur / chuchur@qq.com * modal vue 组件,用作前端渲染 */
<template>
  <div class="k-modal" v-show="visible" @mousemove="mmove($event)" @mouseup="mup($event)">
    <div class="modal-mask" ref="mask" @click.stop="out"></div>
    <div class="modal-wrap">
      <div class="modal" ref="modal" :style="styles">
        <div class="modal-content">
          <a class="modal-close" @click="closed">&times;</a>
          <div class="modal-header" :style="headerStyle" @mousedown="mdown($event)">
            <div class="modal-header-inner">{{title}}</div>
          </div>
          <div class="modal-body">
            <slot>我是内容</slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <div class="pull-right">
                <k-button @click="closed">{{cancelText}}</k-button>
                <k-button type="primary" @click="yes">{{okText}}</k-button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
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
    value: { required: false, type: Boolean, default: false },
    title: { required: false, default: "我是一个标题", type: String },
    width: { required: false, default: 520, type: [Number, String] },
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
    ok: { required: false, default: () => {}, type: Function },
    cancel: { required: false, default: () => {}, type: Function },
    close: { required: false, default: () => {}, type: Function },
    isMove: { type: Boolean, default: false }
  },
  computed: {
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
  watch: {
    value(v) {
      v ? (this.visible = v) : this.out();
    }
  },
  methods: {
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
    yes() {
      this.ok();
      this.out();
    },
    closed() {
      this.cancel();
      this.out();
    },
    out() {
      this.$refs["modal"].className = "modal closed";
      setTimeout(() => {
        this.visible = false;
        this.$refs["modal"].className = "modal";
        this.left = 0;
        this.top = 100;
        this.$emit("input", false);
        this.close(false);
      }, 300);
    }
  }
};
</script>