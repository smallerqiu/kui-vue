<template>
  <Affix :offsetTop="top">
    <Button type="primary" @click="top += 10">Affix top ({{ top }}px)</Button>
  </Affix>
</template>
<script setup lang="ts">
import { ref } from "vue";
const top = ref(100);
</script>
