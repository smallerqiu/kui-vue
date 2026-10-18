<template>
  <div class="stat-demo">
    <StatCard
      v-for="tier in tiers"
      :key="tier"
      :title="`theme: ${tier}`"
      :items="items"
      :theme="tier"
      size="small"
    />
  </div>
</template>

<script setup lang="ts">
import type { StatNumberItem, SurfaceThemeType } from "kui-vue";

// The stat card takes the same five tiers as the other cards and starts on `fill`. `solid` is the tier worth
// looking at here: the numbers and their captions both go to the light ink of the plate, and `plain` leaves
// them with no box at all. One short item list, so the only thing moving down the row is the surface.
const tiers: SurfaceThemeType[] = ["fill", "outline", "plain", "solid", "dashed"];
const items: StatNumberItem[] = [{ value: 5872, desc: "订单数" }];
</script>

<style scoped>
.stat-demo {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 12px;
}
</style>
