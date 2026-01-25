<cn>
### 自定义提示 
使用 tipFormatter 可以设置 Tooltip 的显示的格式。
当 tooltipVisible 为 true 时，将始终显示 ToolTip；反之则始终不显示，即使在拖动、移入时也是如此。
</cn>

```vue
<template>
  <Space style="max-width:520px;" vertical block>
    <code>show %</code>
    <Slider :tipFormatter="(v) => `${v}%`" :modelValue="20" />
    <code>hide tooltip</code>
    <Slider :tooltipVisible="false" :modelValue="20" />
    <code>show tooltip for ever</code>
    <Slider :modelValue="70" :tooltipVisible="true" />
  </Space>
</template>
```
