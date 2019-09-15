<template>
  <div :class="classes" v-transferDom data-transfer="true">
    <transition name="fade">
      <div class="k-modal-mask" ref="mask" v-show="visible"></div>
    </transition>
    <div :class="['k-modal-wrap',{'k-modal-centered':isCenter}]" v-show="visiblew" @click="clickMastToClose">
      <transition enter-active-class="zoomInX" leave-active-class="zoomOutX">
        <div class="modal animated" ref="modal" v-show="visible" :style="styles" @mousedown="mouseInRect=true">
          <slot name="content">
            <template v-if="type=='modal'">
              <div class="k-modal-content">
                <a class="k-modal-close" @click="close">
                  <Icon type="md-close" />
                </a>
                <div class="k-modal-header" :style="headerStyle" @mousedown="handelMouseDown($event)">
                  <div class="k-modal-header-inner">{{title}}</div>
                </div>
                <div class="k-modal-body">
                  <slot>我是内容</slot>
                </div>
                <div class="k-modal-footer">
                  <slot name="footer">
                    <k-button @click="cancel">{{cancelText}}</k-button>
                    <k-button type="primary" @click="ok">{{okText}}</k-button>
                  </slot>
                </div>
              </div>
            </template>
            <!-- <template v-else>
              <div class="k-toast-header">
                <span :class="iconClasses" :style="iconStyles"></span>
                <span class="k-toast-title">{{title}}</span>
              </div>
              <div class="k-toast-content">
                <slot>我是内容</slot>
              </div>
              <div class="k-toast-footer">
                <k-button type="primary" @click="ok">{{okText}}</k-button>
              </div>
            </template> -->
          </slot>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { Button } from "../button";
import transferDom from "@/directives/transferDom";
import Icon from "../icon";
export default {
  name: "Modal",
  directives: { transferDom },
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
    top: { default: 100, type: [Number, String] },
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
    isMove: { type: Boolean, default: false },
    isMax: { type: Boolean, default: false },
    isCenter: { type: Boolean, default: false },
    maskClosable: { type: Boolean, default: true }
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
      let style = {
        width: this.type == 'modal' ? (!this.isMax ? (this.width.toString().indexOf('%') >= 0 ? this.width : `${this.width}px`) : '') : '',
        top: (this.isCenter || this.isMax) ? 0 : `${this.Top}px`,
        position: this.isMove ? 'absolute' : '',
        'transform-origin': `${this.x}px ${this.y}px`,
        left: this.isMove ? `${this.left}px` : '',
        height: `${this.height}%`
      };
      return style;
    },

  },
  data() {
    return {
      visible: this.value, visiblew: this.value,
      left: 0,
      Top: this.top,
      x: 0, y: 0,
      showPos: { x: 0, y: 0 },
      startPos: { x: 0, y: 0 },
      isMouseDown: false,
      mouseInRect: false,
      height: ''
    };
  },
  created() {
    if (this.type == 'modal') {
      window.addEventListener('keyup', this.onKeyUp)
      document.addEventListener('mousedown', this.getPos)
      document.addEventListener('mousemove', this.handelMouseMove)
      document.addEventListener('mouseup', this.handelMouseUp)
    }
  },
  beforeDestory() {
    if (this.type == 'modal') {
      window.removeEventListener("keyup", this.onKeyUp);
      document.removeEventListener("mousedown", this.getPos);
      document.removeEventListener('mousemove', this.handelMouseMove)
      document.removeEventListener('mouseup', this.handelMouseUp)
    }
  },
  watch: {
    value(v) {
      if (v) {
        document.body.style.overflow = 'hidden'
        if (this.isMove) {
          this.left = (document.body.offsetWidth - this.width) / 2
          this.Top = 100;
          this.$refs.modal.style.left = this.left + 'px'
          this.$refs.modal.style.top = this.Top + 'px'
        }

        this.visiblew = v
        this.visible = v
        this.$nextTick(e => {
          this.setPos()
          if (this.$refs.modal.scrollHeight > document.body.clientHeight && !this.isMax) {
            this.height = 80
          }
        })
      } else {
        document.body.style.overflow = ''
        this.close();
        this.timer = setTimeout(e => {
          this.visiblew = false
        }, 300)
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
    setPos() {
      let width = this.width.toString().indexOf('%') >= 0 ? ((this.width.replace('%', '') / 100) * document.body.offsetWidth) : this.width
      let x = this.showPos.x - (document.body.offsetWidth - width) / 2
      let y = this.showPos.y - (this.isCenter ? ((document.body.offsetHeight - this.$refs.modal.offsetHeight) / 2) - this.Top : this.Top)
      // this.$refs.modal.style['transform-origin'] = `${x}px ${y}px`
      this.x = x
      this.y = y
    },
    getPos(e) {
      if (!this.value) {
        this.showPos = { x: e.clientX, y: e.clientY }
      }
    },
    clickMastToClose(e) {
      if (!this.maskClosable) return;
      if (this.mouseInRect) {
        this.mouseInRect = false;
        return;
      }
      if (!this.$refs.modal.contains(e.target) && !this.isMove && this.type == 'modal') {
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
        // let r = (document.body.getBoundingClientRect().width - this.width) / 2
        // let b = (document.body.getBoundingClientRect().height - this.$refs.modal.offsetHeight)
        // this.left = Math.min(r, this.left) //限制右边
        // this.left = Math.max(r * -1, this.left) //限制左边

        this.Top += (e.clientY - this.startPos.y);
        // this.top = Math.max(0, this.top)//限制上边
        // this.top = Math.min(b, this.top)//限制上边
        let s = this.$refs.modal.style['transform-origin'].replace(/px/g, '').split(' ')
        let x = s[0] - 0, y = s[1] - 0
        x += - (e.clientX - this.startPos.x)
        y += -(e.clientY - this.startPos.y)
        // this.$refs.modal.style['transform-origin'] = `${x}px ${y}px`
        this.x = x
        this.y = y
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
      if (this.visible && this.maskClosable) {
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