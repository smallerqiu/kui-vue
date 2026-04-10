<cn>
### 多选
可以使用 options 属性来设置选项, 也可以使用子组件来设置选项。
</cn>
<en>
### Multiple Selection
You can use the `options` property to define options, or use child components instead.
</en>

```vue
<template>
  <Space vertical>
    use options
    <code>value: {{ value }}</code>
    <CheckboxGroup :options="options" v-model="value" />
    <br />
    use children
    <CheckboxGroup v-model="value" theme="light">
      <Checkbox :label="item.label" :value="item.value" v-for="(item, i) in options" :key="i" />
    </CheckboxGroup>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref(["apple", "grape"]);
const options = ref([
  { label: "Apple", value: "apple" },
  { label: "Orange", value: "orange" },
  { label: "Banana", value: "banana" },
  { label: "Pear", value: "pear" },
  { label: "Grape", value: "grape" },
]);

// 异步更新数据
setTimeout(() => {
  options.value = [
    { label: "Apple1", value: "apple" },
    { label: "Orange1", value: "orange" },
    { label: "Banana1", value: "banana" },
    { label: "Pear1", value: "pear" },
    { label: "Grape1", value: "grape" },
  ];
}, 1000);
</script>
```
