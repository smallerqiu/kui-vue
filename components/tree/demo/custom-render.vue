<template>
  <Tree :data="data" @expand="expand" :expandedKeys="expandedKeys" showExtra>
    <template v-slot:extra="node">
      <Button size="small" @click="test(node)" style="margin-right: 5px"> test </Button>
    </template>
  </Tree>
</template>
<script setup lang="ts">
import { message, type TreeExpandEvent, type TreeNode } from "kui-vue";
import { ref } from "vue";
const expandedKeys = ref(["0-0"]);
const data = [
  {
    title: "tree 1",
    key: "0-0",
    children: [
      {
        title: "tree 1-1",
        key: "0-0-1",
        children: [
          { title: "leaf 1-1-1", key: "0-0-1-1" },
          {
            title: "leaf 1-1-2",
            key: "0-0-1-2",
            children: [
              { title: "leaf 1-1-2-1", key: "1-1-2-1" },
              { title: "leaf 1-1-2-2", key: "1-1-2-2" },
            ],
          },
        ],
      },
    ],
  },
];
const test = (node: TreeNode) => {
  message.info(node.title as string);
};
const expand = (data: TreeExpandEvent) => {
  console.log(data);
};
</script>
