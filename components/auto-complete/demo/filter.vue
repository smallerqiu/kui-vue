<template>
  <AutoComplete
    v-model="value"
    :options="options"
    :filter-option="startsWith"
    placeholder="仅匹配名称开头"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { AutoComplete, type AutoCompleteOption } from "kui-vue";
const value = ref("");
const options = ["Apple", "Apricot", "Banana", "Blueberry"];
const startsWith = (input: string, option: AutoCompleteOption) =>
  option.value.toLowerCase().startsWith(input.toLowerCase());
</script>
