<cn>
### 基本用法
基本用法 ,使用 keyboard 属性可以控制键盘行为。
</cn>

```vue
<template>
  <Space style="font-size:12px;" vertical>
    <InputNumber v-model="value" />
    <Button @click="test">test</Button>
  </Space>
</template>
<script setup>
import { ref } from "vue";
import { message } from "kui-vue";
const value = ref(1);
const test = () => {
  value.value += 1;
  message.info(`当前值：${value.value}`);
};
</script>
```
