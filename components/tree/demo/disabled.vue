<template>
  <Tree
    :data="data"
    checkable
    @check="check"
    :checkedKeys="checkedKeys"
    :expandedKeys="expandedKeys"
  />
</template>
<script setup lang="ts">
import type { TreeNode } from "kui-vue";

const expandedKeys = ["0-0", "1-0", "1-1"];
const checkedKeys = ["1-0-0"];
const data = [
  {
    title: "tree 1",
    key: "0-0",
    children: [
      {
        title: "tree 1-1",
        key: "1-0",
        disabled: true,
        children: [
          { title: "leaf 1-1-1", key: "1-0-0", disabled: true },
          { title: "leaf 1-1-2", key: "1-0-1" },
        ],
      },
      {
        title: "tree 1-2",
        key: "1-1",
        children: [
          { title: "leaf 1-2-1", key: "1-2-1" },
          { title: "leaf 1-2-2", key: "1-2-2" },
        ],
      },
    ],
  },
];
const check = (data: TreeNode) => {
  console.log(data);
};
</script>
