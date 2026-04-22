<template>
  <Progress :percent="percent" style="width: 300px; margin-bottom: 30px" />
  <Progress :percent="percent" type="circle" />
  <Progress :percent="percent" type="dashboard" />
  <br />
  <ButtonGroup>
    <Button @click="decline" :icon="Minus" />
    <Button @click="increase" :icon="Plus" />
  </ButtonGroup>
</template>
<script setup lang="ts">
import { Minus, Plus } from "kui-icons";
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
