<cn>
### 组合布局
组合布局
</cn>
<en>
### Group Layout
Group layout.
</en>

```vue
<template>
  <Space vertical>
    <RadioGroup :options="types" v-model="direction" type="button" />
    <code>direction: {{ direction }}</code>
    <code>value: {{ cities }}</code>
    <CheckboxGroup :options="options" v-model="cities" @change="change" :direction="direction" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const direction = ref("horizontal");
const types = [
  { label: "Vertical", value: "vertical" },
  { label: "Horizontal", value: "horizontal" },
];
const options = [
  { label: "Beijing", value: "beijing" },
  { label: "Shanghai", value: "shanghai" },
  { label: "Guangzhou", value: "guangzhou" },
  { label: "Wuhan", value: "wuhan" },
  { label: "Other", value: "other" },
];
const cities = ref(["wuhan"]);

const change = (v) => {
  console.log(v);
};
</script>
```
