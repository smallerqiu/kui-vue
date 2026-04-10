<cn>
### 颜色和格式
自定义颜色和自定义格式。
</cn>
<en>
### Color and Format
Customize color and format.
</en>

```vue
<template>
  <Progress
    :percent="percent"
    :format="format1"
    :color="color"
    style="width:300px;margin-bottom:30px;"
  />
  <Progress :percent="percent" type="circle" :format="format2" :color="color" />
  <Progress :percent="percent" type="dashboard" :format="format3" :color="color" />
  <br />
  <ButtonGroup circle>
    <Button @click="decline" :icon="Remove" />
    <Button @click="increase" :icon="Add" />
  </ButtonGroup>
</template>
<script setup lang="ts">
import { Remove, Add } from "kui-icons";
import { ref } from "vue";
const percent = ref(0);
const color = ref("");

const format2 = (pt) => {
  return pt + "℃";
};
const format3 = (pt) => {
  return pt + "L";
};
const format1 = () => {
  let pt = percent.value;
  if (pt < 30) {
    return "Empty";
  } else if (pt >= 30 && pt < 50) {
    return "Weak";
  } else if (pt >= 50 && pt < 80) {
    return "Normal";
  } else if (pt >= 80) {
    return "Strong";
  }
};
const increase = () => {
  let pt = percent.value + 5;
  if (pt > 100) {
    pt = 100;
  }
  percent.value = pt;
  changeColor(pt);
};
const decline = () => {
  let pt = percent.value - 5;
  if (pt < 0) {
    pt = 0;
  }
  percent.value = pt;
  changeColor(pt);
};
const changeColor = (pt) => {
  let c = color.value;
  if (pt >= 30 && pt < 50) {
    c = "#bdc78d";
  } else if (pt >= 50 && pt < 80) {
    c = "#c7b98d";
  } else if (pt >= 80) {
    c = "#f79e08";
  }
  color.value = c;
};
</script>
```
