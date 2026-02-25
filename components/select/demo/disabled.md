<cn>
### 禁用和不可清除
通过 `v-model` 进行数据双向绑定
</cn>
<en>
### Disabled and Non-clearable
Use `v-model` for two-way data binding.
</en>

```vue
<template>
  <Space vertical block>
    Disabled
    <Select v-model="value1" block disabled :options="data" />
    <Select v-model="value2" block disabled :options="data" multiple />
    <Select v-model="value3" disabled :maxTagCount="2" :options="data" multiple block />
    <br />
    Disabled item
    <Select v-model="value1" block :options="data" />
    <br />
    Clearable = false
    <Select v-model="value1" block :clearable="false" :options="data" />
    <Select v-model="value2" block :clearable="false" :options="data" multiple />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref(2);
const value2 = ref([0, 3]);
const value3 = ref([0, 2, 3]);
const data = [
  { label: "Apple", value: 0 },
  { label: "Orange", value: 1, disabled: true },
  { label: "Banana", value: 2 },
  { label: "Pear", value: 3 },
  { label: "Grape", value: 4 },
];
</script>
```
