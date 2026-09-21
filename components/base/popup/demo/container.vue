<script setup lang="ts">
import { ref } from "vue";
import { Button, Popup } from "kui-vue";
const container = ref<HTMLDivElement | null>(null);
const getContainer = () => container.value;
</script>
<template>
  <div
    ref="container"
    style="
      position: relative;
      min-height: 200px;
      padding: 24px;
      border: 1px dashed var(--kui-color-border);
    "
  >
    <Popup :get-popup-container="getContainer" match-trigger-width>
      <Button style="width: 240px; max-width: 100%">Custom container</Button>
      <template #overlay>Mounted inside this container.</template>
    </Popup>
  </div>
</template>
