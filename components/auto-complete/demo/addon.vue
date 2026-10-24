<template>
  <AutoComplete
    v-model="value"
    addon-before="https://"
    addon-after=".com"
    placeholder="Please input domain"
    :options="['kui', 'kui-pro', 'kui-admin', 'kui-docs']"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref("");
</script>
