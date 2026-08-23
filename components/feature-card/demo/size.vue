<template>
  <Space vertical block :size="12">
    <FeatureCard v-for="size in sizes" :key="size" :icon="Zap" :size="size" :title="`${size} card`" desc="Icon, spacing and typography scale together." theme="outline" />
  </Space>
</template>
<script setup lang="ts">
import { Zap } from "kui-icons";
import type { SizeType } from "kui-vue";
const sizes: SizeType[] = ["small", "medium", "large"];
</script>
