<cn>
### 奇葩的定义
一些奇奇怪怪的东西
</cn>

```vue
<template>
  <Space vertical align="start" block style="width: 300px;max-width:100%;">
    <Select shape="circle" :options="options" placeholder="我是一个圆角" />
    <Select
      shape="circle"
      :icon="Search"
      :options="options"
      placeholder="我多了一个图标"
    />
    <Select
      filterable
      theme="light"
      :options="options"
      placeholder="我的背景色是浅色"
    />
    <Select
      :options="options"
      placeholder="我没有下拉箭头"
      :showArrow="false"
    />
    <Select
      :options="options"
      placeholder="我的下拉箭头不一样"
      :arrowIcon="CaretDown"
    />
    <Select
      multiple
      v-model="value"
      filterable
      theme="light"
      :options="options"
    />
    <Select :bordered="false" :options="options" placeholder="我没有边框" />
  </Space>
</template>
<script setup>
import { Search, CaretDown } from "kui-icons";

const value = ["1", "3"];
const options = [
  { label: "Apple", value: "1" },
  { label: "Orange", value: "2" },
  { label: "Banana", value: "3" },
  { label: "Pear", value: "4" },
];
</script>
```
