<template>
  <Space vertical block style="width: 300px; max-width: 100%">
    <RadioGroup v-model="size" :options="sizes" type="button" />
    <TreeSelect
      :size="size"
      v-model="value"
      :tree-data="data"
      treeShowLine
      :treeExpandedKeys="expandedKeys"
      block
    />
    <TreeSelect
      :size="size"
      v-model="value1"
      :tree-data="data"
      treeShowLine
      :treeExpandedKeys="expandedKeys"
      block
      multiple
    />
    <TreeSelect
      :size="size"
      v-model="value1"
      :tree-data="data"
      treeShowLine
      :treeExpandedKeys="expandedKeys"
      block
      multiple
      :maxTagCount="2"
    />
  </Space>
</template>
<script setup lang="ts">
import type { SizeType } from "kui-vue";
import { ref } from "vue";
const sizes = [
  { value: "large", label: "Large" },
  { value: "default", label: "Default" },
  { value: "small", label: "Small" },
];
const size = ref<SizeType>("medium");

const expandedKeys = ["0-1", "1-1", "1-1-2", "1-2"];
const value = ref("0-1");
const value1 = ref(["0-1"]);
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
