<cn>
### 多选
可以使用 options 属性来设置选项, 也可以使用子组件来设置选项。
</cn>

```vue
<template>
  <Space vertical>
    use options
    <code>value: {{ value1 }}</code>
    <RadioGroup :options="options" v-model="value1" />
    <br />
    use children
    <RadioGroup v-model="value1">
      <Radio
        :label="item.label"
        :value="item.value"
        v-for="(item, i) in options"
        :key="i"
      />
    </RadioGroup>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value1 = ref("apple");
const options = [
  { label: "Apple", value: "apple" },
  { label: "Orange", value: "orange" },
  { label: "Banana", value: "banana" },
  { label: "Pear", value: "pear" },
  { label: "Grape", value: "grape" },
];
</script>
```
