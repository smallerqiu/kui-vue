<cn>
#### 基础用法
通过 `v-model:value` 进行数据双向绑定
</cn>

```vue
<template>
  <div>
    <p>use Option</p>
    <Space>
      <Select :width="200" v-model:value="value" :options="data"> </Select>
      <Button @click="clear" size="small">Clear</Button>
      <Button @click="selectOrange" size="small">Choose orange</Button>
    </Space>
    <p>use options</p>
    <Space vertical style="margin-top:10px;">
      <Select :width="200" placeholder="Please Choose">
        <Option :value="1" label="Apple" />
        <Option :value="2" label="Orange" />
        <Option :value="3" label="Banana" disabled />
        <Option :value="4" label="Pear" />
      </Select>
      <Select :width="200" value="1" disabled>
        <Option value="1" label="disabled" />
      </Select>
    </Space>
  </div>
</template>
<script setup>
import { ref } from "vue";
const value = ref(2);
const clear = () => {
  value.value = "";
};
const selectOrange = () => {
  value.value = 1;
};
const data = [
  { label: "Apple", value: 0 },
  { label: "Orange", value: 1 },
  { label: "Banana", value: 2 },
  { label: "Pear", value: 3 },
];
</script>
```
