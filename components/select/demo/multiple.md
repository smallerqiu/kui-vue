<cn>
### 多选
通过设置 `multiple` 值来呈现多选模式
</cn>

```vue
<template>
  <Space vertical block>
    <code>v-model: {{ value1 }}</code>
    use options to set options
    <Select v-model="value1" block :options="data" multiple />
    <br />
    <code>v-model: {{ value2 }}</code>
    use children to set options
    <Select v-model="value2" block multiple>
      <Option :value="0">Grape</Option>
      <Option :value="1" label="Apple" />
      <Option :value="2" label="Orange" />
      <Option :value="3" label="Banana" />
      <Option :value="4" label="Pear" />
    </Select>
    <br />
    <code>v-model: {{ value3 }}</code>
    maxTagCount:
    <Select v-model="value3" block :maxTagCount="2" :options="data" multiple />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref([0, 2]);
const value2 = ref([0, 2]);
const value3 = ref([0, 2, 3]);
const data = [
  { label: "Apple", value: 0 },
  { label: "Orange", value: 1 },
  { label: "Banana", value: 2 },
  { label: "Pear", value: 3 },
  { label: "Grape", value: 4 },
];
</script>
```
