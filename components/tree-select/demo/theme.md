<cn>
### 奇葩的定义
一些奇奇怪怪的东西
 </cn>
<en>
### Weird Definition
Some strange and unusual things.
 </en>

```vue
<template>
  <Space vertical align="start" block style="width: 300px;max-width:100%;">
    <TreeSelect shape="circle" :treeData="data" placeholder="A circle Input..." block />
    <TreeSelect
      shape="circle"
      :icon="Search"
      :treeData="data"
      block
      placeholder="A circle Input with icon"
    />
    <TreeSelect :treeData="data" block placeholder="No Arrow" :showArrow="false" />
    <TreeSelect :treeData="data" block placeholder="Custom Arrow" :arrowIcon="CaretDown" />
    <TreeSelect filterable block theme="solid" :treeData="data" placeholder="Solid theme" />
    <TreeSelect :bordered="false" :treeData="data" block placeholder="No Border" theme="solid"/>
  </Space>
</template>
<script setup>
import { Search, CaretDown } from "kui-icons";

const value = ["0-1", "1-1"];
const data = [
  {
    title: "tree 1",
    key: "0-1",
    children: [
      {
        title: "tree 1-1",
        key: "1-1",
      },
    ],
  },
];
</script>
```
