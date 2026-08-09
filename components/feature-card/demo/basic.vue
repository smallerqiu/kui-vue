<template>
  <div class="feature-demo">
    <FeatureCard
      :icon="Zap"
      title="开箱即用"
      desc="简洁的 API 与完善的 TypeScript 类型，让开发过程更高效。"
    />
    <FeatureCard
      :icon="Palette"
      title="灵活主题"
      desc="通过设计变量快速调整品牌色彩与组件视觉风格。"
    />
  </div>
</template>

<script setup lang="ts">
import { Palette, Zap } from "kui-icons";
</script>

<style scoped>
.feature-demo {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}
</style>
