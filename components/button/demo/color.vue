<template>
  <Space size="small" wrap>
    <Space size="small" wrap>
      <Button v-for="color in colors" :color="color" :key="color" theme="solid">Solid</Button>
    </Space>
    <Space size="small" wrap>
      <Button v-for="color in colors" :color="color" :key="color" theme="outline">Outline</Button>
    </Space>
    <Space size="small" wrap>
      <Button v-for="color in colors" :color="color" :key="color" theme="dashed">Dashed</Button>
    </Space>
  </Space>
</template>
<script setup lang="ts">
const colors = [
  "default",
  "red",
  "orange",
  "yellow",
  "olive",
  "green",
  "teal",
  "blue",
  "volcano",
  "violet",
  "cyan",
  "gold",
  "lime",
  "magenta",
  "purple",
  "pink",
  "brown",
] as const;
</script>
