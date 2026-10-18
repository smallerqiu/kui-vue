<template>
  <div class="feature-demo">
    <FeatureCard
      v-for="tier in tiers"
      :key="tier"
      :icon="Zap"
      :title="`theme: ${tier}`"
      direction="vertical"
      size="small"
      :theme="tier"
    />
  </div>
</template>

<script setup lang="ts">
import { Zap } from "kui-icons";
import type { SurfaceThemeType } from "kui-vue";

// The feature card paints the same five tiers as the plain card and starts on `fill`; `solid` puts the icon
// plate and the title on the primary, which is the one tier that moves the text, and `plain` drops the box
// around the content entirely. Kept to `direction="vertical"` and one line of copy so the five read as a row
// of the same card rather than five different layouts.
const tiers: SurfaceThemeType[] = ["fill", "outline", "plain", "solid", "dashed"];
</script>

<style scoped>
.feature-demo {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}
</style>
