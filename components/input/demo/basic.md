<cn>
#### 基础用法
使用 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space vertical style="width:512px;">
    Input: {{ value }}
    <Input
      placeholder="请输入内容..."
      @blur="blur"
      @focus="focus"
      v-model="value"
    />
    <Input placeholder="disabled..." disabled />
    <Input placeholder="readonly..." readonly v-model="value"/>
    <TextArea v-model="value" placeholder="disabled..." />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value = ref();
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
