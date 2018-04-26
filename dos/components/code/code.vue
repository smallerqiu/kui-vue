<template>
  <div class="k-code">
    <pre>
    <code :class="lang" ref="code">
      <slot></slot>
    </code>
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
  mounted() {
    let code = this.$refs.code.innerHTML.trim()
    this.$refs.code.innerHTML = code;
    hljs.highlightBlock(this.$refs.code);
  }
};
</script> 