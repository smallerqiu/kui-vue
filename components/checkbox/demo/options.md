<cn>
### 组合使用Options
组合使用可以直接使用 `CheckboxGroup` 的 `options` 来赋值,
或者结合子组件 `Checkbox` 来组合使用,通过 `disabled` 可以设置组件是否被禁用
</cn>

```vue
<template>
  <Space vertical> 
    <RadioGroup :options="types" v-model="direction" type="button" />
    <br />
    Selected: {{ direction }}
    <br />
    cities: {{ cities }}
    <CheckboxGroup
      :options="options"
      v-model="cities"
      @change="change"
      :direction="direction"
    />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const direction = ref("horizontal");
const types = [
  { label: "垂直", value: "vertical" },
  { label: "水平", value: "horizontal" },
];
const options = [
  { label: "Beijing", value: "beijing" },
  { label: "Shenzhen", value: "shenzhen" },
  { label: "Shanghai", value: "shanghai" },
  { label: "Guangzhou", value: "guangzhou" },
  { label: "Wuhan", value: "wuhan" },
  { label: "Other", value: "other", disabled: true },
];
const cities = ref(["wuhan"]);

const change = (v) => {
  console.log(v);
};
</script>
```
