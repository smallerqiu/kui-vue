<template>
  <div>
    <div class="demo-slider-vertical">
      <Slider vertical
        :value="35"></Slider>
    </div>
    <div class="demo-slider-vertical">
      <Slider vertical
        reverse
        :value="35"></Slider>
    </div>
    <div class="demo-slider-vertical">
      <Slider vertical
        range
        :value="[20, 60]"></Slider>
    </div>
    <div class="demo-slider-vertical">
      <Slider vertical
        reverse
        range
        :value="[20, 60]"></Slider>
    </div>
    <div class="demo-slider-vertical">
      <Slider vertical
        range
        :marks="{ 20: '20°C', 40: '40°C' }"
        :step="10"
        :value="[20, 60]"></Slider>
    </div>
    <div class="demo-slider-vertical">
      <Slider vertical
        reverse
        range
        :marks="{ 20: '20°C', 40: '40°C' }"
        :step="10"
        :value="[20, 60]"></Slider>
    </div>
  </div>
</template>
<<style lang="less">
.demo-slider-vertical{
  height: 300px; 
  margin-left: 30px;
  margin-top: 10px;
  padding-right: 30px;
  display: inline-block
}
</style>>
