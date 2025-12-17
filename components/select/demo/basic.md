<cn>
### 单选
通过 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space vertical>
    use options to set options
    <!-- <Select v-model="value1" :options="data" /> -->
    <br />
    use children to set options
    <Select v-model="value2">
      <Option :value="item.value" v-for="item in data" :key="item.value">
        {{ item.label }}
      </Option>
    </Select>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref(2);
const value2 = ref(2);
const data = ref([
  { label: "Apple", value: 0 },
  { label: "Orange", value: 1 },
  { label: "Banana", value: 2 },
  { label: "Pear", value: 3 },
  { label: "Grape", value: 4 },
]);
// 异步加载数据
setTimeout(() => {
  data.value = [
    { label: "Apple1", value: 0 },
    { label: "Orange1", value: 1 },
    { label: "Banana2", value: 2 },
    { label: "Pear1", value: 3 },
    { label: "Grape2", value: 4 },
  ];
  value2.value = 2;
}, 1000);
</script>
```
