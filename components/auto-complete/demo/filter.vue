<template>
  <AutoComplete
    v-model="value"
    :options="options"
    :filter-option="startsWith"
    placeholder="Match names starting with only"
  />
</template>
<script setup lang="ts">
import { AutoComplete, type AutoCompleteOption } from "kui-vue";
import { ref } from "vue";
const value = ref("");
const options = ["Apple", "Apricot", "Banana", "Blueberry"];
const startsWith = (input: string, option: AutoCompleteOption) =>
  option.value.toLowerCase().startsWith(input.toLowerCase());
</script>
