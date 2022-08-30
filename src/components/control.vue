<template>
  <span :class="'web-icon web-icon-'+name" @click="$emit('click')">
    <svg :width="width" fill="currentcolor" :height="height" mr="4px">
      <use :xlink:href="`${sprite}#${name}`"></use>
    </svg>
  </span>
</template>
<script>
import sprite from '../assets/svg/web.svg'
export default {
  name: 'Chain',
  data() {
    return {
      sprite
    }
  },
  props: {
    name: String,
    width: {
      type: [String, Number],
      default: '1em'
    },
    height: {
      type: String,
      default: '1em'
    }
  }
}
</script>