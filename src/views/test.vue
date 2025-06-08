<template>
  <div class="demo-color-picker">
    <ColorPicker v-model:value="color1">
      <Button type="primary">Open</Button>
    </ColorPicker>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const color1 = ref('#3a95ff')
</script>
