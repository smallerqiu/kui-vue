<template>
  <div class="feature-demo">
    <FeatureCard
      :icon="Code"
      title="显示边框"
      desc="设置 bordered 后显示边框，适合放置在普通页面背景中。"
      bordered
    />
    <FeatureCard
      :icon="Code"
      title="隐藏边框"
      desc="默认不显示边框，可将卡片放在具有层次的容器背景中。"
    />
  </div>
</template>

<script setup lang="ts">
import { Code } from "kui-icons";
</script>

<style scoped>
.feature-demo {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  padding: 16px;
  background: var(--kui-color-bg);
}
</style>
