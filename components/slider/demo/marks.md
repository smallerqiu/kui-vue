<cn>
#### 带标签的 
使用 marks 属性标注滑块的刻度，使用 value 指定滑块位置。 
</cn>

```vue
<template>
  <div style="width:520px;">
    <div>step=10</div>
    <Slider 
      :step="10" 
      :marks="{ 0: '0', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50', 100: '100' }" 
      :value="[10, 100]" 
      :range="true"></Slider>
    <br/>
    <br/>
    <div>step=0.1</div>
    <Slider 
      :step="0.1" 
      :marks="{ 0.1: '0.1', 0.2: '0.2', 0.3: '0.3', 0.4: '0.4', 0.5: '0.5' }" 
      :min="0" 
      :max="1" 
      :value="[0.1, 0.5]" 
      :range="true"></Slider>
    <br/>
    <br/>
    <div>Marks</div>
    <Slider 
      :marks="{ 20: '20°C', 40: '40°C' }" 
      :value="[0, 100]" 
      :range="true" ></Slider>
    <br/>
    <br/>
    <div>Inclued</div>
    <Slider 
      :marks="{ 20: '20°C', 40: '40°C' }" 
      :included="false" 
      :value="[0, 100]" 
      :range="true"></Slider>
  </div>
</template>
```