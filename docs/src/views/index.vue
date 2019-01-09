<template>
  <section class="index">
    <header class="header">
      <div class="nav">
        <div class="nav-left">
          <div class="logo">
            <a href="/">
              <img src="/favicon.png" alt="">
              <span>K UIKIT</span>
            </a>
          </div>
        </div>
        <div class="nav-right">
          <ul>
            <li>
              <a href="/">首页</a>
            </li>
            <li>
              <a href="#/start">组件</a>
            </li>
            <li>
              <a href="//react.k-ui.xyz" target="_blank">KUI REACT</a>
            </li>
            <li>
              <a href="//github.com/chuchur/kui-vue">GITHUB</a>
            </li>
            <li>
              <a href="//chuchur.com">BLOG</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <section class="index-content">
      <div class="logo">
        K UI
        <!-- <img :src="logo" /> -->
      </div>
      <h1>一枚基于Vue.js的高质量UI组件库</h1>
      <div class="btn-content">
        <Button class="start" @click="start">开始使用</Button>
        <Button icon="logo-github" class="github" @click="github">Github</Button>
      </div>
    </section>
    <!-- <footer>
      <p>Copyright ©2009-2018
        <a href="http://www.chuchur.com">禅境花园</a> by chuchur 粤ICP备17111365号 </p>
    </footer> -->
  </section>
</template>
<style lang="less">
</style>
<script>
export default {
  data() {
    return {
      logo: require("../assets/logo.svg"),
      // react: require("../assets/kui-react.png"),
      // angular: require("../assets/kui-angular.png")
    };
  },
  methods:{
    start(){
      this.$router.push('/start')
    },
    github(){
      window.open('//github.com/chuchur/kui-vue')
    },
  }
};
</script>
