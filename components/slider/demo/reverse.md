<cn>
### 反向
设置 `reverse` 可以将滑动条置反。
</cn>

```vue
<template>
  <div style="max-width:520px;">
    <Slider v-model:value="v1" :reverse="reverse" />
    <Slider
      v-model:value="v2"
      range
      :reverse="reverse"
      :marks="{ 40: '40°C', 50: '50°C' }"
    />
    Reversed:
    <KSwitch v-model:checked="reverse" size="small" />
  </div>
</template>
<script setup>
import { ref } from "vue";
const v1 = ref(30);
const v2 = ref([35, 60]);
const reverse = ref(true);
</script>
```
