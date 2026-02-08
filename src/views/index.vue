<template>
  <Layout class="index">
    <AppHeader />
    <section class="index-content">
      <h1>一套基于Vue.js的桌面UI组件库</h1>
      <div class="btn-content">
        <Button
          class="start"
          type="link"
          size="large"
          href="/start/getting-started"
        >
          快速上手
          <Icon :type="ArrowForward" />
        </Button>
        <Button
          :icon="LogoGitee"
          size="large"
          class="btn-gitee"
          theme="light"
          href="https://gitee.com/chuchur/kui-vue"
          type="link"
          target="_blank"
        >
          GITEE
        </Button>
      </div>
    </section>
    <AppFooter />
  </Layout>
</template>
<script setup>
import "@/src/assets/css/home.less";
import AppHeader from "@/src/components/AppHeader.vue";
import AppFooter from "@/src/components/AppFooter";
import { LogoGitee, ArrowForward } from "kui-icons";
</script>
