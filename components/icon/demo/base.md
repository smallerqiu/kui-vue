<cn>
#### 基本用法
可以通过 `type`、`size`  、`color` 属性分别设置图标的类型、大小、颜色,也可以通过设置 `spin` 属性来实现动画旋转效果。
</cn>

```vue
<template>
  <div>
    <Icon type="logo-apple" />
    <Icon type="logo-apple" size="25" />
    <Icon type="logo-apple" size="30" color="green" />
    <Icon type="sync" spin size="25" />
  </div>
</template>
```