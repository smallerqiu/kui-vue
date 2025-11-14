<template>
  <Layout class="index">
    <Header />
    <section class="index-content">
      <!-- <div class="logo">K UI</div> -->
      <h1>一套基于Vue.js的桌面UI组件库</h1>
      <div class="btn-content">
        <Button class="start" :icon="CaretForwardCircle" size="large" @click="start">
          开始使用
        </Button>
        <Button :icon="LogoGitee" size="large" class="btn-gitee" theme="light" @click="gitee">
          Gitee
        </Button>
      </div>
    </section>
    <Footer />
  </Layout>
</template>
<script>
import '@/src/assets/css/home.less'
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { LogoGitee, CaretForwardCircle } from "kui-icons";
export default {
  components: {
    Header, Footer
  },
  data() {
    return {
      LogoGitee, CaretForwardCircle
    }
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