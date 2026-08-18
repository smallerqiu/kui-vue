<template>
  <Space vertical block>
    <Card v-for="size in sizes" :key="size" :size="size" :title="`${size} card`" bordered>
      Card content
    </Card>
  </Space>
</template>

<script setup lang="ts">
import type { SizeType } from "kui-vue";

const sizes: SizeType[] = ["small", "medium", "large"];
</script>
