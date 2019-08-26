<template>
  <transition name="fade">
    <div class="k-preview-box" v-show="show" @click="toClose" v-transferDom data-transfer="true">
      <span class="k-preview-close" @click="close">&times;</span>
      <transition enter-active-class="zoomInX" leave-active-class="zoomOutX">
        <img class="k-image animated" :src="src" v-show="show" ref="img" />
      </transition>
    </div>
  </transition>
</template>
<script>
import transferDom from "@/directives/transferDom";
export default {
  name: 'imagePreview',
  directives: { transferDom },
  props: {
    value: Boolean,
    url: String,
    // animateIn: { type: String, default: 'zoomIn' },
    // animateOut: { type: String, default: 'zoomOut' },
  },
  data() {
    return {
      show: this.value,
      src: this.url,
      showPos: { x: 0, y: 0 }
    }
  },
  watch: {
    url(v) { this.src = v },
    value(v) {
      this.show = v
      if (v) {
        this.$nextTick(e=>{
          this.setPos()
        })
      }
    }
  },
  mounted() {
    document.addEventListener("mousedown", this.getPos);
    window.addEventListener('keyup', this.onKeyUp)
  },
  beforeDestory() {
    document.removeEventListener("mousedown", this.getPos);
    window.removeEventListener("keyup", this.onKeyUp);
  },
  methods: {
    setPos() {
      let x = this.showPos.x - (document.body.offsetWidth - this.$refs.img.offsetWidth) / 2
      let y = this.showPos.y - (document.body.offsetHeight - this.$refs.img.offsetHeight) / 2
      this.$refs.img.style['transform-origin'] = `${x}px ${y}px`
      // this.x = x
      // this.y = y
    },
    getPos(e) {
      if (!this.value) {
        this.showPos = { x: e.clientX, y: e.clientY }
      }
    },
    toClose(e) {
      if (!this.$refs.img.contains(e.target)) {
        this.close()
      }
    },
    onKeyUp(e) {
      if (this.show) {
        if (e.keyCode == 27) this.close();
      }
    },
    close() {
      this.show = false
      this.$emit('input', false)
    }
  },
}
</script>
