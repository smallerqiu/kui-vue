<template>
  <div>
    <Slider v-model="size" :max="50" />
    <Space :size="size">
      <Button type="primary">Primary</Button>
      <Button type="danger">Danger</Button>
      <Button>Default</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </Space>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const size = ref(12);
</script>