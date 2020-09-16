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
      <div v-show="expand" class="k-code">
        <div class="k-code-tools">
          <ToolTip content="复制代码">
            <Icon type="ios-copy" @click="copy" />
          </ToolTip>
        </div>
        <slot name="code"></slot>
      </div>
    </transition>
  </div>
</template> 

<script>
import './demo.less'
// import Code from '../code'
import ToolTip from '@/components/tooltip'
import Message from '@/components/message'
export default {
  components: { ToolTip },
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
    copy() {
      let { sourceCode } = this.data
      this.$copyText(sourceCode).then(function (e) {
        Message.success('代码复制成功！')
      }, function (e) {
        Message.error('复制代码失败，请手动复制')
        console.log(e)
      })
    },
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
