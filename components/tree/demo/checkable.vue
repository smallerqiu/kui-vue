<template>
  <Checkbox v-model="checkStrictly">父子节点不关联</Checkbox>
  <br />
  <br />
  <Tree
    :data="data"
    checkable
    :checkedKeys="checkedKeys"
    :expandedKeys="expandedKeys"
    @check="check"
    :checkStrictly="checkStrictly"
  />
</template>
<script setup lang="ts">
import type { TreeNode } from "kui-vue";
import { ref } from "vue";
const checkStrictly = ref(false);
const checkedKeys = ["1-1", "aa"];
const expandedKeys = ["1-1", "1-1-2", "1-2", "0-1"];
const data = [
  {
    title: "tree 1",
    key: "0-1",
    children: [
      {
        title: "tree 1-1",
        key: "1-1",
        disabled: true,
        children: [
          { title: "leaf 1-1-1", key: "1-1-1" },
          { title: "leaf 1-1-2", key: "1-1-2" },
        ],
      },
      {
        title: "tree 1-2",
        key: "1-2",
        children: [
          { title: "leaf 1-2-1", key: "aa" },
          { title: "leaf 1-2-2", key: "bb" },
        ],
      },
    ],
  },
];
const check = (data: TreeNode) => {
  console.log(data);
};
</script>
