<cn>
### 垂直
垂直方向的 Slider。
</cn>

```vue
<template>
  <Space style="height: 300px;" block class="demo-slider-vertical" :size="35">
    <Slider vertical :modelValue="35" />
    <Slider vertical reverse :modelValue="35" />
    <Slider vertical range :modelValue="[20, 60]" />
    <Slider
      vertical
      range
      :marks="{ 20: '20°C', 40: '40°C' }"
      :step="10"
      :modelValue="[20, 60]"
    />
    <Slider
      vertical
      reverse
      range
      :marks="{ 20: '20°C', 40: '40°C' }"
      :step="10"
      :modelValue="[20, 60]"
    />
  </Space>
</template>
<style lang="less">
.demo-slider-vertical > div {
  height: 100%;
}
</style>
```
