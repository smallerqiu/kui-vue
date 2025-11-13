<template>
  <span :class="'web-icon web-icon-'+name"
    @click="$emit('click')">
    <svg :width="width"
      fill="currentcolor"
      :height="height">
      <use :xlink:href="`${sprite}#${name}`"></use>
    </svg>
  </span>
</template>
<script>
import { defineComponent, reactive } from 'vue'
import sprite from '@/src/assets/img/web.svg'

export default defineComponent({
  name: 'WebIcon',
  setup() {
    const state = reactive({
      sprite
    })

    return {
      ...state
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
})
</script>