<template>
  <div class="demo-list">
    <Collapse v-for="tier in tiers" :key="tier" :theme="tier" :openKeys="['1']">
      <CollapsePanel key="1" :title="`theme: ${tier}`">
        <div>{{ text }}</div>
      </CollapsePanel>
      <CollapsePanel key="2" title="第二段">
        <div>{{ text }}</div>
      </CollapsePanel>
    </Collapse>
  </div>
</template>

<script setup lang="ts">
import type { SurfaceThemeType } from "kui-vue";

// A collapse paints all five tiers and starts on `outline` rather than the `fill` the cards start on. The tier
// lands on the panel heads: `solid` plates the head on the primary and flips its title, `dashed` puts the head
// row behind a dashed edge, and `plain` leaves the rows with no box at all. Only the first panel of each group
// is opened, so the head — the part that changes — is what the row reads as.
const tiers: SurfaceThemeType[] = ["outline", "fill", "plain", "solid", "dashed"];
const text = "面板内容跟着面板自己的外观走，档位只决定它露出多少。";
</script>

<style scoped>
.demo-list {
  display: grid;
  gap: 16px;
}
</style>
