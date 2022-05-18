<cn>
#### 自定义提示 
使用 tipFormatter 可以设置 Tooltip 的显示的格式。设置 tipFormatter={null}，则隐藏 Tooltip。 
当 tooltipVisible 为 true 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。
</cn>

```vue
<template>
  <div style="width:520px;">
    <Slider :tipFormatter="v => (`${v}%`)" :value="20"/>
    <br/>
    <br/>
    <Slider :tipFormatter="null" :value="10"/>
     <br/>
    <br/>
    <Slider :value="10" :tooltipVisible="true"/>
  </div>
</template>
```