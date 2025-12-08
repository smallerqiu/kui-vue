
<template>
  <div
    :class="classes"
    :style="styles"
  >
    <div class="k-step-tail">
      <i />
    </div>
    <div class="k-step-icon">
      <Icon
        v-if="icon"
        :type="icon"
      />
      <div
        v-if="!icon"
        class="k-step-icon-inner"
      >
        <span v-if="state!='finish' && !icon && state!='error'">{{ step }}</span>
        <Icon
          v-if="!icon && state=='finish'"
          type="checkmark"
        />
        <Icon
          v-if="!icon && state=='error'"
          type="close"
        />
      </div>
    </div>
    <div class="k-step-main">
      <div class="k-step-title">
        {{ title }}
      </div>
      <div class="k-step-description">
        {{ description }}
      </div>
    </div>
  </div>
</template>
<script>
import Icon from '../icon'
import emitter from '@/mixins/emitter'
export default {
    name: 'Step',
    components: { Icon },
    mixins: [emitter],
    props: {
        title: String,
        description: String,
        status: {
            validator: (v) => {
                return ['wait', 'process', 'finish', 'error'].indexOf(v) >= 0
            },
            default: 'wait'
        },
        icon: [String, Array]
    },
    data() {
        return {
            width: 0,
            step: 0,
            state: this.status
        }
    },
    computed: {
        styles() {
            return this.width > 0 ? { width: `${this.width}%` } : {}
        },
        classes() {
            return ['k-step-item', {
                [`k-steps-${this.state}`]: this.state
            }]
        }
    },
    mounted() {
        this.dispatch('Steps', 'steps-add', this)
    },
    beforeUnmount() {
        this.dispatch('Step', 'steps-remove', this)
    }
}
</script>
