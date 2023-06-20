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
    <Footer />
  </Layout>
</template>
<script>
import '@/assets/css/home.less'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LogoGitee, CaretForwardCircle } from "kui-icons";
export default {
  data() {
    return {
      LogoGitee, CaretForwardCircle
    }
  },
  components: {
    Header, Footer
  },
  methods: {
    start() {
      this.$router.push("/start/getting-started");
    },
    gitee() {
      window.open("//gitee.com/chuchur/kui-vue");
    },
  },
};
</script>