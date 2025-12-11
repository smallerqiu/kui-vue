<cn>
### 尺寸和形状
通过 `size` 可控尺寸 ,
</cn>

```vue
<template>
  <Space vertical>
    <Checkbox v-model="isCircle">圆角</Checkbox>
    <RadioGroup v-model="size" type="button" :options="sizes" />
    <Tag v-for="x in 3" :key="x" :size="size" :shape="shape">标签{{ x }}</Tag>
  </Space>
</template>
<script setup>
import { ref, computed } from "vue";
const size = ref("small");
const isCircle = ref(false);
const shape = computed(() => (isCircle.value ? "circle" : ""));
const sizes = [
  { label: "Large", value: "large" },
  { label: "Middle", value: "middle" },
  { label: "small", value: "small" },
];
</script>
```
