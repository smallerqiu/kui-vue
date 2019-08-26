<template>
  <div class="k-code">
    <div class="k-code-tools">
      <ToolTip content="复制代码">
        <Icon type="ios-copy" @click="copy" />
      </ToolTip>
      <ToolTip content="放大展示">
        <Icon type="ios-qr-scanner" @click="show=true" />
      </ToolTip>
    </div>
    <pre class="k-code-pre">
    <div :class="lang" ref="code">
      <slot></slot>
    </div>
    </pre>
    <Modal title="Code" v-model="show" class="k-code-modal k-code" width="60%">
      <pre class="k-code-pre">
      <div ref="Code" class="k-code"></div>
      </pre>
    </Modal>
  </div>
</template> 
<script> 
import hljs from './highlight';
hljs.registerLanguage('xml', require('./lang/xml'));
hljs.registerLanguage('javascript', require('./lang/javascript'));
import "./atom-one-light.css";
import ToolTip from '@/components/tooltip'
import Modal from '@/components/modal'
import { Message } from '@/components/message'
export default {
  name: "Code",
  components: { ToolTip, Message, Modal },
  props: {
    lang: { type: String, default: "xml html" },
  },
  data() {
    return {
      show: false
    }
  },
  mounted() {
    let code = this.$refs.code.innerHTML.trim()
    this.$refs.code.innerHTML = code;
    this.$refs.Code.innerHTML = code;
    hljs.highlightBlock(this.$refs.code);
    hljs.highlightBlock(this.$refs.Code);
  },
  methods: {
    copy() {
      let slot = this.$slots.default[0]
      let text = slot.text || slot.elm.innerText
      this.$copyText(text).then(function (e) {
        Message.success('代码复制成功！')
      }, function (e) {
        Message.error('复制代码失败，请手动复制')
        console.log(e)
      })
    },
  },
};
</script> 