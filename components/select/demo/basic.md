<cn>
### 单选
通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space vertical>
    use options to set options
    <Select v-model="value1" :options="data" />
    <br />
    use children to set options
    <Select v-model="value2">
      <Option :value="0">Grape</Option>
      <Option :value="1" label="Apple" />
      <Option :value="2" label="Orange" />
      <Option :value="3" label="Banana" />
      <Option :value="4" label="Pear" />
    </Select>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref(2);
const value2 = ref(2);
const data = ref([]);
const data1 = [
  { label: "Apple", value: 0 },
  { label: "Orange", value: 1 },
  { label: "Banana", value: 2 },
  { label: "Pear", value: 3 },
  { label: "Grape", value: 4 },
];
const data2 = [
  { label: "Apple1", value: 0 },
  { label: "Orange1", value: 1 },
  { label: "Banana1", value: 2 },
  { label: "Pear1", value: 3 },
  { label: "Grape1", value: 4 },
];
setTimeout(() => {
  data.value = data1;

  setTimeout(() => {
    data.value = data2;
  }, 1000);
}, 1000);
</script>
```
