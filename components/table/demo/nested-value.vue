<template>
  <Table
    :data="data"
    :columns="columns"
    row-key="meta.uid"
    children-column-name="rows.items"
    expand-all-rows
  />
</template>

<script setup lang="ts">
import type { Column } from "kui-vue";

/**
 * 嵌套数据不需要先拍平：列 `key`、`rowKey`、`childrenColumnName` 都可以写成 `a.b` 点路径。
 * 整名优先，所以字段名本身带点号时仍按整名取值；下钻途中缺字段只会渲染成空，不会抛错（kui-react 行为相同）。
 */
interface Member {
  [key: string]: unknown;
  meta: { uid: string };
  profile: { name: string; city?: string };
  tags?: string[];
  rows?: { items: Member[] };
}

const data: Member[] = [
  {
    meta: { uid: "design" },
    profile: { name: "Design Guild", city: "Hangzhou" },
    tags: ["Studio", "Brand"],
    rows: {
      items: [
        { meta: { uid: "ann" }, profile: { name: "Ann", city: "Hangzhou" }, tags: ["Studio"] },
        { meta: { uid: "bob" }, profile: { name: "Bob" } },
      ],
    },
  },
  {
    meta: { uid: "front-end" },
    profile: { name: "Front-end Guild", city: "Shanghai" },
    tags: ["Kui"],
    rows: {
      items: [
        {
          meta: { uid: "cara" },
          profile: { name: "Cara", city: "Shanghai" },
          tags: ["Kui", "Charts"],
        },
      ],
    },
  },
];
const columns: Column[] = [
  { key: "profile.name", title: "Name", sorter: true },
  { key: "profile.city", title: "City" },
  { key: "tags.0", title: "Primary tag" },
  { key: "tags.1", title: "Secondary tag" },
];
</script>
