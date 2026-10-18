<template>
  <Space wrap>
    <Tag v-for="tier in tiers" :key="tier" :theme="tier" closeable>theme: {{ tier }}</Tag>
  </Space>
</template>

<script setup lang="ts">
import type { SurfaceThemeType } from "kui-vue";

// A tag paints the same five tiers as any other surface and starts on `fill`. `solid` is the tier that moves
// the text: the chip goes to the primary and the label and close button invert with it. A `color` written on
// the tag outranks the tier, which the colour demo shows, so this one leaves it out and keeps one chip per
// tier.
const tiers: SurfaceThemeType[] = ["fill", "outline", "plain", "solid", "dashed"];
</script>
