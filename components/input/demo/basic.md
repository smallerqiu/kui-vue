<cn>
### 基本用法
使用 `v-model` 进行数据双向绑定
</cn>
<en>
### Basic Usage
Use `v-model` for two-way data binding.
</en>

```vue
<template>
  <Space vertical block>
    <code>v-model: {{ value }}</code>
    <Input placeholder="Please input" @blur="blur" @focus="focus" v-model="value" />
    <Input placeholder="clearable=false" :clearable="false" />
    <Input placeholder="Disabled" disabled />
    <Input placeholder="Readonly" readonly v-model="value" />
    <TextArea v-model="value" placeholder="TextArea"/>
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
