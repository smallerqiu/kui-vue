<cn>
### 基本用法 
基本用法 
</cn>

```vue
<template>
  <Space style="max-width:520px;" vertical block>
    <code>value: {{ v1 }}</code>
    <code>Disabled: <k-switch v-model="disabled" /></code>
    <Slider v-model="v1" :step="10" :disabled="disabled" :min="20" />
    <Slider v-model="v2" range :disabled="disabled" :min="10" :max="80" />
    <Slider
      :marks="{ 0: '0°C', 25: '25°C', 36: '36°C', 100: '100°C' }"
      :step="null"
      :disabled="disabled"
      :value="25"
    ></Slider>
  </Space>
</template>
<script setup>
import { ref } from "vue";
const v1 = ref(30);
const v2 = ref([30, 50]);
const disabled = ref(false);
</script>
```
