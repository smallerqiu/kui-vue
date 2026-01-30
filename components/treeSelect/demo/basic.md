<cn>
### 基础用法
最简单的用法。
 </cn>
<en>
### Basic Usage
The simplest usage.
</en>

```vue
<template>
  <Space vertical>
    <code>v-model: {{ value }}</code>
    <TreeSelect
      v-model="value"
      :tree-data="data"
      tree-showLine
      :treeExpandedKeys="expandedKeys"
      block
    />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const expandedKeys = ["0-1", "1-1", "1-1-2", "1-2"];
const value = ref("0-1");
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
```
