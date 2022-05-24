<cn>
#### 带标签的 
使用 marks 属性标注滑块的刻度，使用 value 指定滑块位置。 
</cn>

```vue
<template>
  <div style="width:520px;">
     <div>step=10</div>
    <Slider :step="10"
      :marks="{  10: '10', 20: '20', 30: '30', 40: '40', 50: '50', 80: '80' }"
      :value="[10, 80]"
      :max="80"
      :min="10"
      :range="true"></Slider>
    <br />
    <br />
    <div>step=0.1</div>
    <Slider :step="0.1"
      :marks="{ 0.1: '0.1', 0.2: '0.2', 0.3: '0.3', 0.4: '0.4', 0.5: '0.5' }"
      :min="0"
      :max="1"
      :value="[0.1, 0.5]"
      :range="true"></Slider>
    <br />
    <br />
    <div>Marks & step=10</div>
    <Slider :marks="{ 25: '25°C', 36: '36°C' }"
      :step="10"
      :value="[0, 100]"
      :range="true"></Slider>
    <br />
    <br />
    <div>step=null</div>
    <Slider :marks="{ 0: '0°C',25: '25°C', 36: '36°C',100: '100°C', }"
      :step="null"
      :value="[0, 100]"
      :range="true"></Slider>
    <br />
    <br />
    <Slider :marks="{ 0: '0°C',25: '25°C', 36: '36°C',100: '100°C', }"
      :step="null"
      :value="25"></Slider>
    <br />
    <br />
    <div>Inclued</div>
    <Slider :marks="{ 20: '20°C', 40: '40°C' }"
      :included="false"
      :value="[0, 100]"
      :range="true"></Slider>
  </div>
</template>
```