<cn>
### 勾选
`checkable=true`，即可自动开启多选功能。
> 注意: 默认勾选的依赖为 `key` , 可以通过 `rowKey` 属性进行自定义。 如: `rowKey="ID"`
</cn>
<en>
### Checkbox Selection
Set `checkable=true` to automatically enable multi-selection.
> Note: The default selection dependency is `key`. You can customize it via the `rowKey` attribute, e.g., `rowKey="ID"`.
</en>

```vue
<template>
  <code>selectedKeys: {{ selectedKeys }}</code>
  <Table
    :data="data"
    :columns="columns"
    ref="selection"
    checkable
    v-model:selectedKeys="selectedKeys"
  >
    <template #tags="{ value }">
      <Space>
        <Tag v-for="tag in value" :key="tag" :color="tag == 'Python' ? 'green' : 'blue'">
          {{ tag }}
        </Tag>
      </Space>
    </template>
    <template #action>
      <a href="javascript:;">Edit</a>
      <a href="javascript:;">Delete</a>
    </template>
  </Table>
</template>
<script setup lang="ts">
import { ref } from "vue";
const selectedKeys = ref([]);
const data = [
  {
    key: "0",
    name: "Li Lei",
    gender: 0,
    age: 32,
    address: "Wu Han Guanggu No. 328",
    tags: ["Python", "Java"],
  },
  {
    key: "1",
    name: "Liu Hao",
    gender: 1,
    age: 28,
    address: "Wu Han Hongshan No. 128",
    tags: ["Python", "Java"],
  },
  {
    key: "2",
    name: "Hu Cong",
    gender: 0,
    age: 28,
    address: "Wu Han Nanhu No. 198",
    tags: ["JS", "CSS"],
  },
  {
    key: "3",
    name: "Qiu",
    gender: 1,
    age: 28,
    address: "Wu Han Nanhu No. 188",
    tags: ["Go", "Python"],
  },
];
const columns = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age" },
  { title: "Gender", key: "gender" },
  { title: "Address", key: "address" },
  { title: "Tags", key: "tags" },
];
</script>
```
