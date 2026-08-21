<template>
  <div class="demo-list">
    <CheckCardGroup
      v-model="outline"
      theme="outline"
      shape="square"
      size="small"
      :options="items"
    />
    <CheckCardGroup v-model="fill" theme="fill" shape="circle" size="large" :options="items" />
    <CheckCardGroup v-model="disabled" disabled :options="items" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const outline = ref("basic");
const fill = ref("pro");
const disabled = ref("basic");
const items = [
  { value: "basic", title: "Basic", description: "Essential features" },
  { value: "pro", title: "Pro", description: "Advanced capabilities" },
];
</script>

<style scoped>
.demo-list {
  display: grid;
  gap: 24px;
}
</style>
