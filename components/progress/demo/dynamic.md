<cn>
### 动态展示
会动的进度条才是好进度条。
</cn>
<en>
### Dynamic Display
Animated progress bars show progress better.
</en>

```vue
<template>
  <Progress :percent="percent" style="width:300px;margin-bottom:30px;" />
  <Progress :percent="percent" type="circle" />
  <Progress :percent="percent" type="dashboard" />
  <br />
  <ButtonGroup circle>
    <Button @click="decline" :icon="Remove" />
    <Button @click="increase" :icon="Add" />
  </ButtonGroup>
</template>
<script setup>
import { Remove, Add } from "kui-icons";
import { ref } from "vue";
const percent = ref(30);
const increase = () => {
  let pt = percent.value + 5;
  if (pt > 100) {
    pt = 100;
  }
  percent.value = pt;
};
const decline = () => {
  let pt = percent.value - 5;
  if (pt < 0) {
    pt = 0;
  }
  percent.value = pt;
};
</script>
```
