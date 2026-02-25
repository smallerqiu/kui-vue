<cn>
### 主题
使用 `theme` 设定主题 ,`shape` 呈现圆角 
</cn>
<en>
### Theme
Use `theme` to set the theme, and `shape` for rounded corners.
</en>

```vue
<template>
  <Space vertical block>
    <Checkbox label="Circle" v-model="isCircle" @change="setShape" />
    <Input placeholder="Please input" :shape="shape" />
    <Input placeholder="Disabled" disabled :shape="shape" />
    <Input placeholder="Please input" :icon="Search" :shape="shape" />
    <Input placeholder="theme='solid'" theme="solid" :shape="shape" />
    <Input placeholder="Please input" :clearable="false" :shape="shape" @search="onSearch" />
    <TextArea placeholder="Please input" :rows="3" />
  </Space>
</template>
<script setup>
import { Search } from "kui-icons";
import { message } from "kui-vue";
import { ref } from "vue";
const isCircle = ref();
const shape = ref();
const setShape = ({ checked }) => {
  shape.value = checked ? "circle" : null;
};
const onSearch = (value) => {
  message.info("This is search event");
  console.log(value);
};
</script>
```
