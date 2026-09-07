<template>
  <p>Status: {{ fixed ? "fixed" : "reset" }}</p>
  <Affix @change="fixed = $event" :offsetTop="200">
    <Button type="primary">200px to affix top</Button>
  </Affix>
</template>
<script setup lang="ts">
import { ref } from "vue";

const fixed = ref(false);
</script>
