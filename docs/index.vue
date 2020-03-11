<template>
  <Layout class="index"> 
    <Header />
    <section class="index-content">
      <div class="logo">K UI</div>
      <h1>一套基于Vue.js的桌面UI组件库</h1>
      <div class="btn-content">
        <Button class="start" @click="start" large>开始使用</Button>
        <Button icon="logo-github" @click="git" large>Github</Button>
      </div>
    </section>
    <!-- <footer>
      <p>Copyright ©2009-2018
        <a href="http://www.chuchur.com">禅境花园</a> by chuchur 粤ICP备17111365号 </p>
    </footer> -->
  </Layout>
</template>
<script>
import Header from './components/header'
export default {
  components: { Header },
  methods: {
    start() {
      this.$router.push('/docs/start')
    },
    git() {
      window.open('//github.com/chuchur-china/kui-vue')
    },
  }
};
</script>
<style lang="less">
html,
body {
  height: 100%;
  width: 100%;
}
.index {
  // background: #fff;
  // display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: none;
  &::after{
    display: none;
  }
  &::before {
    z-index: -1;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-image: url(./assets/back.jpg) !important;
    background-size: cover;
    text-align: center;
    top: 0;
    bottom: 0;
    filter: blur(3px);
    transform: scale(1.3);
    opacity: .5;
    overflow: hidden;
  }
  canvas{
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
  .header {
    background: none;
    box-shadow: none;
    .top-menu {
      background: none;
    }
  }
  .index-content {
    width: 50%;
    color: #005388;
    font-family: -apple-system, "BlinkMacSystemFont", "Open Sans", "Raleway",
      "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    font-weight: 300;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 65%;
    display: inline-block;
    margin: auto;
    .logo {
      margin-top: 120px;
      // display: none;
      font-size: 60px;
      background: url(./assets/v-logo.png) no-repeat center center;
      background-size: contain;
      height: 40px;
      display: block;
      font-size: 0;
      // font-weight: 100;
      // font-family: "Arial Rounded MT"
      // img {
      //   margin: 0 auto;
      //   height: 120px;
      // }
    }
    h1 {
      // font-weight: 300;
      font-size: 34px;
      color: #005388;
      margin: 80px 0;
      text-align: center;
    }
    .btn-content {
      text-align: center;
      .k-btn {
        display: inline-block;
        width: 120px;
        margin-left: 35px;
        transition: all 0.3s;
        border-radius: 20px;
        cursor: pointer;
        border: none;
      }
      .start {
        // background: #65b87f;
        background: linear-gradient(45deg, #65b87f, #008028);
        color: #fff;
      }
    }
  }
}
</style>
