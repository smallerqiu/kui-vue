<script setup lang="ts">
import { Ripple } from "kui-vue";
</script>

<template>
  <Ripple
    trigger="hover"
    :amplitude="0.8"
    :rings="4"
    :wavelength="48"
    :refraction="72"
    :dispersion="0.35"
    :style="{
      minHeight: '220px',
    }"
  >
    <Card style="padding: 32px; height: 220px">
      <h3 style="margin: 0 0 8px">Hover Ripple</h3>
      <p style="margin: 0; color: var(--kui-color-text-secondary)">
        移动指针会连续产生较轻的水波轨迹。
      </p>
    </Card>
  </Ripple>
</template>
