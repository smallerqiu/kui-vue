<template>
  <Tooltip title="How to behave?">
    <a href="#">Hover me</a>
  </Tooltip>
  <br />
  <br />
  <br />
  <Tooltip :title="clicked ? 'How are you?' : `I'm fine!`">
    <a @click="clicked = !clicked" href="#">Click me!</a>
  </Tooltip>
</template>
<script setup lang="ts">
import { ref } from "vue";
const clicked = ref(false);
</script>