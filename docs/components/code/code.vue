<template>
  <div class="k-code">
    <div class="k-code-tools">
      <Tooltip content="复制代码">
        <Icon type="copy" @click="copy" />
      </Tooltip>
    </div>
    <pre class="k-code-pre">
    <div :class="lang" ref="code">
      <slot></slot>
    </div>
    </pre> 
  </div>
</template> 
<script> 
import hljs from './highlight';
hljs.registerLanguage('xml', require('./lang/xml'));
hljs.registerLanguage('javascript', require('./lang/javascript'));
import "./atom-one-light.css";
export default {
  name: "Code",
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