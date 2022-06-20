<template>
  <Layout class="index">
    <Header />
    <section class="index-content">
      <!-- <div class="logo">K UI</div> -->
      <h1>一套基于Vue.js的桌面UI组件库</h1>
      <div class="btn-content">
        <Button class="start"
          :icon="CaretForwardCircle"
          @click="start"
          size="large">开始使用</Button>
        <Button @click="gitee"
          :icon="LogoGitee"
          size="large"
          type="dashed"
          theme="light">Gitee</Button>
      </div>
    </section>
    <footer class="index-footer">
      <span>©2022 KUI. All rights reserved.</span>
      <a href="https://beian.miit.gov.cn" target="_blank" class="beian"><img src="https://lf9-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/root-web-sites/beian.png" />粤ICP备17111365号-2</a>
      <span>Designed & Developed with love by <a href="https://chuchur.com"
          target="_blank" class="author">chuchur</a></span>
    </footer>
  </Layout>
</template>
<script>
import Header from "./components/header";
import { LogoGitee, CaretForwardCircle } from "kui-icons";
export default {
  data() {
    return {
      LogoGitee, CaretForwardCircle
    }
  },
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