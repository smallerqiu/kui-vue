<template>
  <div ref="container" class="scroll-container">
    <div class="scroll-content">Scroll this container</div>
    <BackTop :target="getTarget" :height="80" :right="100" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const container = ref<HTMLElement>();
const getTarget = () => container.value ?? null;
</script>

<style scoped>
.scroll-container {
  height: 180px;
  overflow: auto;
  border: 1px solid var(--kui-control-border);
}

.scroll-content {
  height: 600px;
  padding: 16px;
}
</style>
