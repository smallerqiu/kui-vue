<cn>
#### 主题
使用 `theme` 设定主题 ,`shape` 呈现圆角 
</cn>

```vue
<template>
  <Space vertical style="width:512px;">
    <Checkbox label="Circle" v-model:checked="shape" @change="setShape"/>
    <Input placeholder="请输入内容..." theme="light" :shape="shape"/>
    <Input placeholder="disabled..." disabled theme="light" :shape="shape"/>
    <Input placeholder="请输入内容..." theme="light" :icon="Search" :shape="shape"/>
    <Input placeholder="请输入内容..." theme="light"  clearable :shape="shape" @search="onSearch"/>
    <TextArea placeholder="请输入内容..." theme="light" :rows="3"/>
  </Space>
</template>
<script setup>
import { Search } from "kui-icons";
import { message } from "kui-vue";
import { ref } from "vue";
const shape = ref()
const setShape = (e) => {
  shape.value = e.target.checked ? 'circle' : null
}
const onSearch = (value) => {
  message.info("This is search event");
  console.log(value);
}
</script>
```