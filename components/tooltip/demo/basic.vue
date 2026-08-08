<template>
  <Space vertical>
    <Tooltip title="How to behave?">
      <a href="#">Hover me</a>
    </Tooltip>
    <Tooltip :title="clicked ? 'How are you?' : `I'm fine!`">
      <a @click="clicked = !clicked" href="#">Click me!</a>
    </Tooltip>
    <Tooltip title="Default show" :show="true">
      <a href="#">Default show</a>
    </Tooltip>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const clicked = ref(false);
</script>
