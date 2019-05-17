<template>
  <transition name="fade">
    <div class="k-preview-box" v-show="value">
      <span class="k-preview-close" @click="close">&times;</span>
      <transition :enter-active-class="animateIn" :leave-active-class="animateOut">
        <img class="k-image animated" :src="src" v-show="value"  />
      </transition>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'imagePreview',
  props: {
    value: Boolean,
    url: String,
    animateIn: { type: String, default: 'zoomIn' },
    animateOut: { type: String, default: 'zoomOut' },
  },
  data() {
    return {
      show: this.value,
      src: ''
    }
  },
  watch: {
    url(v) { this.src = v },
    value(v) { this.show = v }
  },
  methods: {
    close() {
      this.show = false
      this.$emit('input', false)
    }
  },
}
</script>
