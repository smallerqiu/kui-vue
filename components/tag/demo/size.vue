<template>
  <Space vertical>
    <RadioGroup v-model="size" type="button" :options="sizes" />
    <RadioGroup v-model="shape" type="button" :options="shapes" />
    <RadioGroup v-model="theme" type="button" :options="themes" />
    <Tag v-for="x in 3" :key="x" :size="size" :shape="shape" :theme="theme">Tag{{ x }}</Tag>
  </Space>
</template>
<script setup lang="ts">
import type { ShapeType, SizeType, ThemeType } from "kui-vue";
import { ref } from "vue";
const size = ref<SizeType>("small");
const shape = ref<ShapeType>("round");
const theme = ref<ThemeType>("default");
const sizes = [
  { label: "Large", value: "large" },
  { label: "Middle", value: "middle" },
  { label: "small", value: "small" },
];
const shapes = [
  { label: "Circle", value: "circle" },
  { label: "Square", value: "square" },
];
const themes = [
  { label: "Fill", value: "fill" },
  { label: "Outline", value: "outline" },
];
</script>
