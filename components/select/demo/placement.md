<cn>
#### 弹出位置
可以通过 placement 手动指定弹出的位置。
</cn>

```vue
<template>
  <RadioGroup v-model:value="placement">
    <RadioButton value="top-left">topLeft</RadioButton>
    <RadioButton value="top-right">topRight</RadioButton>
    <RadioButton value="bottom-left">bottomLeft</RadioButton>
    <RadioButton value="bottom-right">bottomRight</RadioButton>
  </RadioGroup>
  <br />
  <br />
  <Select v-model:value="value" style="width: 120px" :placement="placement">
    <Option value="WuHan">WuHan 027</Option>
    <Option value="BeiJin">BeiJin 010</Option>
    <Option value="ShenZhen">ShenZhen 0755</Option>
  </Select>
</template>
<script setup>
import { ref } from "vue";
const placement = ref("top-left");
const value = ref("WuHan");
</script>
```
