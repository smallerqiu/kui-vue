<template>
  <Space>
    <Avatar size="large" :style="{ backgroundColor: color, verticalAlign: 'middle' }">
      {{ text }}
    </Avatar>
    <Button size="small" @click="changeValue">change</Button>
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const ran = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
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
