<template>
  <div v-high>
    <pre>
        <code :class="lang"><slot></slot></code>
     </pre>
  </div>
</template>
<script>
export default {
  name: "Code",
  props: { lang: String }
};
</script> 