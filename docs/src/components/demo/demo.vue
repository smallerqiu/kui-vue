<template>
  <div :class="classes" v-resize="setHeight" ref="dom">
    <div class="k-demo-main" ref="demo">
      <div class="k-content">
        <slot name="content"></slot>
      </div>
      <div class="k-desc">
        <a class="k-desc-title">{{title}}</a>
        <div class="k-desc-content">
          <slot name="desc"></slot>
        </div>
        <span class="k-code-expan" @click="toggle">
          {{textTip}}
        </span>
      </div>
    </div>
    <div class="k-demo-line"></div>
    <transition @enter="enter" @leave="leave" @beforeEnter="beforeEnter">
      <Code v-show="expand" ref="code" :lang="lang">
        <slot name="code"></slot>
      </Code>
    </transition>
  </div>
</template> 

<script>
import './demo.less'
import Code from '../code'
import resize from '@/directives/winScroll'
export default {
  directives: { resize },
  components: { Code },
  name: 'Demo',
  props: {
    layout: { type: String, default: 'vertical' },
    title: String,
    lang: String,
  },
  data() {
    return {
      domHeight: 0,
      demoHeight: 0,
      expand: false,
    }
  },
  computed: {
    textTip() {
      return this.expand ? '收起代码' : '展开代码'
    },
    classes() {
      return ['k-demo', {
        [`k-demo-${this.layout}`]: this.layout
      }]
    },
    styles() {
      return this.layout == 'horizontal' ? { height: this.expand ? `${this.domHeight}px` : `${this.demoHeight}px` } : {}
    },
  },
  methods: {
    setHeight() {
      // if (this.layout == 'horizontal') {
      //   this.domHeight = this.$refs.dom.scrollHeight
      //   this.demoHeight = this.$refs.demo.scrollHeight
      // }
    },
    toggle() {
      this.expand = !this.expand
      // if (this.layout == 'vertical') {
      //   this.codeHeight = !this.expand ? 0 : 'auto';
      // }
      // console.log(this.$refs.code.$el.scrollHeight)
    },
    beforeEnter(el) {
      el.style.height = 0;
      el.style.overflow = 'hidden';
      el.style.opacity = 0.1;
    },
    enter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + "px";
        el.style.opacity = 1;
      } else {
        el.style.height = "";
        el.style.opacity = "";
      }
    },
    leave(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = 0;
        el.style.overflow = 'hidden';
        el.style.opacity = 0.1;
      }
    },
  },
  mounted() {
    this.setHeight()
  }
}
</script>
