<cn>
#### 基础用法
使用 `v-model` 进行数据双向绑定
</cn>

```vue
<template>
  <Space vertical style="width:512px;" >
    <Input placeholder="请输入内容..." @blur="blur" @focus="focus" @change="change" />
    <Input placeholder="disabled..." disabled />
  </Space>
</template>
<script setup>
const blur = ()=> {
  console.log('blur')
}
const focus = ()=> {
  console.log('focus')
}
const change = ()=> {
  console.log('change')
},
</script>
```