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
      v-model:value="value"
    />
    <Input placeholder="disabled..." disabled />
    <TextArea v-model:value="value" placeholder="disabled..." />
  </Space>
</template>
<script setup>
import { ref } from "vue";
const value = ref("111");
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
