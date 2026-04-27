<template>
  <Space vertical>
    <TreeSelect
      v-model="value1"
      :tree-data="data"
      :treeExpandedKeys="expandedKeys"
      multiple
      filterable
      clearable
      block
    />
    <br />
    maxTagCount
    <TreeSelect
      v-model="value2"
      :tree-data="data"
      :treeExpandedKeys="expandedKeys"
      multiple
      :maxTagCount="2"
      style="width:100%"
      filterable
      clearable
    />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const expandedKeys = ["0-1", "1-1", "1-1-2", "1-2"];
const value1 = ref(["0-1", "1-1"]);
const value2 = ref(["0-1", "1-1-2", "1-1-2-1", "1-2-1"]);
const data = [
  {
    title: "tree 1",
    key: "0-1",
    children: [
      {
        title: "tree 1-1",
        key: "1-1",
        children: [
          { title: "leaf 1-1-1", key: "1-1-1" },
          {
            title: "leaf 1-1-2",
            key: "1-1-2",
            children: [
              { title: "leaf 1-1-2-1", key: "1-1-2-1" },
              { title: "leaf 1-1-2-2", key: "1-1-2-2" },
            ],
          },
        ],
      },
      {
        title: "tree 1-2",
        key: "1-2",
        children: [
          { title: "leaf 1-2-1", key: "1-2-1" },
          { title: "leaf 1-2-2", key: "1-2-2" },
        ],
      },
      {
        title: "tree 1-3",
        key: "1-3",
        children: [
          { title: "leaf 1-3-1", key: "1-3-1" },
          { title: "leaf 1-3-2", key: "1-3-2" },
        ],
      },
    ],
  },
];
</script>