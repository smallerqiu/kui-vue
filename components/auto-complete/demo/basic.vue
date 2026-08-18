<template>
  <AutoComplete
    v-model="value"
    clearable
    placeholder="搜索框架"
    :options="['Vue', 'React', 'Solid', 'Svelte']"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { AutoComplete } from "kui-vue";
const value = ref("");
</script>
