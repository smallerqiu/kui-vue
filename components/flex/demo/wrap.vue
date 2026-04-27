<template>
  <Flex size="middle" vertical align="flex-start" style="max-width:300px;">
    <Slider v-model="x" :min="0" :max="100" :step="1" />
    <Slider v-model="y" :min="0" :max="100" :step="1" />
    <Flex :size="[x, y]" wrap>
      <Button size="small" v-for="x in 10" :key="x">Wrap</Button>
    </Flex>
  </Flex>
</template>
<script setup lang="ts">
import { ref } from "vue";
const x = ref(12);
const y = ref(15);
</script>