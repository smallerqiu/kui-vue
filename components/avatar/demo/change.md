<cn>
### 自动调整字符大小
对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。
</cn>

```vue
<template>
  <Space>
    <Avatar
      size="large"
      :style="{ backgroundColor: color, verticalAlign: 'middle' }"
    >
      {{ text }}
    </Avatar>
    <Button size="small" @click="changeValue">change</Button>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const ran = (min, max) => {
  return parseInt(Math.random() * (max - min) + min);
};
const userList = ["K", "Zhang", "Mr Qiu", "Jack cheng", "Jone Blue"];
const colorList = ["#3a95ff", "#00bb5d", "#ff3300", "#ffa500"];

const text = ref(userList[0]);
const color = ref(colorList[0]);

const changeValue = () => {
  text.value = userList[ran(0, 3)];
  color.value = colorList[ran(0, 3)];
};
</script>
```
