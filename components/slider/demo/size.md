<cn>
#### 尺寸/自定义 
size 可以控制操作杆的大小 
</cn>

```vue
<template>
  <div style="max-width:520px;">
    <Slider
      v-model:value="v1"
      :step="10"
      :disabled="disabled"
      :min="20"
      size="small"
    />
    <Slider
      v-model:value="v2"
      range
      :disabled="disabled"
      :min="10"
      :max="80"
      size="small"
    />
    <Slider
      v-model:value="v1"
      :step="10"
      :disabled="disabled"
      :min="20"
      size="small"
      class="slider-demo-custom"
    />
    <Slider
      v-model:value="v2"
      range
      :disabled="disabled"
      :min="10"
      :max="80"
      size="small"
      class="slider-demo-custom"
    />

    <Slider
      :marks="{ 0: '0°C', 25: '25°C', 36: '36°C', 100: '100°C' }"
      :step="null"
      :disabled="disabled"
      size="small"
      :value="25"
    ></Slider>
    <br />
    <br />
    Disabled: <KSwitch v-model:checked="disabled" />
  </div>
</template>
<script setup>
import { ref } from "vue";
const disabled = ref(false);
const v1 = ref(80);
const v2 = ref([30, 50]);
</script>
<style>
.slider-demo-custom .k-slider-track {
  background: linear-gradient(270deg, green 5.56%, orange);
}
</style>
```
