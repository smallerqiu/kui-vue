<cn>
### 可勾选
使用勾选框实现多选功能。
 </cn>
<en>
### Checkable
Use checkboxes to enable multi-selection.
 </en>

```vue
<template>
  <Space vertical>
    <Checkbox v-model="treeCheckStrictly">TreeCheckStrictly</Checkbox>
    <TreeSelect
      v-model="value"
      :tree-data="data"
      :treeExpandedKeys="expandedKeys"
      multiple
      block
      treeCheckable
      :treeCheckStrictly="treeCheckStrictly"
    />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const expandedKeys = ["0-1", "1-1", "1-1-2", "1-2"];
const value = ref([]);
const treeCheckStrictly = ref(false);
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
