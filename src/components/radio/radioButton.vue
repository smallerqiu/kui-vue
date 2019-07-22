<template>
  <k-button :type="actived?'primary':'default'" :disabled="disable" :mini="mini" @click="click">
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
    disabled: { type: Boolean, default: false },
    label: String,
  },
  data() {
    return {
      disable: this.disabled,
      mini: false,
      actived: false
    }
  },
  watch: {
    disabled(v) {
      this.disable = v
    },
  },
  methods: {
    click() {
      if (this.disable) {
        return false;
      }
      !this.selected && this.dispatch('RadioGroup', 'radio-group-change', {
        value: this.label,
      })
    }
  }
}
</script>
