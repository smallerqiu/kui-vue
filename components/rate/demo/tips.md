<cn>
### 文案展现 / 允许清除
给评分组件加上文案展示。
</cn>
<en>
### Text Display / Allow Clear
Add text display to the rating component.
</en>

```vue
<template>
  <Space vertical>
    <Space>
      <Rate :tooltips="desc" v-model="value" />
      {{ tipText }}
    </Space>
    <br />
    <code>allowClear = true</code>
    <Rate :allowClear="true" :modelValue="3" />
    <code>allowClear = false</code>
    <Rate :allowClear="false" :modelValue="3" />
  </Space>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
const value = ref(3);
const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const tipText = computed(() => {
  return desc[value.value - 1];
});
</script>
```
