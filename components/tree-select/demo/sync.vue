<template>
  <TreeSelect
    :tree-data="data"
    @treeLoadData="loadData"
    v-model:treeExpandedKeys="expandedKeys"
    @expand="expand"
    block
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
const data = ref([
  { title: "Expand to load", key: "0-0" },
  { title: "Expand to load", key: "0-1" },
  { title: "Tree Node", isLeaf: true, key: "0-2" },
]);
const expandedKeys = ref([]);
const expand = (data) => {
  console.log(data);
};
const insertChildren = (nodes, targetKey, childrenData) => {
  for (const node of nodes) {
    if (node.key === targetKey) {
      // 找到目标节点，插入数据
      node.children = childrenData; // for vue 3
      return true; // 插入成功
    }

    // 递归查找子节点
    if (node.children && node.children.length > 0) {
      if (insertChildren(node.children, targetKey, childrenData)) {
        return true; // 子树中找到并插入成功
      }
    }
  }
  return false; // 未找到
};

let loadCount = 0;
const loadData = (node) => {
  return new Promise((resolve, reject) => {
    loadCount += 1;
    //模拟异步请求
    setTimeout(() => {
      let fetchedChildren = [
        { title: "Child Node", isLeaf: loadCount >= 2, key: node.key + "-0" },
        { title: "Child Node", isLeaf: loadCount >= 3, key: node.key + "-1" },
      ];
      insertChildren(data.value, node.key, fetchedChildren);
      resolve();
    }, 1000);
  });
};
</script>