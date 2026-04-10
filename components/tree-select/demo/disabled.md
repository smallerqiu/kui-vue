<cn>
### 禁用
禁用状态
 </cn>
<en>
### Disabled
Disabled state.
 </en>

```vue
<template>
  <Space vertical>
    <TreeSelect
      v-model="value1"
      :tree-data="data"
      :treeExpandedKeys="expandedKeys"
      filterable
      disabled
      block
    />
    <TreeSelect
      v-model="value1"
      :tree-data="data"
      :treeExpandedKeys="expandedKeys"
      multiple
      filterable
      disabled
      block
    />
    disabled items
    <TreeSelect
      v-model="value2"
      :tree-data="data"
      :treeExpandedKeys="expandedKeys"
      multiple
      treeCheckable
      :maxTagCount="2"
      filterable
    />
    clearable=false
    <TreeSelect
      v-model="value2"
      :tree-data="data"
      :treeExpandedKeys="expandedKeys"
      multiple
      treeCheckable
      :maxTagCount="2"
      filterable
      :clearable="false"
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
        disabled: true,
        children: [
          { title: "leaf 1-1-1", key: "1-1-1" },
          {
            title: "leaf 1-1-2",
            key: "1-1-2",
            children: [
              { title: "leaf 1-1-2-1", key: "1-1-2-1" },
              { title: "leaf 1-1-2-2", disabled: true, key: "1-1-2-2" },
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
