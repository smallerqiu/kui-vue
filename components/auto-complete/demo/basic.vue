<template>
  <AutoComplete
    v-model="value"
    clearable
    placeholder="Please input"
    :options="['Vue', 'React', 'Solid', 'Svelte']"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
</script>
