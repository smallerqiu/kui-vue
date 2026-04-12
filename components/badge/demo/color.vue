<template>
  <Space vertical block>
    Presets
    <Space wrap>
      <Badge :color="color" :text="color" v-for="color in colors" :key="color" />
    </Space>
    <br />
    Custom
    <div v-for="color in custom" :key="color">
      <Badge :color="color" :text="color" />
    </div>
  </Space>
</template>
<script setup lang="ts">
const custom = ["#c20", "#39f", "#e3f", "#6c0"];
const colors = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "magenta",
  "volcano",
  "gold",
  "lime",
];
</script>