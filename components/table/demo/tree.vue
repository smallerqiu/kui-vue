<template>
  <Table
    v-model:expanded-keys="expandedKeys"
    bordered
    checkable
    expand-row-by-click
    :data="data"
    :columns="columns"
  >
    <template #status="{ value }">
      <Tag :color="value === 'active' ? 'green' : 'gold'">{{ value }}</Tag>
    </template>
  </Table>
</template>

<script setup lang="ts">
import type { Column } from "kui-vue";
import { ref } from "vue";

interface Department {
  [key: string]: unknown;
  key: string;
  name: string;
  owner: string;
  members: number;
  status: "active" | "planning";
  children?: Department[];
}

const expandedKeys = ref(["product"]);
const data: Department[] = [
  {
    key: "product",
    name: "Product Center",
    owner: "Alice",
    members: 24,
    status: "active",
    children: [
      { key: "design", name: "Design Team", owner: "Mia", members: 8, status: "active" },
      {
        key: "research",
        name: "Research Team",
        owner: "Leo",
        members: 6,
        status: "planning",
        children: [
          { key: "ai-lab", name: "AI Lab", owner: "Noah", members: 3, status: "planning" },
        ],
      },
    ],
  },
  {
    key: "engineering",
    name: "Engineering Center",
    owner: "Jack",
    members: 36,
    status: "active",
    children: [
      { key: "frontend", name: "Frontend Team", owner: "Emma", members: 12, status: "active" },
      { key: "backend", name: "Backend Team", owner: "Ethan", members: 16, status: "active" },
    ],
  },
];
const columns: Column[] = [
  { key: "name", title: "Department", width: 240 },
  { key: "owner", title: "Owner" },
  { key: "members", title: "Members", sorter: true },
  { key: "status", title: "Status" },
];
</script>
