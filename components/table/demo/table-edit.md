<cn>
### 可编辑单元格
带单元格编辑功能的表格。
</cn>

```vue
<template>
  <Button @click="add">Add</Button>
  <Table :data="data" :columns="columns" bordered :sticky="52">
    <template #name="{ value, record }">
      <Input v-model="record.name" size="small" v-if="record.isEdit" />
      <template v-else>{{ value }}</template>
    </template>
    <template #address="{ value, record }">
      <Input v-model="record.age" size="small" v-if="record.isEdit" />
      <template v-else>{{ value }}</template>
    </template>
    <template #age="{ value, record }">
      <Input v-model="record.address" size="small" v-if="record.isEdit" />
      <template v-else>{{ value }}</template>
    </template>
    <template #action="{ value, record, col }">
      <Space>
        <Button size="small" type="primary" v-if="!record.isEdit" @click="record.isEdit = true">
          Edit
        </Button>
        <Button size="small" type="primary" v-if="record.isEdit" @click="save(record)">
          Save
        </Button>
        <Button size="small" v-if="record.isEdit" @click="record.isEdit = false"> Cancel </Button>
        <Popconfirm
          v-if="!record.isEdit"
          title="您确认删除这条内容吗?"
          @ok="(e) => removeRow(record.key)"
        >
          <Button size="small" type="danger">Delete</Button>
        </Popconfirm>
      </Space>
    </template>
  </Table>
</template>
<script setup>
import { ref } from "vue";
import { message } from "kui-vue";
const data = ref([
  {
    key: "0",
    name: "Li Lei",
    age: 28,
    address: "Wu Han Guanggu No. 328",
    isEdit: false,
  },
  {
    key: "1",
    name: "Liu Hao",
    age: 30,
    address: "Wu Han Hongshan No. 128",
    isEdit: false,
  },
  {
    key: "2",
    name: "Hu Cong",
    age: 28,
    address: "Wu Han Nanhu No. 198",
    isEdit: false,
  },
  {
    key: "3",
    name: "Chuchur",
    age: 32,
    address: "Wu Han Nanhu No. 188",
    isEdit: false,
  },
]);
const columns = [
  { title: "Name", key: "name" },
  { title: "House price", key: "age" },
  { title: "Address", key: "address" },
  { title: "Operate", key: "action" },
];
const count = ref(4);
const save = (record) => {
  console.log(record);
  record.isEdit = false;
  message.success("Save successfully!");
};
const removeRow = (key) => {
  data.value = data.value.filter((item) => item.key != key);
};
const add = () => {
  const key = count.value;
  let record = {
    key,
    name: `Name ${key}`,
    age: 30,
    address: `China Wuhan no.${key}`,
    isEdit: false,
  };
  count.value = key + 1;
  data.value.push(record);
};
</script>
```
