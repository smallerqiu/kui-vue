<template>
  <TypographyParagraph v-model="text" editable copyable />
</template>
<script setup lang="ts">
import { ref } from "vue";
const text = ref("Click the edit icon to update this sentence.");
</script>
