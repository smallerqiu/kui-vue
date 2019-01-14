<template>
  <k-button :type="actived?'primary':'default'" :disabled="disabled" :mini="mini" @click="click">
    <slot>{{label}}</slot>
  </k-button>
</template>
<script>
import { Button } from '../button'
import emitter from '@/mixins/emitter'
export default {
  name: 'RadioButton',
  components: { 'k-button': Button },
  mixins: [emitter],
  props: {
    label: String,
  },
  data() {
    return {
      disabled: false,
      mini: false,
      actived: false
    }
  },
  methods: {
    click() {
      !this.selected && this.dispatch('RadioGroup', 'radio-group-change', {
        value: this.label,
      })
    }
  }
}
</script>
