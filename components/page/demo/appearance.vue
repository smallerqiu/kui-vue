<template>
  <div class="page-demo">
    <div v-for="tier in tiers" :key="tier" class="tier">
      <code>theme: {{ tier }}</code>
      <Page v-model:page="page" :page-size="10" :total="80" :theme="tier" :show-total="false" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SurfaceThemeType } from "kui-vue";
import { ref } from "vue";

// The tier lands on the page-number cells, not on the bar around them: `fill` — the pager's own look — gives
// each cell a pale plate, `outline` and `dashed` edge them instead, `plain` leaves them bare, and `solid`
// plates them on the primary and inverts the digits and the ellipsis. The current page flips to a white cell
// with primary digits under `solid`, and the total line plus the previous/next arrows keep the bar's own
// background in every tier — they are not cells.
const tiers: SurfaceThemeType[] = ["fill", "outline", "plain", "solid", "dashed"];
const page = ref(2);
</script>

<style scoped>
.page-demo {
  display: grid;
  gap: 12px;
}

.tier {
  display: grid;
  gap: 6px;
  justify-items: start;
}
</style>
