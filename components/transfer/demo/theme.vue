<template>
  <Space vertical block>
    <RadioGroup v-model="theme" type="button" :options="themes" />
    <Transfer v-model="selected" searchable :theme="theme" :data-source="items" />
  </Space>
</template>

<script setup lang="ts">
import type { SurfaceThemeType } from "kui-vue";
import { ref } from "vue";

// The panels paint five tiers; `underlined` belongs to the controls and would land back on `outline`.
const theme = ref<SurfaceThemeType>("outline");
const themes = [
  { label: "Outline", value: "outline" },
  { label: "Fill", value: "fill" },
  { label: "Plain", value: "plain" },
  { label: "Solid", value: "solid" },
  { label: "Dashed", value: "dashed" },
];
const selected = ref<(string | number)[]>([4]);
const items = ["Design", "Development", "Testing", "Deployment"].map((title, index) => ({
  key: index + 1,
  title,
}));
</script>
