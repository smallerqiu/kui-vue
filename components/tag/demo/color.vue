<template>
  <div>
    <h4 style="margin-bottom: 16px">Presets:</h4>
    <Space wrap>
      <Tag :color="color" v-for="(color, i) in colors" :key="i">
        {{ color }}
      </Tag>
    </Space>
    <h4 style="margin:16px 0">Custom:</h4>
    <Space>
      <Tag color="#c20">#c20</Tag>
      <Tag color="#39f">#39f</Tag>
      <Tag color="#e3f">#e3f</Tag>
      <Tag color="#6c0">#6c0</Tag>
    </Space>
  </div>
</template>
<script setup lang="ts">
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