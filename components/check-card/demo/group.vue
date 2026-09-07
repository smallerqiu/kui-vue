<template>
  <div class="demo-list">
    <CheckCardGroup v-model="type" :options="options" />
    <TypographyText type="secondary">已选择：{{ type }}</TypographyText>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { CheckCardValue } from "kui-vue";

const type = ref<CheckCardValue>("personal");
const options = [
  { value: "personal", title: "个人版", description: "适合个人项目和学习使用" },
  { value: "team", title: "团队版", description: "适合小型团队协作" },
  { value: "enterprise", title: "企业版", description: "提供企业级管理能力" },
];
</script>

<style scoped>
.demo-list {
  display: grid;
  gap: 16px;
}
</style>
