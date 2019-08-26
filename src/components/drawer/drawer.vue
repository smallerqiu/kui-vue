<template>
  <div class="k-drawer" v-transferDom data-transfer="true">
    <transition name="fade">
      <div class="k-drawer-mask" ref="mask" v-show="visible"></div>
    </transition>
    <div :class="['k-drawer-wrap',{'k-drawer-form':type=='form','k-drawer-left':placement=='left'}]" v-show="visiblew" @click="clickMastToClose">
      <transition :name="placement=='left'?'faderight':'fadeleft'">
        <div class="drawer animated" ref="drawer" v-show="visible" :style="styles" @mousedown="mouseInRect=true">
          <div class="k-drawer-content">
            <a class="k-drawer-close" @click="close" v-if="closable && type=='form'">
              <Icon type="md-close" />
            </a>
            <div class="k-drawer-header">
              <div class="k-drawer-header-inner">{{title}}</div>
            </div>
            <div class="k-drawer-body">
              <slot>我是内容</slot>
            </div>
            <div class="k-drawer-footer" v-if="type=='form'">
              <slot name="footer">
                <k-button @click="cancel">{{cancelText}}</k-button>
                <k-button type="primary" @click="ok">{{okText}}</k-button>
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
import transferDom from "@/directives/transferDom";
export default {
  name: "Drawer",
  directives: { transferDom },
  components: {
    "k-button": Button,
  },
  props: {
    type: { type: String, default: "static" },
    value: { type: Boolean, default: false },
    title: { default: "我是一个标题", type: String },
    width: { default: 520, type: [Number, String] },
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
    placement: { type: String, default: 'right' },
    closable: { type: Boolean, default: true }
  },
  computed: {
    styles() {
      let style = {
        width: `${this.width}px`
      };
      return style;
    },

  },
  data() {
    return {
      visible: this.value,
      visiblew: this.value,
      mouseInRect: false
    };
  },
  watch: {
    value(v) {
      if (v) {
        document.body.style.overflow = 'hidden'
        this.visible = v
        this.visiblew = v
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
    clickMastToClose(e) {
      if (this.mouseInRect) {
        this.mouseInRect = false;
        return;
      }
      if (!this.$refs.drawer.contains(e.target)) {
        this.close()
      }
    },
    ok() {
      this.$emit("ok");
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