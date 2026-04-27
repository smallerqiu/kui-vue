<template>
  <Poptip title="Title" trigger="click" v-model:show="show">
    <template #content>
      <Button @click="test" size="small">Close</Button>
    </template>
    <Button type="primary">Click me</Button>
  </Poptip>
</template>
<script setup lang="ts">
import { ref } from "vue";
const show = ref(false);
const test = () => {
  show.value = false;
};
</script>
