<cn>
#### 组合使用
组合使用可以直接使用 `RadioGroup` 的 `options` 来赋值,或者结合 `Radio` 来组合使用,通过 `disabled` 可以设置组件是否被禁用
> `RadioGroup` 可以直接使用 `options` 来组合，3.0版本增加
</cn>

```vue
<template>
  <Space vertical align="start">
    <Space>
      <Button @click="data = ''" size="small">Clear</Button>
      <Button @click="data = 'apple'" size="small">Select apple</Button>
      Selected: {{ data }}
    </Space>
    <RadioGroup v-model:value="data">
      <Radio label="Apple" value="apple" />
      <Radio label="Orange" value="orange" />
      <Radio label="Banana" value="banana" />
      <Radio label="Grape" value="grape" disabled />
      <Radio label="Pear" value="pear" disabled />
    </RadioGroup>
    <!-- <RadioGroup v-model:value="cities">
      <Radio :label="item.label" :value="item.value" v-for="item in options" :key="item" />
    </RadioGroup> -->
    <RadioGroup :options="options" v-model:value="cities" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const data = ref("apple");
const options = [
  { label: "Beijing", value: "beijing" },
  { label: "Shenzhen", value: "shenzhen" },
  { label: "Shanghai", value: "shanghai" },
  { label: "Guangzhou", value: "guangzhou" },
  { label: "Wuhan", value: "wuhan" },
];
const cities = ref("wuhan");
</script>
```
