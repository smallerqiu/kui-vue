<template>
  <section class="index">
    <h1>KUI, 一枚前端UI组件库</h1>
    <div class="logo">
      <a href="//k-ui.xyz/start">
        <img :src="vue" />
        <span >For Vue</span>
      </a>
      <a href="//react.k-ui.xyz/start">
        <img :src="react" />
        <span >For React</span>
      </a>
      <a @click="()=>this.$Message.info('抱歉，部分文档还在完善...')">
        <img :src="angular" />
        <span >For Angular</span>
      </a>
    </div>
    <span v-for="n in 9" :key="n" :class="'blister blister'+n">
      <span class="light"></span>
      <span class="light2"></span>
    </span>
    <footer>
      <p>Copyright ©2009-2018
        <a href="http://www.chuchur.com">禅境花园</a> by chuchur 粤ICP备17111365号 </p>
    </footer>
  </section>
</template>
<style lang="less">
</style>
<script>
export default {
  data() {
    return {
      vue: require("../assets/kui-vue.png"),
      react: require("../assets/kui-react.png"),
      angular: require("../assets/kui-angular.png")
    };
  }
};
</script>
