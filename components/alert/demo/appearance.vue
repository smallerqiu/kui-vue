<template>
  <Space vertical block>
    <Alert v-for="tier in tiers" :key="tier" type="info" :theme="tier">theme: {{ tier }}</Alert>
  </Space>
</template>

<script setup lang="ts">
import type { SurfaceThemeType } from "kui-vue";

// The alert's colour comes from `type` and the tier only decides how much of it is shown, so the five rows
// below keep one `type` and change nothing else: `fill` — the alert's own look — is that colour as a pale
// plate, `solid` spreads the same colour over the whole bar and inverts its text, icon and close button,
// `outline` and `plain` drop the plate and keep the border, `dashed` swaps that border for a dashed one.
// An `error` alert stays red under `solid`; the primary is not involved.
const tiers: SurfaceThemeType[] = ["fill", "outline", "plain", "solid", "dashed"];
</script>
