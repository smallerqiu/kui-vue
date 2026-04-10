<cn>
### 反向
设置 `reverse` 可以将滑动条置反。
</cn>
<en>
### Reverse
Set `reverse` to invert the slider.
</en>

```vue
<template>
  <Space style="max-width:520px;" vertical block>
    <code>
      Reversed:
      <KSwitch v-model="reverse" size="small" />
    </code>
    <Slider v-model="v1" :reverse="reverse" />
    <Slider v-model="v2" range :reverse="reverse" :marks="{ 40: '40°C', 50: '50°C' }" />
  </Space>
</template>
<script setup lang="ts">
import { ref } from "vue";
const v1 = ref(30);
const v2 = ref([35, 60]);
const reverse = ref(true);
</script>
```
