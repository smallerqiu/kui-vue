<cn>
### 动态控制表格属性
选择不同配置组合查看效果。
</cn>

```vue
<template>
  <div>
    <Space>
      Size:<RadioGroup v-model="size" size="small">
        <RadioButton value="large" label="Large" />
        <RadioButton value="default" label="Default" />
        <RadioButton value="small" label="Small" />
      </RadioGroup>
      Border: <k-switch v-model="bordered" />
      Loading:
      <k-switch v-model="loading" />
      Checkbox: <k-switch v-model="checkable" />
      Empty:
      <k-switch v-model="empty" @change="setEmpty" />
    </Space>
    <Table
      :data="dataSource"
      :columns="columns"
      :loading="loading"
      :size="size"
      :bordered="bordered"
      :checkable="checkable"
    >
      <template #header> <div>header</div> </template>
      <template #footer> <div>footer</div> </template>
      <template #tags="{ value }">
        <Space>
          <Tag
            v-for="tag in value"
            :key="tag"
            :color="tag == 'Python' ? 'green' : 'blue'"
          >
            {{ tag }}
          </Tag>
        </Space>
      </template>
      <template #gender="{ value }">
        <Icon
          :type="value == 1 ? Moon : Sunny"
          :color="value == 1 ? 'blue' : '#f50cff'"
          size="15"
        />
      </template>
      <template #action>
        <Button size="small">test</Button>
      </template>
    </Table>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Moon, Sunny } from "kui-icons";
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
    name: "Chuchur",
    gender: 1,
    age: 28,
    address: "Wu Han Nanhu No. 188",
    tags: ["Go", "Python"],
  },
];
const columns = [
  { title: "Name", key: "name" },
  { title: "Age", key: "age", sorter: true },
  { title: "Gender", key: "gender" },
  { title: "Address", key: "address" },
  { title: "Tags", key: "tags" },
  { title: "Operate", key: "action" },
];
const size = ref("default");
const bordered = ref(true);
const checkable = ref(false);
const loading = ref(false);
const empty = ref(false);
const dataSource = ref(data);

const setEmpty = (empty) => {
  dataSource.value = empty ? [] : data;
};
</script>
```
