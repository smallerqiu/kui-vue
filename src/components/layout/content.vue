<template>
  <div class="k-layout-content" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Content',
  props: {
    pullLeft: Boolean
  },
  computed: {
    styles() {
      return this.pullLeft ? { 'margin-right': '200px' } : null
    }
  }
}
</script>