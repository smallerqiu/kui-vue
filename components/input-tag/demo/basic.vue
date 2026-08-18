<template>
  <InputTag v-model="value" placeholder="输入后按回车" />
</template>
<script setup lang="ts">
import { ref } from "vue";
import { InputTag } from "kui-vue";
const value = ref(["Vue", "TypeScript"]);
</script>
