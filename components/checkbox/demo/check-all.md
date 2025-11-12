<cn>
#### 全选
全选组合
</cn>

```vue
<template>
  <div>
    <Checkbox
      v-model:checked="checkAll"
      :indeterminate="indeterminate"
      @change="handleCheckAll"
    >
      Check all
    </Checkbox>
    <br />
    <CheckboxGroup :options="options" v-model:value="cities" @change="change" />
  </div>
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

const handleCheckAll = (e) => {
  let checked = e.target.checked;
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
