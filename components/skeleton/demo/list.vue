<template>
  <Button :disabled="loading" @click="showSkeleton">Reload</Button>
  <br />
  <br />
  <Space class="demo-skeleton-list" vertical block>
    <Card class="demo-skeleton-item" v-for="i in 3" :key="i">
      <Skeleton avatar :loading="loading" :rows="2" animated>
        <CardMeta :avatar="item.name" :title="item.name" :description="item.intro"> </CardMeta>
        <p class="desc">{{ item.desc }}</p>
      </Skeleton>
    </Card>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const loading = ref(false);

const item = {
  name: "KUI Design",
  intro: "KUI is a desktop UI component library based on Vue.js",
  desc: "Dozens of useful and aesthetically pleasing components, a very user-friendly API suitable for developers of any skill level, comprehensive documentation, and support for Electron, SSR, Nuxt.js...",
};
const showSkeleton = () => {
  ((loading.value = true),
    setTimeout(() => {
      loading.value = false;
    }, 3000));
};
</script>
<style>
.demo-skeleton-list {
  font-size: 13px;
}
.demo-skeleton-item {
  padding: 15px 20px;
  border-bottom: 1px solid var(--kui-color-border);
}
.demo-skeleton-list h4 {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}
.demo-skeleton-list .sub-desc {
  color: #999;
}
.demo-skeleton-list .desc {
  margin-top: 15px;
  line-height: 25px;
  margin: 0;
}
</style>
