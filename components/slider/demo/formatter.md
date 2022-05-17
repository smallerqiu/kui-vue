<cn>
#### 自定义提示 
使用 tipFormatter 可以设置 Tooltip 的显示的格式。设置 tipFormatter={null}，则隐藏 Tooltip。 
</cn>

```vue
<template>
  <div style="width:520px;">
    <Slider :tipFormatter="v => (`${v}%`)" />
    <br/>
    <br/>
    <Slider :tipFormatter="null" />
  </div>
</template>
```