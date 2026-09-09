<template>
  <Space vertical block>
    <Space>
      Active :
      <Switch v-model="active" />
    </Space>
    <code>Presets</code>
    <Space wrap>
      <Badge :color="color" :active="active" :text="color" v-for="color in colors" :key="color" />
    </Space>
    <br />
    <code>Custom</code>
    <div v-for="color in custom" :key="color">
      <Badge :color="color" :text="color" :active="active" />
    </div>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";

const active = ref(false);
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
