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
<script setup lang="ts">
import { ArrowForward } from "kui-icons";
import { inject } from "vue";
import "../assets/css/home.less";
import AppFooter from "../components/app-footer.vue";
import AppHeader from "../components/app-header.vue";
const $t = inject<(key: string) => string>("$t", (key: string) => key);
</script>
