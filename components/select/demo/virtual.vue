<template>
  <Select
    v-model="value"
    virtual
    filterable
    block
    :options="options"
    :item-height="33"
    :overscan="6"
    placeholder="Select from 10,000 options"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

const value = ref<number>();
const options = Array.from({ length: 10000 }, (_, index) => ({
  value: index + 1,
  label: `Option ${index + 1}`,
}));
</script>
