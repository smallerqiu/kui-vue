<cn>
### 基本用法 
最简单的用法。
</cn>

```vue
<template>
  <Space vertical>
    <code>v-model: {{ value }}</code>
    <Rate v-model="value" />
    <code>show score</code>
    <Rate :modelValue="2.5" showScore />
    <code>size = 30</code>
    <Rate :size="30" :modelValue="2" />
    <code>custom icon</code>
    <Rate :icon="Heart" color="red" :modelValue="2.5" :size="30" />
    <code>allowHalf = true</code>
    <Rate :icon="Heart" allowHalf color="red" :modelValue="2.5" :size="30" />
    <code>disabled (readonly)</code>
    <Rate :modelValue="3.7" disabled showScore />
  </Space>
</template>
<script setup>
import { ref } from "vue";
import { Heart } from "kui-icons";
const value = ref(3);
</script>
```
