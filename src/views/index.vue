<template>
  <Layout class="index">
    <AppHeader />
    <section class="index-content">
      <h1>{{ $t("index.desc") }}</h1>
      <div class="btn-content">
        <Button class="start" type="link" size="large" href="/guide/quick-started">
          {{ $t("index.btn_quick_start") }}
          <Icon :type="ArrowForward" />
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
import { inject } from "vue";
const $t = inject("$t");
</script>
