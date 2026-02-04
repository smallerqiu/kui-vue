<cn>
### 全选
全选组合
</cn>
<en>
### Check All
Select or deselect all options.
</en>

```vue
<template>
  <Space vertical>
    <code>value: {{ cities }}</code>
    <Checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
      Check all
    </Checkbox>
    <CheckboxGroup :options="options" v-model="cities" @change="change" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const checkAll = ref(false);
const indeterminate = ref(false);

const options = [
  { label: "Beijing", value: "beijing" },
  { label: "Shenzhen", value: "shenzhen" },
  { label: "Shanghai", value: "shanghai" },
  { label: "Guangzhou", value: "guangzhou" },
  { label: "Wuhan", value: "wuhan" },
];
const cities = ref([]);

const handleCheckAll = ({ checked }) => {
  console.log(checked);
  cities.value = checked ? options.map((v) => v.value) : [];
  indeterminate.value = !checked && !options.length;
};
const change = (data) => {
  let length = cities.value.length;
  indeterminate.value = length > 0 && length < options.length;

  checkAll.value = length == options.length;
};
</script>
```
