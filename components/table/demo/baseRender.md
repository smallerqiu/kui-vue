<cn>
### 基本用法(使用render)
使用自定义`render`来初始化表格
</cn>
<en>
### Basic Usage (Using render)
Use custom `render` to initialize the table.
</en>

```vue
<template>
  <Table :data="data" :columns="columns" />
</template>
<script setup lang="ts">
import { modal, Icon, Space, Button, Tag } from "kui-vue";
import { Sunny, Moon } from "kui-icons";
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
  {
    title: "Gender",
    key: "gender",
    render: (h, { gender }, i) => {
      return h(Icon, {
        type: gender == 1 ? Sunny : Moon,
        color: gender == 1 ? "blue" : "#f50cff",
        size: 15,
      });
    },
  },
  { title: "Address", key: "address" },
  {
    title: "Tags",
    key: "tags",
    render: (h, { tags }, i) => {
      return h(
        Space,
        {},
        {
          default: () =>
            tags.map(function (tag) {
              return h(
                Tag,
                {
                  color: tag == "Python" ? "green" : "blue",
                },
                { default: () => tag }
              );
            }),
        }
      );
    },
  },
  {
    title: "Operate",
    key: "action",
    render: (h, record, i) => {
      return h(
        Button,
        {
          size: "small",
          onClick: (e) => {
            modal.info({
              title: "More",
              content: `My name is ${record.name}`,
            });
          },
        },
        { default: () => "more" }
      );
    },
  },
];
</script>
```
