<template>
  <section class="index">
    <header class="header">
      <div class="nav">
        <div class="nav-left">
          <div class="logo">
            <a href="/">
              <img src="../assets/favicon.png" alt="Vue K UIKIT">
              <span>K UIKIT</span>
            </a>
          </div>
        </div>
        <div class="nav-right">
          <ul>
            <li><a href="/">首页</a></li>
            <li><a href="#/start">组件</a></li>
            <li><a href="https://react.k-ui.cn" target="_blank">KUI React</a></li>
            <li><a href="https://github.com/chuchur-china/kui-vue">Github</a></li>
            <li><a href="https://chuchur.com">Blog</a></li>
          </ul>
        </div>
      </div>
    </header>
    <section class="index-content">
      <div class="logo">K UI</div>
      <h1>一套基于Vue.js的高质量UI组件库</h1>
      <div class="btn-content">
        <Button class="start" @click="start" large>开始使用</Button>
        <Button icon="logo-github" @click="git" large>Github</Button>
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
  methods: {
    start() {
      this.$router.push('/start')
    },
    git() {
      window.open('//github.com/chuchur-china/kui-vue')
    },
  }
};
</script>
