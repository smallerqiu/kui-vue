<cn>
### 奇葩的定义
一些奇奇怪怪的东西
</cn>

```vue
<template>
  <Space vertical align="start" block style="width: 300px;max-width:100%;">
    <TreeSelect shape="circle" :treeData="data" placeholder="我是一个圆角" block />
    <TreeSelect shape="circle" block :icon="Search" :treeData="data" placeholder="我多了一个图标" />
    <TreeSelect filterable block theme="light" :treeData="data" placeholder="我的背景色是浅色" />
    <TreeSelect :treeData="data" block placeholder="我没有下拉箭头" :showArrow="false" />
    <TreeSelect :treeData="data" block placeholder="我的下拉箭头不一样" :arrowIcon="CaretDown" />
    <TreeSelect :bordered="false" :treeData="data" block placeholder="我没有边框" />
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
