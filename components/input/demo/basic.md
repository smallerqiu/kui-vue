<cn>
### 基础用法
使用 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space vertical block>
    <code>v-model: {{ value }}</code>
    <Input placeholder="请输入内容..." @blur="blur" @focus="focus" v-model="value" />
    <Input placeholder="clearable=false" :clearable="false" />
    <Input placeholder="disabled..." disabled />
    <Input placeholder="readonly..." readonly v-model="value" />
    <TextArea v-model="value" />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value = ref("");
const blur = () => {
  console.log("blur");
};
const focus = () => {
  console.log("focus");
};
const change = () => {
  console.log("change");
};
</script>
```
