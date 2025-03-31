<template>
  <Layout class="index">
    <Header />
    <section class="index-content">
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

<script setup>
import '@/assets/css/home.less'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LogoGitee, CaretForwardCircle } from "kui-icons";
import { useRouter } from 'vue-router';

const router = useRouter();

const start = () => {
  router.push("/start/getting-started");
};

const gitee = () => {
  window.open("//gitee.com/chuchur/kui-vue");
};
</script>