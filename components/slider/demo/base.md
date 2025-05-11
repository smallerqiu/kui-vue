<cn>
#### 基本用法 
基本用法 
</cn>

```vue
<template>
  <div style="max-width:520px;">
    {{v1}}
     <Slider v-model:value="v1" :step="10" :disabled="disabled" :min="20"/>
     <Slider v-model:value="v2" range :disabled="disabled" :min="10" :max="80"/>
     <Slider :marks="{ 0: '0°C',25: '25°C', 36: '36°C',100: '100°C', }"
      :step="null"
      :disabled="disabled"
      :value="25"></Slider>
     <br />
     <br />
     Disabled: <k-switch v-model:checked="disabled" />
  </div>
</template>
<script setup>
import { ref } from 'vue'
const v1 = ref(30)
const v2 = ref([30, 50])
const disabled = ref(false)
</script>
```