<template>
  <Transfer
    v-model="selected"
    searchable
    :data-source="items"
    :filter-option="filterByRole"
    :titles="['候选成员', '已加入']"
  >
    <template #item="{ item }">
      <span class="member">
        <strong>{{ item.title }}</strong>
        <Tag size="small" theme="plain">{{ roles[item.key] }}</Tag>
      </span>
    </template>
    <template #footer="{ direction }">
      {{ direction === "left" ? "可选择成员" : "当前项目成员" }}
    </template>
  </Transfer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const selected = ref<(string | number)[]>([2]);
const roles: Record<string | number, string> = {
  1: "Design",
  2: "Frontend",
  3: "Backend",
  4: "QA",
};
const items = [
  { key: 1, title: "Ava" },
  { key: 2, title: "Leo" },
  { key: 3, title: "Mia" },
  { key: 4, title: "Noah" },
];
const filterByRole = (keyword: string, item: { key: string | number; title: string }) =>
  `${item.title} ${roles[item.key]}`.toLowerCase().includes(keyword.toLowerCase());
</script>

<style scoped>
.member {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 8px;
}
</style>
