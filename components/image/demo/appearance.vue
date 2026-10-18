<template>
  <Space wrap>
    <div v-for="tier in tiers" :key="tier" class="tier">
      <Image :width="104" :height="104" :theme="tier" src="https://cdn.chuchur.com/upload/demo/test_300.jpg" />
      <code>theme: {{ tier }}</code>
    </div>
  </Space>
</template>

<script setup lang="ts">
import type { SurfaceThemeType } from "kui-vue";

// An image is a frame around a picture, so the tier lands on the frame: `fill` gives it a plate, `outline` and
// `dashed` put a solid or dashed edge around it, `solid` plates the frame on the primary, and `plain` — the
// image's own look — leaves the picture alone. Listed from `plain` because that is what an image does when
// nobody writes a theme.
const tiers: SurfaceThemeType[] = ["plain", "fill", "outline", "solid", "dashed"];
</script>

<style scoped>
.tier {
  display: grid;
  gap: 8px;
  justify-items: center;
}
</style>
