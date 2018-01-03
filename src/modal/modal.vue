/** * by chuchur / chuchur@qq.com * modal vue 组件,用作前端渲染 */
<template>
  <div class="k-modal" v-show="visible">
    <div class="modal-mask" ref="mask" @click.stop="out"></div>
    <div class="modal-wrap">
      <div class="modal" ref="modal" :style="`width:${width}px`">
        <div class="modal-content">
          <a class="modal-close" @click="closed">&times;</a>
          <div class="modal-header">
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
import {Button} from "../button";
export default {
  name: "Modal",
  components: {
    "k-button": Button
  },
  props: {
    value: { required: false, type: Boolean, default: false },
    title: { required: false, default: "我是一个标题",type:String },
    width: { required: false, default: 520,type:[Number,String] },
    okText: { type: String, default: "确定" },
    cancelText: { type: String, default: "取消" },
    ok: { required: false, default: () => {}, type: Function },
    cancel: { required: false, default: () => {}, type: Function },
    close: { required: false, default: () => {}, type: Function }
  },
  data() {
    return {
      visible: this.value
    };
  },
  watch: {
    value(v) {
      v ? (this.visible = v) : this.out();
    }
  },
  mounted() {},
  methods: {
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
        this.$emit("input", false);
        this.close(false);
      }, 300);
    }
  }
};
</script>