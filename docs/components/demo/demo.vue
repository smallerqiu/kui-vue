<template>
  <div class="k-demo">
    <div class="k-demo-main">
      <div class="k-content">
        <slot name="component"></slot>
      </div>
      <div class="k-desc">
        <div class="k-desc-content typo">
          <slot name="description"></slot>
        </div>
        <span class="k-code-expan" @click="expand=!expand">
          <!-- {{textTip}} -->
          <Icon :type="'ios-code'+(expand?'-working':'')" />
        </span>
      </div>
    </div>
    <transition @enter="enter" @leave="leave" @beforeEnter="beforeEnter">
      <!-- <Code v-show="expand" ref="code" :lang="lang"> -->
      <div v-show="expand" class="k-code">
        <slot name="code"></slot>
      </div>
      <!-- </Code> -->
    </transition>
  </div>
</template> 

<script>
import './demo.less'
// import Code from '../code'
import Collapse from '@/components/collapse/collapse.js'
export default {
  components: { Collapse },
  data() {
    return {
      expand: false
    }
  },
  name: 'Demo',
  props: {
    data: { Object, Array }
  },
  methods: {
    beforeEnter(el) {
        el.style.height = 0
        el.style.opacity = 0.1
    },
    enter(el) {
      if (el.scrollHeight !== 0) {
        el.style.height = el.scrollHeight + 'px'
        el.style.opacity = 1
      } else {
        el.style.height = ''
        el.style.opacity = ''
      }
    },
    leave(el) {
      if (el.scrollHeight !== 0) { el.style.height = 0; el.style.opacity = 0.1 }
    },
  },
}
</script>
