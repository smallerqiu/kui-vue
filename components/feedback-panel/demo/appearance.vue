<template>
  <div class="demo-list">
    <FeedbackPanel
      v-for="tier in tiers"
      :key="tier"
      :theme="tier"
      kind="positive"
      :heading="`theme: ${tier}`"
      description="状态色带和图标不受档位影响，只有面板自己铺多少。"
    >
      <template #actions>
        <Button type="primary">继续</Button>
        <Button>查看设置</Button>
      </template>
    </FeedbackPanel>
  </div>
</template>

<script setup lang="ts">
import type { SurfaceThemeType } from "kui-vue";

// A feedback panel paints all five tiers and starts on `outline`. The tier only decides how much of the panel
// shows: the four-pixel status stripe on the left and the `kind` colours stay put in every tier, while `solid`
// plates the panel itself on the primary and moves the heading and the actions onto the light ink of the plate.
const tiers: SurfaceThemeType[] = ["outline", "fill", "plain", "solid", "dashed"];
</script>

<style scoped>
.demo-list {
  display: grid;
  gap: 16px;
}
</style>
