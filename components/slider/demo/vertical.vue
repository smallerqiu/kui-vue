<template>
  <Space style="height: 300px;" block class="demo-slider-vertical" :size="35">
    <Slider vertical :modelValue="35" size="small" />
    <Slider vertical reverse :modelValue="35" />
    <Slider vertical range :modelValue="[20, 60]" />
    <Slider vertical range :marks="{ 20: '20°C', 40: '40°C' }" :step="10" :modelValue="[20, 60]" />
    <Slider
      vertical
      reverse
      size="small"
      range
      :marks="{ 0: '0°C', 25: '25°C', 36: '36°C', 100: '100°C' }"
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