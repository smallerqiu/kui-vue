<template>
  <Space vertical block style="width: 220px; max-width: 100%">
    <div v-for="tier in tiers" :key="tier" class="tier">
      <code>theme: {{ tier }}</code>
      <InputNumber :theme="tier" :modelValue="42" />
    </div>
  </Space>
</template>
<script setup lang="ts">
import type { ThemeType } from "kui-vue";

// A number input is a text control, so it paints all six tiers: `fill` — what it does when nobody writes a
// theme — plates the box, `outline` and `dashed` put a solid or dashed edge on it instead, `plain` leaves it
// bare, `solid` plates it on the primary and inverts the digits, the placeholder and the steppers, and
// `underlined` keeps only the bottom rule. The steppers are part of the box, so they follow the tier.
const tiers: ThemeType[] = ["fill", "outline", "plain", "solid", "dashed", "underlined"];
</script>

<style scoped>
.tier {
  display: grid;
  gap: 4px;
  justify-items: start;
}
</style>
