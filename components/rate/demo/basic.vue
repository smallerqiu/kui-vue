<template>
  <Space vertical>
    <code>v-model: {{ value }}</code>
    <Rate v-model="value" />
    <code>show score</code>
    <Rate :modelValue="2.5" showScore />
    <code>size = 30</code>
    <Rate :size="30" :modelValue="2" />
    <code>custom icon</code>
    <Rate :icon="Heart" color="red" :modelValue="2.5" :size="30" symbolReverseFill />
    <code>allowHalf = true</code>
    <Rate :icon="Heart" allowHalf color="red" :modelValue="2.5" :size="30" />
    <code>disabled (readonly)</code>
    <Rate :modelValue="3.7" disabled showScore />
  </Space>
</template>
<script setup lang="ts">
import { Heart } from "kui-icons";
import { ref } from "vue";
const value = ref(3);
</script>
