<template>
  <Layout class="index">
    <Header />
    <section class="index-content">
      <div class="logo">K UI</div>
      <h1>一套基于Vue.js的桌面UI组件库</h1>
      <div class="btn-content">
        <Button class="start" @click="start" size="large">开始使用</Button>
        <Button @click="gitee" icon="logo-github" size="large" type="dashed" theme="light">Gitee</Button>
      </div>
    </section>
    <footer class="index-footer">
      <p>Copyright ©2009-2018
        <a href="http://www.chuchur.com">禅境花园</a> by chuchur <a href="https://beian.miit.gov.cn" target="_blank">粤ICP备17111365号-2</a> </p>
    </footer>
  </Layout>
</template>
<script>
import Header from "./components/header";
export default {
  components: {
    Header,
  },
  methods: {
    start() {
      this.$router.push("/docs/start");
    },
    gitee() {
      window.open("//gitee.com/chuchur/kui-vue");
    },
  },
};
</script>