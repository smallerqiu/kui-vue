<template>
  <Affix :offsetBottom="bottom">
    <Button type="primary" @click="bottom += 10">120px to affix bottom</Button>
  </Affix>
</template>
<script setup lang="ts">
import { ref } from "vue";
const bottom = ref(120);
</script>