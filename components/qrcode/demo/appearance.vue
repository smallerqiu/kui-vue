<template>
  <Space wrap>
    <div v-for="tier in tiers" :key="tier" class="tier">
      <QRCode value="https://k-ui.cn" :size="104" :theme="tier" />
      <code>theme: {{ tier }}</code>
    </div>
  </Space>
</template>

<script setup lang="ts">
import type { SurfaceThemeType } from "kui-vue";

// A code is a frame around a canvas, so its tiers read the same way an image's do, and its own look is
// `outline` — the ring it draws when nobody writes a theme. The modules inside stay the same ink in every
// tier; only the frame around them changes.
const tiers: SurfaceThemeType[] = ["outline", "fill", "plain", "solid", "dashed"];
</script>

<style scoped>
.tier {
  display: grid;
  gap: 8px;
  justify-items: center;
}
</style>
